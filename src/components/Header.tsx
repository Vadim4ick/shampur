"use client";

import { navbar } from "@/shared/const/navbar";
import { Grill } from "@/shared/icons/Grill";
import { Location } from "@/shared/icons/Location";
import { Phone } from "@/shared/icons/Phone";
import { Time } from "@/shared/icons/Time";
import { cn } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/container";
import { useHeaderStore } from "@/store/header";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const Header = ({ bottomLinks = true }: { bottomLinks?: boolean }) => {
  const [activeId, setActiveId] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { fixed, setFixed } = useHeaderStore();

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (ref.current && scrollTop > ref.current.offsetHeight) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, [setFixed]);

  const handleResize = useCallback(() => {
    if (observerRef.current) {
      const sections = document.querySelectorAll("[data-catalog]");
      sections.forEach((section) => {
        if (observerRef.current) {
          observerRef.current.observe(section);
        }
      });
    }
  }, []);

  const onClickNavbar = useCallback((id: number) => {
    const section = document.querySelector(`[data-catalog="${id}"]`);
    if (!section) return;

    const offsetTop = section.getBoundingClientRect().top + window.scrollY;
    const scrollToPosition = offsetTop - 140; // Adjust offset

    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (bottomLinks) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(Number(entry.target.getAttribute("data-catalog")));
            }
          });
        },
        { threshold: 0.8 },
      );

      const sections = document.querySelectorAll("[data-catalog]");
      sections.forEach((section) => observerRef.current!.observe(section));

      return () => {
        sections.forEach((section) => observerRef.current!.unobserve(section));
      };
    }
  }, [bottomLinks]);

  useEffect(() => {
    if (bottomLinks) {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [bottomLinks, handleResize, handleScroll]);

  useEffect(() => {
    if (bottomLinks) {
      // Установите активный id при монтировании компонента
      const sections = document.querySelectorAll("[data-catalog]");
      const last = sections[sections.length - 1];

      if (!last) return;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const sectionTop = last.getBoundingClientRect().top + scrollTop;
      const sectionBottom = sectionTop + last.clientHeight;

      // // Проверяем, находимся ли мы в пределах последней секции
      if (scrollTop >= sectionTop && scrollTop > sectionBottom) {
        setActiveId(Number(last.getAttribute("data-catalog")));
      }
    }
  }, [bottomLinks]);

  return (
    <>
      {bottomLinks && (
        <div
          ref={ref}
          className="flex h-[40px] items-center bg-[#363636] max-lg:hidden"
        >
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
      )}

      <header
        className={cn("z-50 w-full bg-white", {
          "fixed top-0": fixed,
        })}
      >
        <div className="flex items-center border-b border-b-black border-opacity-15 py-[13px]">
          <Container>
            <div className="flex justify-between">
              {/* LOGO */}
              <div className="h-[46px] w-full max-w-[205px] bg-[#EAEAEA] max-mobile:max-w-[181px]"></div>
              {/* /LOGO */}

              <button className="flex h-[44px] items-center rounded-[10px] bg-[#D13A3A] pl-[14px] transition-colors max-mobile:pl-[9px] [@media(any-hover:hover){&:hover}]:bg-[#BF3A3A]">
                <div className="flex items-center gap-[8px] pr-[21px] max-mobile:pr-[7px]">
                  <Grill />

                  <span className="text-[14px] font-[700] leading-[19px] text-white max-mobile:hidden">
                    Корзина
                  </span>
                </div>

                {/* Counter */}
                <div className="relative h-[24px] pr-[10px] max-mobile:pr-[12px]">
                  <div className="before:absolute before:block before:h-[24px] before:w-[1px] before:bg-[#FF8383]"></div>
                </div>

                <div className="mr-[10px] flex size-[22px] items-center justify-center rounded-[100px] bg-[#FF4747] max-mobile:mr-[12px]">
                  <span className="max-w-[6px] text-[12px] font-[700] leading-[12px] text-white">
                    1
                  </span>
                </div>
                {/* /Counter */}
              </button>
            </div>
          </Container>
        </div>

        {bottomLinks && (
          <div className="flex items-center border-b border-b-black border-opacity-15">
            <Container>
              <div className="flex w-full justify-between">
                <div className="custom-scrollbar flex gap-[30px] overflow-y-hidden overflow-x-scroll py-[9px]">
                  {navbar.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => onClickNavbar(item.id)}
                      className={cn(
                        "cursor-pointer whitespace-nowrap text-[16px] font-[700] leading-[22px] text-[#363636]",
                        {
                          "relative before:absolute before:bottom-[-9px] before:left-[50%] before:h-[2px] before:w-[26px] before:translate-x-[-50%] before:rounded-t-[4px] before:bg-[#D13A3A]":
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
                  className="cursor-pointer py-[9px] text-[16px] font-[700] leading-[22px] text-[#363636] max-mobile:hidden"
                >
                  Доставка и оплата
                </Link>
              </div>
            </Container>
          </div>
        )}
      </header>
    </>
  );
};

export { Header };
