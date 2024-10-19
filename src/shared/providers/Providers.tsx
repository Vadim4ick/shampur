"use client";

import { useBasketStore } from "@/store/basket";
import { ReactNode, useEffect, useState } from "react";

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
    return <div>Load...</div>;
  }

  return <>{children}</>;
};

export { Providers };
