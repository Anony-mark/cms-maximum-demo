"use client";

import React from "react";
import { SetFontColor, borderTypeColor } from "../dynamicCss/dynamicCssAboutUs";
import parse from "html-react-parser";
import { setBgWhyMaximum } from "../dynamicCss/dynamicCssWhyMaximum";
import { setButton } from "../dynamicCss/dynamicButton";

interface Props {
  content: any;
}

const SectionWhyMaximum: React.FC<Props> = ({ content }) => {
  // const content = [
  //   {
  //     content_type: {
  //       id: "649e92d766fe4d805952aedf",
  //       content_type_name: "เกี่ยวกับเรา",
  //       mode_show_content: "mode-1",
  //       content_show_column: "4",
  //       content_show_limit: "6",
  //       show_content_type_name: true,
  //       show_content_detail_shadow: true,
  //       color_content_type: {
  //         degree: "",
  //         text_color: "#1d4a9b",
  //         border_color: "#5ebff5",
  //         background_color_1: "#ffffff",
  //         background_color_2: "#ffffff",
  //         border: false,
  //       },
  //       color_content_detail: {
  //         text_color: "#ffffff",
  //         border_color: "#275f5a",
  //         background_color: "#323a72",
  //         border: false,
  //         transparent: false,
  //         border_radius: 20,
  //       },
  //       is_active: true,
  //       position: 0,
  //       section: "section1",
  //     },
  //     content_list: [
  //       {
  //         id: "64a2826962ed59ad90d19b65",
  //         content_name: "อะไรคือ CMS",
  //         create_by: "Admin",
  //         create_at: "2023-07-03T08:10:17.592Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/about-2.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximum Soft เรามีประสบการณ์ด้านพัฒนาซอร์ฟแวร์ มากกว่า 10 ปี และมีผู้เชี่ยวชาญที่มีความรู้ความสามารถ ที่จะคอยเคียงข้างธุรกิจของคุณตลอดไป</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e92d766fe4d805952aedf",
  //         is_main: true,
  //         position: 1,
  //         tags: ["CMS", "Website"],
  //         slugs: [],
  //       },
  //     ],
  //   },
  //   {
  //     content_type: {
  //       id: "649e92dc66fe4d805952aee0",
  //       content_type_name: "เราทำอะไรได้บ้าง?",
  //       mode_show_content: "mode-1",
  //       content_show_column: "2",
  //       content_show_limit: "6",
  //       show_content_type_name: false,
  //       show_content_detail_shadow: false,
  //       color_content_type: {
  //         degree: "",
  //         text_color: "#1d4a9b",
  //         border_color: "#5ebff5",
  //         background_color_1: "#F8F8F8",
  //         background_color_2: "#F8F8F8",
  //         border: false,
  //       },
  //       color_content_detail: {
  //         text_color: "#0693e3",
  //         border_color: "#ffffff",
  //         background_color: "#FFFFFF",
  //         border: false,
  //         transparent: false,
  //         border_radius: 20,
  //       },
  //       is_active: true,
  //       position: 0,
  //       section: "section2",
  //     },
  //     content_list: [
  //       {
  //         id: "64c00260ea937493b809ca5b",
  //         content_name: "พัฒนาเว็บไซต์",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T17:12:00.019Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/s1.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;พัฒนา Web Application ด้วยเทคโนโลยีที่ทันสมัยและเนรมิตได้ตามที่ใจคุณปรารถนาด้วยราคาย่อมเยา</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e92dc66fe4d805952aee0",
  //         is_main: true,
  //         position: 5,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c002aaea937493b809ca5d",
  //         content_name: "พัฒนาระบบหลังบ้าน",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T17:13:14.388Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/s2.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>พัฒนาระบบหลังบ้าน ใช้งานง่ายและสถิติ ที่แม่นยำ ครบครัน</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e92dc66fe4d805952aee0",
  //         is_main: true,
  //         position: 8,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c002aaea937493b809ca5d",
  //         content_name: "ให้คำปรึกษา",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T17:13:14.388Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/s3.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>ให้คำปรึกษาทางด้านซอฟต์แวร์และตอบคำถามปัญหาต่างๆเกี่ยวกับการใช้งานของ Application</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e92dc66fe4d805952aee0",
  //         is_main: true,
  //         position: 8,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c002aaea937493b809ca5d",
  //         content_name: "ระบบการตลาด",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T17:13:14.388Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/s4.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>ระบบการตลาดที่จะทำให้คุณ เป็นที่รู้จักและเพิ่มยอดขาย อย่างมีประสิทธิภาพ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e92dc66fe4d805952aee0",
  //         is_main: true,
  //         position: 8,
  //         tags: [],
  //         slugs: [],
  //       },
  //     ],
  //   },
  //   {
  //     content_type: {
  //       id: "649e93a669c2742e5a258993",
  //       content_type_name: "ทำไมต้อง Maximum Soft?",
  //       mode_show_content: "mode-1",
  //       content_show_column: "5",
  //       content_show_limit: "5",
  //       show_content_type_name: true,
  //       show_content_detail_shadow: true,
  //       color_content_type: {
  //         degree: "",
  //         text_color: "#1d4a9b",
  //         border_color: "#5ebff5",
  //         background_color_1: "#ffffff",
  //         background_color_2: "#ffffff",
  //         border: false,
  //       },
  //       color_content_detail: {
  //         text_color: "#0a2d61",
  //         border_color: "#060606",
  //         background_color: "#84b2fa",
  //         border: false,
  //         transparent: true,
  //         border_radius: 20,
  //       },
  //       is_active: true,
  //       position: 0,
  //       section: "section3",
  //     },
  //     content_list: [
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Content 4.1",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/Content-1.png",
  //         alt: "learning",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //     ],
  //   },
  // ];

  const logo = {
    id: "6476c73848086219526b497a",
    url: "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/logo.png",
    alt: "logo",
    width: "150",
    height: "150",
  };

  const contentData = content?.find(
    (el: any) => el?.content_type.section === "section3"
  );

  return contentData?.content_type.is_active ? (
    <div style={setBgWhyMaximum(contentData)} id="section3">
      <div className="md:container mx-auto px-4 pb-8">
        <div className="flex flex-col items-center py-8">
        {contentData?.content_type.show_content_type_name?  <div className="mb-8 w-full flex flex-col items-center">
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
          <div className="pt-4 pb-6" data-aos={contentData?.content_type.animation.effect}>
            <img src={logo?.url} alt={logo?.alt} width={240} height={124} />
          </div>
          {contentData?.content_list.map((el: any, index: number) => (
           el?.is_active && el?.is_main? <div key={index}>
              <div className="py-[16px]">
                <div className="lg:w-[736.5px] w-auto" data-aos="fade-right">
                  {parse(el?.content_detail)}
                </div>
              </div>
              <div
                className="flex items-center justify-center pt-4 pb-6"
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
                <img
                  src={el?.image_url}
                  alt={el?.alt}
                  className="lg:w-[600px] w-auto"
                />
              </div>
              <div className=" my-[2rem] flex justify-center">
                {contentData?.content_type.button.filter((el:any) => el?.is_active).map((el:any,index:number) => {
                  return  <a
                  href={el?.href.url}
                  target={el?.href.open_new_tab? "_blank" : ""}
                  className="bg-gradient-to-b rounded-[100px] py-[10px] px-[3rem]"
                  key={index}
                  style={setButton(el)}
                >
                  {el?.text_button}
                </a>
                })}
              </div>
            </div> : <></>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SectionWhyMaximum;
