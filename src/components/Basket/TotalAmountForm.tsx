import { Button } from "@/shared/ui/button";
import { Input } from "../ui/input";

const TotalAmountForm = () => {
  return (
    <div className="flex h-fit flex-col gap-4 rounded-[12px] bg-white px-[16px] py-[22px]">
      <div className="flex items-center justify-between border-b border-[#EBEBEB] pb-[24px]">
        <span className="text-[18px] font-[700] leading-[25px] text-[#363636]">
          Итого к оплате:
        </span>
        <span className="text-[18px] font-[700] leading-[25px] text-[#D13A3A]">
          1 340 руб.
        </span>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[14px] font-[700] leading-[19px] text-[#363636]">
              Корзина:
            </span>
            <span className="text-[12px] font-[500] leading-[16px] text-[#696969]">
              1 140 руб.
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[14px] font-[700] leading-[19px] text-[#363636]">
              Доставка:
            </span>
            <span className="text-[12px] font-[500] leading-[16px] text-[#696969]">
              200 руб.
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Input
            type="text"
            placeholder="Промокод (необязательно)*"
            className="text-center text-[14px] font-medium placeholder:text-[#9B9B9B]"
          />

          <Button className="h-[56px]">Перейти к оплате</Button>

          <span className="text-center text-[12px] font-[500] leading-[16px] text-[#999999]">
            *Промокод автоматически применится <br /> на следующем этапе оплаты
          </span>
        </div>
      </div>
    </div>
  );
};

export { TotalAmountForm };
