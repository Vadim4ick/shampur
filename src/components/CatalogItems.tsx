"use client";

import { ICatalogItems } from "@/shared/const/catalogItems";
import { CatalogItem } from "./CatalogItem";
import { useState } from "react";
import { cn } from "@/shared/lib/utils";

const CatalogItems = ({
  el,
  isLastItem,
}: {
  el: ICatalogItems;
  isLastItem: boolean;
}) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const onClick = (category: string | null) => {
    setActiveCategory(category);
  };

  const arr = activeCategory
    ? el.items.filter(
        (item) =>
          item.category.toLocaleLowerCase() ===
          activeCategory.toLocaleLowerCase(),
      )
    : el.items;

  return (
    <div
      data-catalog={el.id}
      className={cn("flex flex-col gap-[26px] border-b border-[#DFDFDF]", {
        "border-none": isLastItem,
        "pb-[52px] max-mobile:pb-[48px]": !isLastItem,
      })}
    >
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-[28px] font-bold leading-[38px] text-[#363636]">
          {el.title}
        </h2>

        <div className="custom-scrollbar flex items-center gap-1.5 overflow-x-auto pb-[10px]">
          <button
            onClick={() => onClick(null)}
            className={cn(
              "cursor-pointer rounded-full border bg-[#E9E9E9] px-[11px] py-[7px] text-[15px] font-semibold leading-[20px] text-[#363636]",
              {
                "border border-[#FFC043] bg-transparent text-[#DD9B17]":
                  !activeCategory,
              },
            )}
          >
            Все
          </button>

          {el.categories.map((category) => {
            return (
              <button
                key={category}
                onClick={() => onClick(category)}
                className={cn(
                  "cursor-pointer rounded-full border bg-[#E9E9E9] px-[11px] py-[7px] text-[15px] font-semibold leading-[20px] text-[#363636]",
                  {
                    "border border-[#FFC043] bg-transparent text-[#DD9B17]":
                      activeCategory === category,
                  },
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-x-[20px] gap-y-[52px] max-tablet:grid-cols-3 max-mobile:grid-cols-2 max-mobile:gap-y-[48px] max-mobile550:grid-cols-1">
        {arr.map((item) => {
          return <CatalogItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export { CatalogItems };
