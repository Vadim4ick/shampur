import { Basket } from "@/components/Basket/Basket";
import { PersonalData } from "@/components/Basket/PersonalData";
import { TotalAmountForm } from "@/components/Basket/TotalAmountForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Container } from "@/shared/ui/container";

const OrdersPage = () => {
  return (
    <main className="flex-grow bg-[#f5f5f5] pb-[208px] max-tablet:pb-[108px] max-mobile:pb-[57px]">
      <section className="mt-[58px] max-mobile:mt-[25px]">
        <Container className="px-[4px]">
          <div className="flex flex-col gap-[58px] max-mobile:gap-[26px]">
            <h2 className="text-[36px] font-[700] leading-[49px] text-[#363636] max-tablet:pl-[12px] max-mobile:text-[32px] max-mobile:leading-[43px]">
              Оформление заказа
            </h2>

            <div className="grid grid-cols-[1fr_360px] gap-[28px] max-desktop1250:gap-[10px] max-tablet:grid-cols-1 max-tablet:gap-4">
              <div className="flex flex-col gap-[65px] max-mobile:gap-[32px]">
                <div className="flex flex-col gap-[16px]">
                  <Basket />

                  <PersonalData />
                </div>

                <Tabs
                  defaultValue="delivery"
                  className="flex flex-col gap-[28px] max-mobile:gap-4"
                >
                  <TabsList className="flex h-[55px] w-[294px] items-center justify-between rounded-[100px] border border-[#E8E8E8] bg-white p-[4px] max-xl:mx-auto">
                    <TabsTrigger
                      className="h-[47px] w-full max-w-[143px]"
                      value="delivery"
                    >
                      Доставка
                    </TabsTrigger>

                    <TabsTrigger
                      className="h-[47px] w-full max-w-[143px]"
                      value="pickup"
                    >
                      Самовывоз
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="delivery" className="m-0">
                    <div className="flex w-full max-w-[816px] flex-col gap-[20px] rounded-[12px] bg-white p-[22px] max-xl:mx-auto max-tablet:px-3 max-tablet:pb-[41px] max-tablet:pt-4">
                      <h2 className="text-[24px] font-[700] leading-[33px] text-[#363636]">
                        Адрес доставки:
                      </h2>

                      <div className="flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-[4px]">
                          <Label htmlFor="adress">
                            Напишите полный адрес доставки (Город, улица, дом,
                            корпус/строение, кв.)
                          </Label>

                          <Input id="adress" />
                        </div>

                        <div className="flex flex-col gap-[4px]">
                          <Label htmlFor="comment">Комментарий</Label>

                          <Textarea id="comment" />
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent className="m-0" value="pickup">
                    <div className="flex w-full rounded-[12px] bg-white px-[25px] py-[32px] max-tablet:flex-col max-tablet:items-center max-tablet:gap-[26px] max-tablet:px-3 max-tablet:py-[26px]">
                      <h3 className="w-full max-w-[320px] text-[20px] font-[700] leading-[27px] text-[#363636] max-tablet:text-center">
                        Самовывоз заказов производится по адресу
                      </h3>

                      <div className="flex w-full flex-col items-center gap-[14px] max-tablet:gap-[22px]">
                        <div className="w-fit rounded-[12px] bg-[#F3F3F3] px-[28px] py-[23px]">
                          <p className="text-center text-[16px] font-[700] leading-[22px] text-[#363636]">
                            Краснодар, ул. 40 лет победы, д.12, ”Царь Шампур”
                          </p>
                        </div>

                        <p className="text-[12px] font-[500] leading-[16px] text-[#999999]">
                          Оплата наличным, спб, перевод, картой(терминал)
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <TotalAmountForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default OrdersPage;
