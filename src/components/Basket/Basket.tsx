import { BasketItem } from "./BasketItem";

const Basket = () => {
  return (
    <div className="flex flex-col gap-[30px] rounded-[12px] bg-white pb-[22px] pl-[22px] pr-[11px] pt-[18px] max-mobile:gap-6 max-mobile:px-3 max-mobile:py-4">
      <h2 className="text-[24px] font-[700] leading-[33px] text-[#363636]">
        Корзина:
      </h2>

      <div className="flex flex-col gap-[20px]">
        <BasketItem />
      </div>
    </div>
  );
};

export { Basket };
