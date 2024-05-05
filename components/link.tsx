import { cn } from "@/lib/utils/cn";
import NextLink from "next/link";
import { ReactNode } from "react";

type LinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export const Link = ({ href, children, className }: LinkProps) => {
  return (
    <NextLink
      href={href}
      className={cn("hover:underline transition-all duration-300", className)}
    >
      {">"}
      {children}
    </NextLink>
  );
};
