"use client";
import { Title } from "@/components/primitives";
import { IoIosStar } from "react-icons/io";
import { FaRankingStar } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import useFetch from "../../services/apiService";
import { searchById } from "../../services/apiRoutes";
import { Skeleton } from "@nextui-org/skeleton";
import { FaLink } from "react-icons/fa";
const page = ({ params }) => {
  const FloatingBubble = ({ children }) => (
    <div className="p-2 rounded-full bg-background w-fit h-fit">
      <div className="bg-secondary-500 gap-y-2 flex-col items-center flex justify-center rounded-full w-[10rem] h-[10rem]">
        {children}
      </div>
    </div>
  );
  const { data, status, loading } = useFetch({
    url: searchById(params.id),
    params: { info: "custom_info" },
  });

  const SmDetails = ({ hiddenOnMD, variants, children }) => (
    <div
      className={twMerge(
        `p-2 mt-2 rounded w-fit bg-primary-700 text-center items-center justify-center flex flex-col ${
          hiddenOnMD ? "md:hidden" : ""
        }`,
        variants
      )}
    >
      {children}
    </div>
  );

  const Ranking = ({ rank }) => {
    return (
      <>
        <FaRankingStar size={32} />
        Rating: #{rank ?? "?"}
      </>
    );
  };
  const Rating = ({ rating, votes }) => {
    return (
      <>
        <div className="flex gap-x-1">
          <IoIosStar fill="yellow" size={32} />
          <p className="text-xl w-fit h-fit">{rating ?? "?"}/10</p>
        </div>
        <p className="">{votes ?? "?"} votes</p>
      </>
    );
  };
  if (loading) return <Skeleton className="w-full h-full rounded"></Skeleton>;
  if (status != "ok") return <p>error</p>;
  const movie = data[0].results;
  return (
    <section className="absolute left-0 w-full mt-20 top-48">
      <div className="w-full flex-col md:h-[calc(100vh-10rem)] h-[calc(100%_-_30rem)]  lg:h-[25rem] bg-primary-900  relative md:grid flex  md:grid-cols-2 lg:grid-cols-4 px-2 ">
        <div>
          <div className="w-[15rem] h-[26rem] bottom-24  left-12 p-2 bg-background m-auto  md:mt-0 mt-2 md:-translate-y-40 rounded-2xl ">
            <img
              src={movie?.primaryImage?.url ?? "/no-image.png"}
              className="w-[15rem] h-[25rem]   rounded-2xl"
            ></img>
          </div>
        </div>
        <div className="inline-block col-span-1 pt-4 md:translate-y-0 lg:col-span-3">
          <Title variants={`text-center text-white pt-10`}>
            {movie?.titleText.text}
          </Title>
          <div className="pt-4 overflow-auto text-center md:max-h-[12rem]">
            {movie?.plot?.plotText.plainText}
          </div>
          <div className="absolute hidden p-2 -top-32 md:flex gap-x-2">
            <FloatingBubble>
              <Rating
                rating={movie.ratingsSummary?.aggregateRating}
                votes={movie.ratingsSummary?.voteCount}
              />
            </FloatingBubble>
            <FloatingBubble>
              <Ranking rank={movie.meterRanking?.currentRank}></Ranking>
            </FloatingBubble>
          </div>
          <div className="flex gap-x-2">
            <SmDetails hiddenOnMD>
              <Rating
                rating={movie.ratingsSummary?.aggregateRating}
                votes={movie.ratingsSummary?.voteCount}
              />
            </SmDetails>
            <SmDetails hiddenOnMD>
              <Ranking rank={movie.meterRanking?.currentRank} />
            </SmDetails>
            {movie?.trailer ? (
              <Link href={movie.trailer}>
                <SmDetails variants={`bg-secondary-600`}>
                  <FaPlay size={32}></FaPlay>Watch trailer
                </SmDetails>
              </Link>
            ) : (
              ""
            )}
            <a target="_blank" href={"https://www.imdb.com/title/" + movie?.id}>
              <SmDetails variants={`bg-secondary-600`}>
                <FaLink size={32} />
                Full page in IMDb
              </SmDetails>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
