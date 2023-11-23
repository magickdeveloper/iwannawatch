import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
export const AccentParagraph = ({ children, variants }) => {
  return (
    <span className={twMerge("font-semibold text-secondary", variants)}>
      {children}
    </span>
  );
};

export const Title = ({ children, variants }) => {
  return (
    <h1 className={twMerge(`md:text-5xl text-3xl text-foreground`, variants)}>
      {children}
    </h1>
  );
};
