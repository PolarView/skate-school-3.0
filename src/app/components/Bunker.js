import Image from "next/image";
import React from "react";

const Bunker = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-10">
      <div className="w-full min-[1728px]:min-h-[990px] min-h-[790px] relative">
        <Image src="/bunker/bunker.jpeg" fill alt="фото скейт-парка Bunker" />
        <div className="flex absolute top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] items-center justify-center w-[550px] h-[220px] bg-[#191E28] rounded-[18px] -rotate-3">
          <div className="text-center flex flex-col justify-center items-center text-white gap-1">
            <span className="font-['Unbounded'] font-semibold text-[93px]">Bunker</span>
            <span className="font-['Unbounded'] font-normal text-[24px]">cкейт-парк</span>
          </div>
        </div>
      </div>
      <div className="max-w-[1230px] flex flex-col items-center justify-center gap-y-12">
        <div className="w-full flex items-center justify-between max-h-[220px]">
          <div className="font-['Unbounded']  font-normal text-[50px] max-w-[590px] leading-[55px] text-[#191E28]">
            Schoolskate — больше, чем школа скейтбординга
          </div>
          <div className="font-['Roboto']  font-normal text-[30px] leading-[36spx] max-w-[590px] text-[#324164]">
            Специально для наших учеников мы спроектировали и создали собственный скейт-парк, в
            котором их тренировки будут приностить максимум результата и удовольствия
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bunker;
