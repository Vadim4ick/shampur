"use client";

import { ICatalogItems } from "@/shared/const/catalogItems";
import { CatalogItem } from "./CatalogItem";
import { useState } from "react";

const CatalogItems = ({ el }: { el: ICatalogItems }) => {
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
    <div data-catalog={el.id} className="flex flex-col gap-[36px]">
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-[28px] font-bold leading-[38px] text-[#363636]">
          {el.title}
        </h2>

        <div className="flex items-center gap-1.5 max-mobile:hidden">
          <button
            onClick={() => onClick(null)}
            className="cursor-pointer rounded-full bg-[#E9E9E9] px-[12px] py-[8px] text-[15px] font-semibold leading-[20px] text-[#363636]"
          >
            Все
          </button>

          {el.categories.map((category) => {
            return (
              <button
                key={category}
                onClick={() => onClick(category)}
                className="cursor-pointer rounded-full bg-[#E9E9E9] px-[12px] py-[8px] text-[15px] font-semibold leading-[20px] text-[#363636]"
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-x-[20px] gap-y-[50px]">
        {arr.map((item) => {
          return <CatalogItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export { CatalogItems };
