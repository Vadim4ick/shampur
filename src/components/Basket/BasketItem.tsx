"use client";

import { useMediaQuery } from "@/shared/hooks/useMedia";
import { Close } from "@/shared/icons/Close";
import { Minuse } from "@/shared/icons/Minuse";
import { Pluse } from "@/shared/icons/Pluse";
import Image from "next/image";

const BasketItemPrices = () => {
  return (
    <div className="flex flex-col">
      <div className="whitespace-nowrap text-[18px] font-[700] leading-[25px] text-[#363636]">
        570 руб.
      </div>
      <div className="relative whitespace-nowrap text-[13px] font-[400] leading-[18px] text-[#A6A6A6] line-through">
        684 руб.
      </div>
    </div>
  );
};

const BasketItemCounter = () => {
  return (
    <div className="flex h-fit items-center gap-[16px]">
      <button className="flex size-[28px] items-center justify-center rounded-[10px] bg-[#E1E1E1] text-[25px] text-[#474747]">
        <Minuse />
      </button>

      <span className="inline-flex items-center justify-center text-[18px] font-[700] leading-[25px] text-[#474747]">
        1
      </span>

      <button className="flex size-[28px] items-center justify-center rounded-[10px] bg-[#E1E1E1] text-[25px] text-[#474747]">
        <Pluse />
      </button>
    </div>
  );
};

const BasketItem = () => {
  const isMobile = useMediaQuery(768);

  return (
    <article className="flex justify-between gap-[21px] max-mobile:flex-col max-mobile:gap-[13px]">
      <div
        className={
          "flex w-full gap-[20px] mobile:border-b mobile:border-[#EBEBEB] mobile:pb-[20px]"
        }
      >
        <div className="flex w-full gap-[21px] max-mobile:gap-[13px]">
          <div className="relative h-[79px] w-full max-w-[121px] rounded max-mobile:max-w-[112px]">
            <Image
              className="h-full w-full rounded-[6px] object-cover"
              src="/img/eat/1.png"
              fill
              alt=""
            />
          </div>

          <div className="flex w-full max-w-[310px] flex-col gap-[4px]">
            <span className="line-clamp-2 text-[14px] font-[700] leading-[19px] text-[#363636]">
              Шашлык из баранины “Семечки”
            </span>
            <p className="line-clamp-2 text-[12px] font-[500] leading-[16px] text-[#696969]">
              Бараньи ребра, лаваш, лук, аджика
            </p>
            <span className="text-[12px] font-[500] leading-[16px] text-[#696969]">
              200/50 г
            </span>
          </div>

          {!isMobile && <BasketItemPrices />}
        </div>

        {!isMobile && <BasketItemCounter />}
      </div>

      <div className="max-mobile:flex max-mobile:items-center max-mobile:justify-between max-mobile:gap-2 max-mobile:border-b max-mobile:border-[#EBEBEB] max-mobile:pb-[20px]">
        {isMobile && <BasketItemPrices />}

        <div className="flex gap-[9px]">
          <button className="h-fit rounded-[6px] bg-[#FFE5E5] px-[17px] py-[7px] max-mobile:px-[7px]">
            <Close />
          </button>

          {isMobile && <BasketItemCounter />}
        </div>
      </div>
    </article>
  );
};

export { BasketItem };
