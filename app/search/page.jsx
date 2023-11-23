"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { Title } from "@/components/primitives";
import MovieCard from "@/components/movieCard";
import { SearchInput } from "@/components/CustomInput";
import useFetch from "@/app/services/apiService";
import { searchBy, titleRoute } from "@/app/services/apiRoutes";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import Error from "../error";
import { Loading } from "@/components/LoadingSkeleton";
import { Spinner } from "@nextui-org/spinner";
const page = () => {
  const searchParams = useSearchParams();
  const LIMIT = 9;
  //Need specific in path because the api does not support params in path if exist in query (Next page allways include the params)
  let searchWithLimit = [
    titleRoute + searchParams.get("q") + `?limit=${LIMIT}`,
  ];
  const [search, setSearch] = useState(searchWithLimit);
  const router = useRouter();
  const [movies, setMovies] = useState([]);
  let { data, status, loading, setData } = useFetch({
    url: searchBy(search),
  });
  useEffect(() => {
    setMovies([]);
    setSearch(searchWithLimit);
  }, [searchParams.get("q")]);
  useEffect(() => {
    if (!data) return;
    setMovies((prev) => [...prev, data]);
    setData(null); //improves performance
  }, [data]);

  if (!searchParams.get("q")) router.push("/");
  if (status != "ok") return <Error></Error>;
  return (
    <section className="grid gap-y-4 ">
      <Title>Search by title</Title>
      <div className="w-80">
        <SearchInput
          onSubmit={(e) => {
            router.push(`/search?q=${e.search}`);
          }}
          endContent
        />
      </div>
      {movies.length > 0 ? (
        <div className="grid grid-cols-1 m-auto mt-4 md:mx-0 md:grid-cols-3 gap-y-2 gap-x-2 w-fit">
          {movies
            .flatMap((movie) => movie)
            .flat(2)
            .map((i) => {
              return i.results.map((movie) => {
                return (
                  <MovieCard
                    url={`/movie/${movie.id}`}
                    img={movie.primaryImage?.url}
                    key={movie.id}
                    title={movie.titleText.text}
                  />
                );
              });
            })}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3">
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
        </div>
      )}

      {movies && movies.length > 0 && movies[movies.length - 1][0]?.next && (
        <Button
          startContent={loading ? <Spinner /> : <></>}
          onClick={(e) => {
            if (loading) {
              e.preventDefault();
              return;
            }
            setSearch((prev) => movies[movies.length - 1][0].next);
          }}
        >
          Load more
        </Button>
      )}
    </section>
  );
};
export default page;
