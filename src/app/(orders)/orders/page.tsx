import { Basket } from "@/components/Basket/Basket";
import { PersonalData } from "@/components/Basket/PersonalData";
import { TotalAmountForm } from "@/components/Basket/TotalAmountForm";
import { Container } from "@/shared/ui/container";

const OrdersPage = () => {
  return (
    <main className="flex-grow bg-[#f5f5f5]">
      <section className="mt-[58px] max-mobile:mt-[25px]">
        <Container className="px-[4px]">
          <div className="flex flex-col gap-[58px] max-mobile:gap-[26px]">
            <h2 className="text-[36px] font-[700] leading-[49px] text-[#363636] max-tablet:pl-[12px] max-mobile:text-[32px] max-mobile:leading-[43px]">
              Оформление заказа
            </h2>

            <div className="grid grid-cols-[1fr_360px] gap-[28px] max-desktop1250:gap-[10px] max-tablet:grid-cols-1 max-tablet:gap-4">
              <div className="flex flex-col gap-[65px]">
                <div className="flex flex-col gap-[16px]">
                  <Basket />

                  <PersonalData />
                </div>
                {/* <div className="flex flex-col gap-[28px]">
                  <div className="flex h-[55px] w-[294px] items-center justify-between rounded-[100px] border border-[#E8E8E8] bg-white p-[4px] max-xl:mx-auto">
                    <span className="cursor-pointer rounded-[100px] bg-[#D13A3A] px-[33px] py-[12px] text-[16px] font-[700] leading-[22px] text-white">
                      Доставка
                    </span>
                    <span className="cursor-pointer rounded-[100px] px-[33px] py-[12px] text-[16px] font-[700] leading-[22px] text-[#363636]">
                      Самовывоз
                    </span>
                  </div>
                  <div className="flex w-full max-w-[816px] flex-col gap-[20px] rounded-[12px] bg-white p-[22px] max-xl:mx-auto">
                    <h2 className="text-[24px] font-[700] leading-[33px] text-[#363636]">
                      Адрес доставки:
                    </h2>
                    <form className="flex flex-col gap-[20px]">
                      <div className="flex flex-col gap-[4px]">
                        <span className="text-[14px] font-[500] leading-[19px] text-[#696969]">
                          Напишите полный адрес доставки (Город, улица, дом,
                          корпус/строение, кв.)
                        </span>
                        <input
                          className="h-[52px] w-[723px] rounded-[8px] border border-[#EDEDED] bg-[#F3F3F3] pl-[10px] max-md:w-full max-md:px-[12px]"
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px]">
                        <span className="text-[14px] font-[500] leading-[19px] text-[#696969]">
                          Комментарий
                        </span>
                        <input
                          className="h-[104px] w-[723px] rounded-[8px] border border-[#EDEDED] bg-[#F3F3F3] pl-[10px] max-md:w-full max-md:px-[12px]"
                          type="text"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex flex-col gap-[28px]">
                  <div className="flex h-[55px] w-[294px] items-center justify-between rounded-[100px] border border-[#E8E8E8] bg-white p-[4px] max-xl:mx-auto">
                    <span className="cursor-pointer rounded-[100px] px-[33px] py-[12px] text-[16px] font-[700] leading-[22px] text-[#363636]">
                      Доставка
                    </span>
                    <span className="cursor-pointer rounded-[100px] bg-[#D13A3A] px-[26px] py-[12px] text-[16px] font-[700] leading-[22px] text-white">
                      Самовывоз
                    </span>
                  </div>
                  <div className="flex w-full max-w-[816px] flex-col gap-[26px] rounded-[12px] bg-white p-[22px] max-xl:mx-auto max-md:text-center">
                    <h2 className="text-[24px] font-[700] leading-[33px] text-[#363636]">
                      Самовывоз заказов производится по адресу
                    </h2>
                    <div className="flex flex-col gap-[22px]">
                      <div className="w-fit rounded-[12px] bg-[#F3F3F3] px-[55px] py-[22px]">
                        <p className="text-[16px] font-[700] leading-[22px] text-[#363636]">
                          Краснодар, ул. 40 лет победы, д.12, ”Царь Шампур”
                        </p>
                      </div>
                      <div>
                        <p className="text-[12px] font-[500] leading-[16px] text-[#999999]">
                          Оплата наличным, спб, перевод, картой(терминал)
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
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
