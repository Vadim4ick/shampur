import { cn } from "@/shared/lib/utils";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export const Container = ({ className, children }: Props) => {
  return (
    <div className={cn("mx-auto w-full max-w-[1228px] px-3", className)}>
      {children}
    </div>
  );
};
