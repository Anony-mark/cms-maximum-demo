"use client";

import React from "react";
import { SetFontColor, borderTypeColor } from "../dynamicCss/dynamicCssAboutUs";

import {
  setBgOurWelfare,
  setCardOurWelfare,
  setFontDetailOurWelfare,
} from "../dynamicCss/dynamicCssOurWelfare";


interface Props {
  content: any;
}

const SectionOurWelfare: React.FC<Props> = ({ content }) => {
  const contentData = content?.find(
    (el: any) => el?.content_type.section === "section8"
  );

  return contentData?.content_type.is_active ? (
    <div style={setBgOurWelfare(contentData)} id="section8">
      <div className="md:container mx-auto px-4 pb-8">
        <div className="flex flex-col items-center py-8">
          {contentData?.content_type.show_content_type_name? <div className="mb-8 w-full flex flex-col items-center">
            <h2
              className="sm:text-[32px] text-3xl font-bold"
              style={SetFontColor(contentData)}
            >
              {contentData?.content_type.content_type_name}
            </h2>
            <div
              className="border-b-4 mt-2 rounded-full w-[50px] h-[5px]"
              style={borderTypeColor(contentData)}
            ></div>
          </div> : <></>}
          <div
            className={`grid-cols-1 grid w-full sm:grid-cols-2 gap-[20px] grid-${contentData?.content_type.content_show_column}`}
          >
            {contentData?.content_list.map((el: any, index: number) =>
              el?.is_active && el?.is_main ? (
                <div
                  className={`p-3 w-auto  sm:w-[340px] lg:w-full rounded-[${contentData?.content_type.color_content_detail.border_radius}px] flex items-center gap-2 ${
                    contentData?.content_type.color_content_detail.border
                      ? "border-2"
                      : ""
                  }`}
                  style={setCardOurWelfare(contentData)}
                  key={index}
                  data-aos={contentData?.content_type.animation.effect}
                  data-aos-easing={contentData?.content_type.animation.easing}
                  data-aos-anchor-placement={
                    contentData?.content_type.animation.anchor_placement
                  }
                  data-aos-offset={
                    contentData?.content_type.animation.advance_effect
                      ? contentData?.content_type.animation.offset
                      : ""
                  }
                  data-aos-delay={
                    contentData?.content_type.animation.advance_effect
                      ? contentData?.content_type.animation.delay
                      : ""
                  }
                  data-aos-duration={
                    contentData?.content_type.animation.advance_effect
                      ? contentData?.content_type.animation.duration
                      : ""
                  }
                  data-aos-mirror={
                    contentData?.content_type.animation.advance_effect
                      ? contentData?.content_type.animation.mirror
                      : ""
                  }
                  data-aos-once={
                    contentData?.content_type.animation.advance_effect
                      ? contentData?.content_type.animation.once
                      : ""
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="2em"
                    viewBox="0 0 512 512"
                    fill="url('#myGradient')"
                  >
                    <defs>
                      <linearGradient
                        id="myGradient"
                        gradientTransform="rotate(90)"
                      >
                        <stop offset="10%" stop-color="#1f90cf" />
                        <stop offset="90%" stop-color="#1e499a" />
                      </linearGradient>
                    </defs>
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <p
                    className="lg:text-[16px] text-[16px] sm:text-sm"
                    style={setFontDetailOurWelfare(contentData)}
                  >
                    {el?.content_name}
                  </p>
                </div>
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SectionOurWelfare;
