"use client";

import { catalogItems } from "@/shared/const/catalogItems";
import { Container } from "@/shared/ui/container";
import { CatalogItems } from "./CatalogItems";
import { useEffect } from "react";
import { useStoreCatalog } from "@/store/catalog";

const fetchCatalog = async () => {
  const response = await fetch("/api/getMenuId", {
    method: "POST",
  });
  const data = await response.json();

  return data;
};

const CatalogPage = () => {
  const { setItemCategories, itemCategories } = useStoreCatalog();

  useEffect(() => {
    fetchCatalog().then((data) => {
      setItemCategories(data.itemCategories);
    });
  }, [setItemCategories]);

  // const transformedData = itemCategories.map((item) => ({
  //   id: item.id,
  //   title: item.name,
  //   items: { ...item.items },
  // }));

  return (
    <section>
      <Container>
        <div className="flex flex-col justify-between gap-[52px] max-mobile:gap-[48px]">
          {itemCategories.map((el, idx) => {
            const isLastItem = idx === catalogItems.length - 1;

            return <CatalogItems key={el.id} el={el} isLastItem={isLastItem} />;
          })}
          {/* {catalogItems.map((el, idx) => {
            const isLastItem = idx === catalogItems.length - 1;

            return <CatalogItems key={el.id} el={el} isLastItem={isLastItem} />;
          })} */}
        </div>
      </Container>
    </section>
  );
};

export { CatalogPage };
