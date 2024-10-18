import { catalogItems } from "@/shared/const/catalogItems";
import { Container } from "@/shared/ui/container";
import { CatalogItems } from "./CatalogItems";

const CatalogPage = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col justify-between gap-[58px] max-mobile:gap-[30px]">
          {catalogItems.map((el) => {
            return <CatalogItems key={el.id} el={el} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export { CatalogPage };
