"use client";

import { navbar } from "@/shared/const/navbar";
import { Grill } from "@/shared/icons/Grill";
import { Location } from "@/shared/icons/Location";
import { Phone } from "@/shared/icons/Phone";
import { Time } from "@/shared/icons/Time";
import { cn } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/container";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [activeId, setActiveId] = useState(1);

  const onClick = (id: number) => {
    setActiveId(id);
  };

  return (
    <header>
      <div className="flex h-[40px] items-center bg-[#363636] max-lg:hidden">
        <Container>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Time />

              <p className="text-[14px] font-[700] leading-[19px] text-white">
                Работаем с 08:00 до 22:00
              </p>
            </div>
            <div className="flex gap-[43px]">
              <div className="flex items-center gap-[8px]">
                <Location />

                <p className="text-[14px] font-[700] leading-[19px] text-white">
                  Ул. 40 лет победы, 12
                </p>
              </div>
              <div>
                <a
                  href="#"
                  className="flex cursor-pointer items-center gap-[6px]"
                >
                  <Phone />

                  <p className="text-[14px] font-[700] leading-[19px] text-white">
                    + 7 (918) 342-00-75
                  </p>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="flex items-center py-[13px]">
        <Container>
          <div className="flex justify-between">
            {/* LOGO */}
            <div className="max-mobile:w-[181px] h-[46px] w-[205px] bg-[#EAEAEA]"></div>
            {/* /LOGO */}

            <button className="flex h-[44px] items-center rounded-[10px] bg-[#D13A3A] pl-[14px]">
              <div className="flex items-center gap-[8px] pr-[21px]">
                <Grill />

                <span className="max-mobile:hidden text-[14px] font-[700] leading-[19px] text-white">
                  Корзина
                </span>
              </div>

              {/* Counter */}
              <div className="relative h-[24px] pr-[10px]">
                <div className="before:absolute before:block before:h-[24px] before:w-[1px] before:bg-[#FF8383]"></div>
              </div>

              <div className="mr-[10px] flex size-[22px] items-center justify-center rounded-[100px] bg-[#FF4747]">
                <span className="max-w-[6px] text-[12px] font-[700] leading-[12px] text-white">
                  1
                </span>
              </div>
              {/* /Counter */}
            </button>
          </div>
        </Container>
      </div>

      <div className="flex items-center border-y border-y-black border-opacity-15 py-[9px]">
        <Container>
          <div className="flex w-full justify-between">
            <div className="flex gap-[30px] overflow-y-hidden overflow-x-scroll">
              {navbar.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onClick(item.id)}
                  className={cn(
                    "cursor-pointer whitespace-nowrap text-[16px] font-[700] leading-[22px] text-[#363636]",
                    {
                      "relative before:absolute before:left-[50%] before:top-[29px] before:h-[2px] before:w-[26px] before:translate-x-[-50%] before:rounded-t-[4px] before:bg-[#D13A3A]":
                        item.id === activeId,
                    },
                  )}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <Link
              href="#"
              className="max-mobile:hidden cursor-pointer text-[16px] font-[700] leading-[22px] text-[#363636]"
            >
              Доставка и оплата
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
};

export { Header };
