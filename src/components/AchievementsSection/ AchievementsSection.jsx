'use client'
import dynamic from "next/dynamic";
import { arch } from "process";
import AnimatedNumber from "react-animated-numbers";

export const AchievementsSection = () => {
  const AnimatedNumbers = dynamic(
    () => {
      return import("react-animated-numbers");
    },
    {
      ssr: false,
    }
  );

  const archivementsList = [
    {
      metric: "Projects",
      value: "100",
      postfix: "+",
    },
    {
      prefix: "՜",
      metric: "Users",
      value: "100,000",
    },
    {
      metric: "Awards",
      value: "7",
    },
    {
      metric: "Years",
      value: "5",
    },
  ];
  return (
    <>
      <div className="  py-8 px-4 xl:gap16 sm:py-16 xl:px-16 ">
        <div className="sm:border-[#33353f] sm:border rounded-md py-8  px-16 flex flex-col sm:flex-row items-center justify-between ">
          {archivementsList.map((list, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0 "
              >
                <h2 className="text-white text-4xl font-bold flex flex-row ">
                  {list.prefix}
                  <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(list.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                  {list.postfix}

                </h2>
                < p className="text-[#adb7be] text-base " >
                  {list.metric}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </>
  );
};
