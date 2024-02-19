import Image from "next/image";
import React from "react";

const Bunker = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-10">
      <div className="w-full min-[1728px]:min-h-[990px] min-lg:min-h-[700px] max-md:min-h-[640px] min-h-[790px] relative">
        <Image
          src="/bunker/bunker.jpeg"
          fill
          alt="фото скейт-парка Bunker"
          className="object-cover"
        />
        <div className="flex absolute top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] items-center justify-center w-[550px] max-xl:w-[400px] max-md:w-[300px] h-[220px] max-xl:h-[180px] max-md:h-[104px] bg-[#191E28] rounded-[18px] -rotate-3">
          <div className="text-center  flex flex-col justify-center items-center text-white gap-1">
            <span className="font-['Unbounded'] font-semibold text-[93px] max-xl:text-[60px]">
              Bunker
            </span>
            <span className="font-['Unbounded'] font-normal text-[24px]">cкейт-парк</span>
          </div>
        </div>
      </div>
      <div className="max-w-[1230px] flex flex-col items-center justify-center gap-y-12 px-2">
        <div className="w-full flex max-[700px]:flex-col max-[700px]:gap-y-6 items-center justify-between gap-x-5 min-[700px]:max-h-[220px]">
          <div className="font-['Unbounded'] w-[50%] max-[700px]:w-[100%] font-normal text-[50px]  max-[1120px]:text-[32px] max-w-[590px] leading-[55px] text-[#191E28]">
            Schoolskate — больше, чем школа скейтбординга
          </div>
          <div className="font-['Roboto']  w-[50%] max-[700px]:w-[100%]   font-normal text-[30px] max-[1120px]:text-[24px] leading-[36px] max-w-[590px] text-[#324164]">
            Специально для наших учеников мы спроектировали и создали собственный скейт-парк, в
            котором их тренировки будут приностить максимум результата и удовольствия
          </div>
        </div>
        <div className="flex w-full gap-x-5 justify-between h-[590px] max-[800px]:h-[345px] max-[700px]:min-h-[700px]  flex-row max-[700px]:flex-col max-xl:h-[450px] max-2xl:h-[500px] items-center">
          <div className="w-[50%] max-w-[590px] h-full max-[700px]:h-[345px] max-[700px]:w-[345px] relative">
            <Image
              src="/bunker/view1.jpg"
              alt="фото скейт парка Bunker"
              fill
              className="rounded-[10px] aspect-square h-full "
            />
          </div>
          <div className="w-[50%] max-w-[590px] h-full max-[700px]:h-[345px] max-[700px]:w-[345px] relative">
            <Image
              src="/bunker/view2.jpg"
              alt="фото скейт парка Bunker"
              fill
              className="rounded-[10px] aspect-square h-full "
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-start min-[700px]:max-h-[158px] flex-col min-[700px]:flex-row">
          <div className="w-[50%] max-[700px]:w-[100%] max-w-[590px] font-['Unbounded'] font-normal text-[50px] max-[1120px]:text-[32px] text-[#191E28] leading-[55px]">
            Трансляция из Бункера
          </div>
          <div className="w-[50%] max-[700px]:w-[100%] max-w-[590px] flex flex-col items-start justify-between gap-y-[30px]">
            <div className="font-['Roboto'] font-normal text-[30px] max-[1120px]:text-[24px] text-[#324164] leading-[36px]">
              Вы можете оценить загрузу в скейт-парке, посмотрев прямой эфир с камер
            </div>
            <button className="max-w-[450px] max-[600px]:w-[345px] h-[56px] min-w-[140px] font-normal font-['Unbounded'] flex justify-center items-center bg-[#546EFF] text-5 text-white rounded-[40px] px-[83px] max-[600px]:px-[30px]  py-[17px]">
              <span>Смотреть трансляцию</span>
            </button>
          </div>
        </div>
        <div className="w-full flex justify-between items-center  flex-col min-[700px]:flex-row">
          <div className="w-[65%] h-[538px] relative">
            <iframe
              style={{ borderRadius: "18px", position: "relative", zIndex: "99999" }}
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a6085ea7a16ff1b81096e196aadeddc744e92b3a886eb5cfb1285a009f0ac82&amp;source=constructor"
              width="100%"
              height="100%"
              frameborder="0"></iframe>

            <div className="absolute w-full h-full top-3 right-3 rounded-[18px] bg-[#191E28] "></div>
          </div>
          <div className="flex w-[35%] flex-col items-end justify-start ">
            <div className="flex  justify-start flex-col">
              <div className="flex flex-col items-start gap-y-3 pb-10">
                <span className="text-[50px] font-['Unbounded'] font-semibold text-[#191E28]">
                  Bunker
                </span>
                <span className="text-[27px] font-['Roboto'] font-normal text-[#191E28]">
                  Ленинградское шоссе 23
                </span>
              </div>
              <div className="flex flex-col items-start gap-y-3">
                <div className="flex items-center justify-center gap-y-2">
                  <span className="text-[50px] font-['Unbounded'] font-semibold text-[#191E28]">
                    <svg
                      width="31"
                      height="22"
                      viewBox="0 0 31 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.5757 12.0016L9.31858 0.477417L2.61127 18.1213H0.314453V21.9385H9.85272V18.1213H8.93514L10.6158 13.356L15.5757 21.9767L20.5356 13.356L22.2162 18.1213H21.2986V21.9385H30.8369V18.1213H28.5382L21.8309 0.477417L15.5757 12.0016Z"
                        fill="#546EFF"
                      />
                    </svg>
                  </span>
                  <span className="text-[27px] font-['Roboto'] font-normal text-[#191E28]">
                    Динамо
                  </span>
                </div>
                <div className="flex items-center justify-center gap-y-2">
                  <span className="text-[50px] font-['Unbounded'] font-semibold text-[#191E28]">
                    <svg
                      width="31"
                      height="22"
                      viewBox="0 0 31 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.5757 12.0016L9.31858 0.477417L2.61127 18.1213H0.314453V21.9385H9.85272V18.1213H8.93514L10.6158 13.356L15.5757 21.9767L20.5356 13.356L22.2162 18.1213H21.2986V21.9385H30.8369V18.1213H28.5382L21.8309 0.477417L15.5757 12.0016Z"
                        fill="#546EFF"
                      />
                    </svg>
                  </span>
                  <span className="text-[27px] font-['Roboto'] font-normal text-[#191E28]">
                    Петровский парк
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bunker;
