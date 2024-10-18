import { catalogItems } from "@/shared/const/catalogItems";
import { Container } from "@/shared/ui/container";
import { CatalogItems } from "./CatalogItems";

const CatalogPage = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col justify-between gap-[52px] max-mobile:gap-[48px]">
          {catalogItems.map((el, idx) => {
            const isLastItem = idx === catalogItems.length - 1;

            return <CatalogItems key={el.id} el={el} isLastItem={isLastItem} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export { CatalogPage };
