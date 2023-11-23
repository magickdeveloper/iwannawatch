"use client";

import { FaSkullCrossbones } from "react-icons/fa";
import { useRouter } from "next/navigation";
export default function Error() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center text-2xl md:text-4xl">
      <h2 className="flex items-center gap-x-3">
        <FaSkullCrossbones size={64} /> Something went wrong!
      </h2>
      <div
        className="cursor-pointer text-secondary"
        onClick={() => router.push("/")}
      >
        Go home
      </div>
    </div>
  );
}
