import { catalogItems } from "@/shared/const/catalogItems";
import { Container } from "@/shared/ui/container";
import { CatalogItem } from "./CatalogItem";

const CatalogItems = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col justify-between gap-[58px] max-mobile:gap-[30px]">
          {catalogItems.map((el) => {
            return (
              <div
                data-catalog={el.id}
                key={el.id}
                className="flex flex-col gap-[36px]"
              >
                <div className="flex flex-col gap-[10px]">
                  <h2 className="text-[28px] font-bold leading-[38px] text-[#363636]">
                    {el.title}
                  </h2>

                  <div className="flex items-center gap-1.5 max-mobile:hidden">
                    {el.categories.map((category) => {
                      return (
                        <button
                          key={category}
                          className="cursor-pointer rounded-full bg-[#E9E9E9] px-[12px] py-[8px] text-[15px] font-semibold leading-[20px] text-[#363636]"
                        >
                          {category}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-x-[20px] gap-y-[50px]">
                  {el.items.map((item) => {
                    return <CatalogItem key={item.id} item={item} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export { CatalogItems };
