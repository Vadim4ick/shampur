"use client";

import { useBasketStore } from "@/store/basket";
import { ReactNode, useEffect, useState } from "react";
import { Loader } from "../ui/loader";

const Providers = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  const initializeBasket = useBasketStore((state) => state.initializeBasket);

  useEffect(() => {
    if (isLoading) return;

    initializeBasket();
  }, [initializeBasket, isLoading]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="z-50 h-screen w-full bg-white">
        <Loader className="absolute left-1/2 top-1/2 size-10" />
      </div>
    );
  }

  return <>{children}</>;
};

export { Providers };
