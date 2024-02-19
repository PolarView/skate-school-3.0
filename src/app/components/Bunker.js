import Image from "next/image";
import React from "react";

const Bunker = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-10">
      <div className="w-full min-[1728px]:min-h-[990px] min-lg:min-h-[700px] max-md:min-h-[640px] min-h-[790px] relative">
        <Image src="/bunker/bunker.jpeg" fill alt="фото скейт-парка Bunker" />
        <div className="flex absolute top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] items-center justify-center w-[550px] max-xl:w-[400px] max-md:w-[300px] h-[220px] max-xl:h-[180px] bg-[#191E28] rounded-[18px] -rotate-3">
          <div className="text-center  flex flex-col justify-center items-center text-white gap-1">
            <span className="font-['Unbounded'] font-semibold text-[93px] max-xl:text-[60px]">
              Bunker
            </span>
            <span className="font-['Unbounded'] font-normal text-[24px]">cкейт-парк</span>
          </div>
        </div>
      </div>
      <div className="max-w-[1230px] flex flex-col items-center justify-center gap-y-12 px-1">
        <div className="w-full flex max-[700px]:flex-col max-[700px]:gap-y-6 items-center justify-between min-[700px]:max-h-[220px]">
          <div className="font-['Unbounded'] w-[50%] max-[700px]:w-[100%] font-normal text-[50px]  max-[1120px]:text-[32px] max-w-[590px] leading-[55px] text-[#191E28]">
            Schoolskate — больше, чем школа скейтбординга
          </div>
          <div className="font-['Roboto']  w-[50%] max-[700px]:w-[100%]   font-normal text-[30px] max-[1120px]:text-[24px] leading-[36px] max-w-[590px] text-[#324164]">
            Специально для наших учеников мы спроектировали и создали собственный скейт-парк, в
            котором их тренировки будут приностить максимум результата и удовольствия
          </div>
        </div>
        <div className="flex w-full  justify-between h-[590px] max-[800px]:h-[345px] max-[700px]:min-h-[700px]  flex-row max-[700px]:flex-col max-xl:h-[450px] max-2xl:h-[500px] items-center">
          <div className="w-[49%] max-w-[590px] h-full max-[700px]:h-[345px] max-[700px]:w-[345px] relative">
            <Image
              src="/bunker/view1.jpg"
              alt="фото скейт парка Bunker"
              fill
              className="rounded-[10px] aspect-square h-full "
            />
          </div>
          <div className="w-[49%] max-w-[590px] h-full max-[700px]:h-[345px] max-[700px]:w-[345px] relative">
            <Image
              src="/bunker/view2.jpg"
              alt="фото скейт парка Bunker"
              fill
              className="rounded-[10px] aspect-square h-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bunker;
