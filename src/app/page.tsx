import { Banner } from "@/components/Banner";
import { CatalogItems } from "@/components/CatalogItems";
import { DeliveryIcon } from "@/shared/icons/DeliveryIcon";
import { PaymentIcon } from "@/shared/icons/PaymentIcon";
import { TimeIcon } from "@/shared/icons/TimeIcon";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";

export default function Home() {
  return (
    <main>
      <Banner />
      <CatalogItems />

      {/* Доставка и оплата */}
      <section className="pt-[208px]">
        <Container>
          <div className="flex flex-col gap-6">
            <h2 className="text-[28px] font-[700] leading-[38px] text-[#363636]">
              Доставка и оплата
            </h2>

            <div className="flex justify-between rounded-[12px] bg-[#EDEDED] px-[50px] py-[36px]">
              <article className="flex flex-col gap-[33px]">
                <DeliveryIcon />

                <div className="flex min-w-[339px] flex-col gap-[8px] text-center">
                  <p className="text-[16px] font-[700] leading-[22px] text-[#363636]">
                    Доставка по городу - 300 руб.
                  </p>
                  <p className="text-[16px] font-[700] leading-[22px] text-[#363636]">
                    При заказе от 2000 руб. -{" "}
                    <span className="uppercase text-[#D13A3A]">БЕСПЛАТНО</span>
                  </p>
                </div>
              </article>

              <div className="relative before:absolute before:h-full before:w-[1px] before:bg-[#D7D7D7]"></div>

              <article className="flex flex-col gap-[38px]">
                <TimeIcon />

                <div className="min-w-[301px] text-center">
                  <p className="text-[16px] font-[700] leading-[24px] text-[#363636]">
                    Доставялем
                  </p>
                  <p className="text-[16px] font-[700] leading-[24px] text-[#363636]">
                    ежедневно с 10:00 до 22:00
                  </p>
                </div>
              </article>

              <div className="relative before:absolute before:h-full before:w-[1px] before:bg-[#D7D7D7]"></div>

              <article className="flex flex-col gap-[38px]">
                <PaymentIcon />

                <div className="min-w-[301px] text-center">
                  <p className="text-[16px] font-[700] leading-[24px] text-[#363636]">
                    Оплата
                  </p>
                  <p className="text-[16px] font-[700] leading-[24px] text-[#363636]">
                    картой(на сайте),СПБ.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </section>
      {/* /Доставка и оплата */}

      <section className="py-[208px]">
        <Container>
          <div className="flex flex-col gap-[25px]">
            <h2 className="text-[18px] font-bold leading-[25px] text-[#363636]">
              О нас
            </h2>

            <div className="flex justify-between gap-2">
              <div className="flex flex-col justify-between gap-4">
                <div className="flex max-w-[623px] flex-col gap-[30px]">
                  <p className="text-[18px] font-semibold leading-[25px] text-[#363636]">
                    Шашлык в Краснодаре – просто, быстро и вкусно Когда идет
                    речь о вкусной еде, то многие люди думают о шашлыке.
                  </p>

                  <p className="text-[18px] font-semibold leading-[25px] text-[#363636]">
                    Именно этот простой и самодостаточный вид питания считается
                    одним из самых популярных блюд на закуску. В Краснодаре есть
                    много заведений ресторанного типа и уличных киосков, где
                    можно отведать свежего и аппетитного мяса на мангале.
                  </p>

                  <p className="text-[18px] font-semibold leading-[25px] text-[#363636]">
                    Но если вы не хотите выходить из дома и желаете заказать
                    шашлык быстро и с удобством, то стоит обратиться в компанию
                    Царь Мангал
                  </p>
                </div>

                <Button className="h-[56px] max-w-[224px]" variant={"revert"}>
                  Перейти к меню
                </Button>
              </div>

              {/* Banner */}
              <div className="h-[457px] w-[489px] rounded-[12px] bg-[#EDEDED]"></div>
              {/* /Banner */}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
