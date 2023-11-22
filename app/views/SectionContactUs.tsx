"use client";

import React from "react";
import parse from "html-react-parser";
import Link from "next/link";
import {
  setBgContactUs,
  setButtonContactUs,
} from "../dynamicCss/dynamicCssContactUs";
import { setButton } from "../dynamicCss/dynamicButton";
interface Props {
  footer: any;
}

const SectionContactUs: React.FC<Props> = ({ footer }) => {
  // const footer = {
  //   id: "649018aaa0c5e90169d00091",
  //   degree: "",
  //   background_color_1: "#48206b",
  //   background_color_2: "#48206b",
  //   image_url:
  //     "https://d2nl0wple9d2r0.cloudfront.net/EazyCMS/app_images/fb33cdd1d3fe8bd40196c7ed011b0b13.webp",
  //   footer_detail: "",
  //   contact: {
  //     contact_detail:
  //       '<p><span style="color: rgb(35, 111, 161); font-size: 18pt;">มีธุรกิจอยู่แล้วใช่ไหม? ให้เราช่วยดูแลคุณ ปรึกษาฟรี!</span></p>',
  //     href: {
  //       url: "https://eazy-cms-demo.web.app/",
  //       open_new_tab: true,
  //     },
  //     degree: "",
  //     background_color_1: "#e4f5ff",
  //     background_color_2: "#e4f5ff",
  //     text_link: "โทร 02-118-2764",
  //     text_link_color: "#ffffff",
  //     text_link_background_color: "#1e499a",
  //     is_active: true,
  //   },
  //   copyright: "Maximum Soft Co., LTD",
  // };
  const contact = footer?.contact;

  return contact?.is_active ? (
    <div style={setBgContactUs(contact)} id = "section9">
      <div className="md:container mx-auto px-4 pb-12">
        <div className="flex flex-col items-center py-12">
          <h2 className="mb-2 font-bold sm:text-[32px] text-3xl text-[#1d4a9b]">
            {contact?.contact_title}
          </h2>
          <div className="border-b-4 mt-2 rounded-full w-[50px] h-[5px] border-[#5ebff5]"></div>
        </div>
        <div className="flex justify-center items-center  md:flex-col lg:flex-row flex-col">
          <div className="responsive-editor-contact">
            {parse(contact?.contact_detail)}
          </div>
          <div className="flex items-center gap-2">
            {contact?.button
              .filter((el: any) => el?.is_active)
              .map((el: any, index: number) => {
                return (
                  <Link
                    href={el?.href.url}
                    target={`${el?.href.open_new_tab ? "_blank" : ""}`}
                    data-aos="fade"
                    key={index}
                  >
                    <button
                      className="mx-8 lg:my-0 md:my-8 my-8 py-[5px] px-8 rounded-[100px]"
                      style={setButton(el)}
                    >
                      {el?.text_button}
                    </button>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SectionContactUs;
