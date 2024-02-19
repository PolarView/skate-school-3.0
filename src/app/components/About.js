import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full flex justify-center px-2 min-[1050px]:max-h-[831px] max-md:min-h-[800px]   md:max-h-[831] pt-[100px] pb-[50px] ">
      <div className="min-[1380px]:w-[80%] h-full w-[100%] max-w-[1200px] flex flex-col items-center">
        <div className="text-[50px] font-['Unbounded']  leading-[60px] pb-[42px] self-start">
          О школе
        </div>
        <div className="max-w-[1200px]  max-[1050px]:max-h-[400px] md:h-[580px] h-[700px] max-md:max-h-[720px] max-[390px]:h-[720px] xl:gap-x-16 max-md:gap-y-7  flex md:flex-row flex-col justify-between items-center ">
          <div className="w-[50%] max-md:w-[80%]  max-[390px]:w-[90%] h-[100%] relative ">
            <Image
              src="/about/about.jpeg"
              alt="Фото тренировки на скейте в школе"
              fill
              className="rounded-[10px] w-full  aspect-square "
            />
          </div>
          <div className="w-[47%] max-md:w-[90%] h-[408px]">
            <div className="flex flex-col w-full items-center gap-[42px] ">
              <div className="w-full max-[390px]:h-[178px] h-[139px] md:h-[159px] flex items-center justify-center text-center rounded-[10px] text-white bg-[#546EFF] rotate-3 font-['Unbounded'] md:text-[30px] text-[25px] font-normal">
                Schoolskate — школа, где каждый сможет открыть для себя много нового
              </div>
              <div className="w-full h-full min-[900px]:text-[30px] text-[20px] md:text-[28px] text-[#324164] leading-[36px] font-['Roboto']">
                Уже больше 13 лет мы помогаем новичкам и уже катающимся преодолеть все страхи,
                выучить новые трюки и искренне полюбить скейтбординг.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;