import { Skeleton } from "@nextui-org/skeleton";
import { Card } from "@nextui-org/card";
export const Loading = () => {
  return (
    <div className="flex flex-col">
      <Card className="h-[200px] w-[406px]  rounded-large">
        <Skeleton className="mx-2 mt-4 rounded-lg">
          <div className="h-10 rounded-lg bg-black/40"></div>
        </Skeleton>
      </Card>
    </div>
  );
};
