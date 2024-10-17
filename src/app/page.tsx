import { CatalogItems } from "@/components/CatalogItems";
import { ArrowBottom } from "@/shared/icons/ArrowBottom";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="max-mobile:pt-[30px] pb-[75px] pt-[58px]">
        <Container>
          <div className="max-mobile:gap-[30px] flex flex-col justify-between gap-[58px]">
            <h2 className="max-mobileSmall:max-w-[305px] mx-auto text-center text-[36px] font-bold leading-[49px] text-[#363636]">
              Блюда на гриле с доставкой по Краснодару
            </h2>

            <div className="relative h-[400px] w-full">
              <Image
                src={"/img/banners/1.png"}
                fill
                alt="banners"
                className="rounded-[12px] object-cover"
              />

              <div className="max-mobile:pt-[30px] max-mobile:px-[22px] max-mobile:items-center max-mobile:pb-[26px] absolute flex h-full w-full flex-col justify-between p-[60px]">
                <div className="flex w-full flex-col items-start gap-[14px]">
                  <h2 className="max-mobile:text-[28px] max-mobile:leading-[38px] text-[47px] font-[800] uppercase leading-[64px] text-white">
                    бесплатная доставка
                  </h2>

                  <p className="text-[18px] font-[700] leading-[25px] text-[#F4F4F4]">
                    При сумме заказа от 2000 руб.
                  </p>
                </div>

                <Button
                  addonRight={<ArrowBottom />}
                  className="h-[50px] w-[184px] gap-[10px] text-[14px]"
                >
                  Смотреть Меню
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CatalogItems />
    </main>
  );
}
