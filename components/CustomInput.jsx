import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";
export const SearchInput = ({
  onSubmit,
  endContent,
  maxWidth,
  startContent,
  ...props
}) => {
  const { handleSubmit, register } = useForm();
  const searchIcon = (
    <CiSearch
      size={24}
      onClick={handleSubmit(onSubmit)}
      className="cursor-pointer text-secondary"
    />
  );
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <Input
        {...props}
        name="search"
        {...register("search")}
        aria-label="Search"
        classNames={{
          input: "!text-black",
          inputWrapper:
            "bg-primary-600 hover:!bg-primary-400 focus-within:!bg-primary-600",
        }}
        labelPlacement="outside"
        placeholder="Search..."
        type="text"
        endContent={endContent ? searchIcon : null}
        startContent={startContent ? searchIcon : null}
      />
    </form>
  );
};
