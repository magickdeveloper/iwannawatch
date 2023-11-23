import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import NextImage from "next/image";

const MovieCard = ({ title, url, img }) => {
  return (
    <Link href={url ?? "/"}>
      <Card className="h-[200px] w-[406px] max-h-[200px] ">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start   h-full ">
          <p className="p-1 text-sm font-bold uppercase rounded text-secondary-200 bg-black/80">
            {title}
          </p>
        </CardHeader>
        <Image
          isZoomed
          as={NextImage}
          height={200}
          width={406}
          removeWrapper
          alt="Card background"
          className="z-0 object-cover w-full h-full"
          src={img ?? "/no-image.png"}
        />
      </Card>
    </Link>
  );
};
export default MovieCard;
