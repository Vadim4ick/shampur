import { Location } from "@/shared/icons/Location";
import { Phone } from "@/shared/icons/Phone";
import { Tg } from "@/shared/icons/social/Tg";
import { Vk } from "@/shared/icons/social/Vk";
import { Whatsapp } from "@/shared/icons/social/Whatsapp";
import { Time } from "@/shared/icons/Time";
import { Container } from "@/shared/ui/container";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#363636] pb-[17px] pt-[39px]">
      <Container>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col justify-between gap-4 pb-[26px]">
            {/* Logo */}
            <div className="h-[68px] w-[307px] bg-[#414141]"></div>
            {/* /Logo */}

            <div className="flex w-fit flex-col items-center gap-[10px]">
              <p className="text-[14px] font-[600] leading-[19px] text-white">
                Мы в соц сетях:
              </p>

              <div className="flex gap-[24px] rounded-[8px] bg-[#3B3B3B] px-[12px] py-[8px]">
                <Link href="#">
                  <Vk />
                </Link>

                <Link href="#">
                  <Tg />
                </Link>

                <Link href="#">
                  <Whatsapp />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-[57px]">
            {/* <ul className="flex flex-col">
              <li className="flex items-center gap-[15px]">
                <div className="flex items-center justify-center rounded-t-[8px] bg-[#3B3B3B] px-[6px] pb-[12px] pt-[8px]">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.21076 3.8594C7.52918 2.54857 9.70018 2.78149 10.8041 4.25699L12.1713 6.08132C13.0704 7.28165 12.9903 8.95865 11.9232 10.0192L11.6653 10.2771C11.6361 10.3853 11.6331 10.499 11.6567 10.6086C11.7249 11.0506 12.0943 11.9866 13.6413 13.5249C15.1883 15.0632 16.1308 15.4316 16.5793 15.5009C16.6924 15.5236 16.8091 15.5203 16.9206 15.4912L17.3626 15.0513C18.3116 14.1088 19.7676 13.9322 20.9419 14.5703L23.0111 15.697C24.7845 16.659 25.2319 19.0683 23.7803 20.5124L22.2408 22.0421C21.7555 22.5242 21.1033 22.9261 20.3082 23.0008C18.3473 23.1839 13.7789 22.9499 8.97651 18.1757C4.49476 13.7188 3.63459 9.83182 3.52518 7.91649C3.47101 6.94799 3.92818 6.12899 4.51101 5.55049L6.21076 3.8594ZM9.50409 5.2309C8.95484 4.49749 7.93218 4.43899 7.35584 5.01207L5.65501 6.70207C5.29751 7.0574 5.12634 7.44957 5.14801 7.8244C5.23468 9.34649 5.92801 12.8532 10.1227 17.0241C14.5232 21.3986 18.5868 21.5297 20.1576 21.3823C20.4783 21.3531 20.7968 21.1862 21.0947 20.8905L22.633 19.3597C23.2592 18.7379 23.1216 17.6047 22.2354 17.1237L20.1663 15.9982C19.5943 15.6883 18.9248 15.7902 18.5088 16.204L18.0158 16.6947L17.4417 16.1184C18.0158 16.6947 18.0148 16.6958 18.0137 16.6958L18.0126 16.698L18.0093 16.7012L18.0018 16.7077L17.9855 16.7229C17.9398 16.7654 17.8905 16.8038 17.8382 16.8377C17.7515 16.8952 17.6367 16.9591 17.4926 17.0122C17.2001 17.1216 16.8123 17.1801 16.3334 17.1064C15.3942 16.9623 14.1494 16.3221 12.4952 14.6776C10.842 13.0331 10.1963 11.7959 10.0512 10.8577C9.97643 10.3789 10.036 9.99107 10.1465 9.69857C10.2073 9.53398 10.2944 9.38032 10.4043 9.24357L10.439 9.20565L10.4542 9.1894L10.4607 9.1829L10.4639 9.17965L10.4661 9.17749L10.7781 8.86765C11.2418 8.40507 11.3068 7.63915 10.8702 7.05524L9.50409 5.2309Z"
                      fill="#D13A3A"
                    />
                  </svg>
                </div>
                <p className="text-[18px] font-[700] leading-[25px] text-white">
                  + 7 (918) 342-00-75
                </p>
              </li>
              <li className="flex items-center gap-[15px]">
                <div className="flex items-center justify-center bg-[#3B3B3B] px-[6px] pb-[12px] pt-[12px]">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 2.4375C8.96289 2.4375 5.6875 5.55496 5.6875 9.39453C5.6875 13.8125 10.5625 20.8137 12.3525 23.2319C12.4268 23.334 12.5242 23.4171 12.6368 23.4743C12.7493 23.5316 12.8737 23.5615 13 23.5615C13.1263 23.5615 13.2507 23.5316 13.3632 23.4743C13.4758 23.4171 13.5732 23.334 13.6475 23.2319C15.4375 20.8147 20.3125 13.8161 20.3125 9.39453C20.3125 5.55496 17.0371 2.4375 13 2.4375Z"
                      stroke="#D13A3A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13 12.1875C14.3462 12.1875 15.4375 11.0962 15.4375 9.75C15.4375 8.40381 14.3462 7.3125 13 7.3125C11.6538 7.3125 10.5625 8.40381 10.5625 9.75C10.5625 11.0962 11.6538 12.1875 13 12.1875Z"
                      stroke="#D13A3A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-[18px] font-[700] leading-[25px] text-white">
                  Краснодар, Ул. 40 лет победы, 12
                </p>
              </li>
              <li className="flex items-center gap-[15px]">
                <div className="flex items-center justify-center rounded-b-[8px] bg-[#3B3B3B] px-[6px] pb-[8px] pt-[12px]">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 21.1818C14.0745 21.1818 15.1384 20.9702 16.131 20.559C17.1237 20.1478 18.0257 19.5452 18.7854 18.7854C19.5452 18.0257 20.1478 17.1237 20.559 16.131C20.9702 15.1384 21.1818 14.0745 21.1818 13C21.1818 11.9255 20.9702 10.8616 20.559 9.86895C20.1478 8.87629 19.5452 7.97433 18.7854 7.21458C18.0257 6.45483 17.1237 5.85216 16.131 5.44099C15.1384 5.02981 14.0745 4.81818 13 4.81818C10.83 4.81818 8.74897 5.68019 7.21458 7.21458C5.68019 8.74897 4.81818 10.83 4.81818 13C4.81818 15.17 5.68019 17.251 7.21458 18.7854C8.74897 20.3198 10.83 21.1818 13 21.1818ZM23 13C23 18.5227 18.5227 23 13 23C7.47727 23 3 18.5227 3 13C3 7.47727 7.47727 3 13 3C18.5227 3 23 7.47727 23 13ZM15.7273 17.0127L12.0909 13.3764V7.09091H13.9091V12.6236L17.0127 15.7273L15.7273 17.0127Z"
                      fill="#D13A3A"
                    />
                  </svg>
                </div>
                <p className="text-[18px] font-[700] leading-[25px] text-white">
                  Ежедневно с 10:00 до 22:00
                </p>
              </li>
            </ul> */}

            <div className="flex gap-[9px]">
              <div className="flex w-fit flex-col items-center justify-center gap-6 rounded-[8px] bg-[#3B3B3B] px-1.5 py-2">
                <div className="flex size-[26px] items-center justify-center">
                  <Phone className="size-[26px]" />
                </div>

                <div className="flex size-[26px] items-center justify-center">
                  <Location className="size-[25px]" />
                </div>

                <div className="flex size-[26px] items-center justify-center">
                  <Time className="size-[20px]" />
                </div>
              </div>

              <div className="flex flex-col gap-6 py-[10px]">
                <p className="text-[18px] font-[700] leading-[25px] text-white">
                  + 7 (918) 342-00-75
                </p>
                <p className="text-[18px] font-[700] leading-[25px] text-white">
                  Краснодар, Ул. 40 лет победы, 12
                </p>
                <p className="text-[18px] font-[700] leading-[25px] text-white">
                  Ежедневно с 10:00 до 22:00
                </p>
              </div>
            </div>

            <div className="flex gap-[55px]">
              <Link
                className="text-[12px] font-[500] leading-[16px] text-[#B6B6B6]"
                href="#"
              >
                Публичная оферта
              </Link>

              <Link
                className="text-[12px] font-[500] leading-[16px] text-[#B6B6B6]"
                href="#"
              >
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
