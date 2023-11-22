"use client";

import React, { useEffect } from "react";
import { SetFontColor, borderTypeColor } from "../dynamicCss/dynamicCssAboutUs";
import parse from "html-react-parser";
import {
  SetCardShadow,
  SetFontColorDetail,
  setBgService,
} from "../dynamicCss/dynamicCssService";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

interface Props {
  content: any
}


const SectionService: React.FC<Props> = ({content}) => {
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
  //       content_show_column: "4",
  //       content_show_limit: "6",
  //       show_content_type_name: false,
  //       show_content_detail_shadow: true,
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
  //         border_color: "#0693e3",
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
  //           alt: "develop website",
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
  //           alt: "computer-setting",
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
  //           alt: "Give-advice",
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
  //           alt: "marketing",
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
  //       content_type_name: "Content Topic 4",
  //       mode_show_content: "mode-1",
  //       content_show_column: "5",
  //       content_show_limit: "5",
  //       show_content_type_name: true,
  //       show_content_detail_shadow: true,
  //       color_content_type: {
  //         degree: "",
  //         text_color: "#ffffff",
  //         border_color: "#ffffff",
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
  //       section: "section4",
  //     },
  //     content_list: [
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Content 4.1",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://rocketwinoffice.s3.ap-southeast-1.amazonaws.com/EazyCMS/app_images/eaf5e50a71ff7c75b0a72d1e62859018",
  //         video_url: "",
  //         content_detail:
  //           "<p>Lorem ipsum dolor sit amet, consectetur</p>\n<p>Lorem ipsum dolor sit amet, consectetur</p>\n<p>&nbsp;</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c01017f25d77294ad29386",
  //         content_name: "Content 4.2",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:31.553Z",
  //         view_count: 0,
  //         image_url:
  //           "https://rocketwinoffice.s3.ap-southeast-1.amazonaws.com/EazyCMS/app_images/6f8fd26012c5528a11b5acfcb1d95f42",
  //         video_url: "",
  //         content_detail:
  //           "<p>Lorem ipsum dolor sit amet, consectetur <br>adipiscing elit, sed do eiusmod</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 10,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c0103df25d77294ad29387",
  //         content_name: "Content 4.3",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:11:09.097Z",
  //         view_count: 0,
  //         image_url:
  //           "https://rocketwinoffice.s3.ap-southeast-1.amazonaws.com/EazyCMS/app_images/d715c544f393b763eefb887c493d3189",
  //         video_url: "",
  //         content_detail:
  //           "<p>Lorem ipsum dolor sit amet, consectetur <br>adipiscing elit, sed do eiusmod</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 11,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c01051ea937493b809ca5e",
  //         content_name: "Content 4.4",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:11:29.696Z",
  //         view_count: 0,
  //         image_url:
  //           "https://rocketwinoffice.s3.ap-southeast-1.amazonaws.com/EazyCMS/app_images/4ac1b58e9b04d860689424748775b1c8",
  //         video_url: "",
  //         content_detail:
  //           "<p>Lorem ipsum dolor sit amet, consectetur <br>adipiscing elit, sed do eiusmod</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 12,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c01062f25d77294ad29388",
  //         content_name: "Content 4.5",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:11:46.68Z",
  //         view_count: 0,
  //         image_url:
  //           "https://rocketwinoffice.s3.ap-southeast-1.amazonaws.com/EazyCMS/app_images/2134d44d586ee2fec5e9782e6d0cebc8",
  //         video_url: "",
  //         content_detail:
  //           "<p>Lorem ipsum dolor sit amet, consectetur <br>adipiscing elit, sed do eiusmod</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 13,
  //         tags: [],
  //         slugs: [],
  //       },
  //     ],
  //   },
  // ];

  // useEffect(() => {
  //   AOS.init();
  // },[])
  
  const contentData = content?.find(
    (el:any) => el?.content_type.section === "section2"
  );

  return (
    contentData?.content_type.is_active? <div style={setBgService(contentData)} id="section2">
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
          <h3 className="mb-8">{contentData?.content_type.content_type_description}</h3>
          <div className={`grid-cols-1 sm:grid-cols-2 grid gap-8 grid-${contentData?.content_type.content_show_column}`}>
            {contentData?.content_list.map((el: any, index: number) => (
              el?.is_active && el?.is_main ? <div
                className={` rounded-[${contentData?.content_type.color_content_detail.border_radius}px] bg-slate-100 ${contentData?.content_type.color_content_detail.border? "border-2":""} `}
                key={index}
                style={SetCardShadow(contentData)}
                data-aos={contentData?.content_type.animation.effect}
                data-aos-easing={contentData?.content_type.animation.easing}
                data-aos-anchor-placement={contentData?.content_type.animation.anchor_placement}
                data-aos-offset={contentData?.content_type.animation.advance_effect? contentData?.content_type.animation.offset : ""}
                data-aos-delay={contentData?.content_type.animation.advance_effect? contentData?.content_type.animation.delay : ""}
                data-aos-duration={contentData?.content_type.animation.advance_effect? contentData?.content_type.animation.duration : ""}
                data-aos-mirror={contentData?.content_type.animation.advance_effect? contentData?.content_type.animation.mirror : ""}
                data-aos-once={contentData?.content_type.animation.advance_effect? contentData?.content_type.animation.once : ""}
              >
                <div className="p-8 text-center flex flex-col items-center">
                  <img src={el?.image_url} alt={el?.alt} className="my-2" />
                  <p style={SetFontColorDetail(contentData)} className="font-bold">
                    {el?.content_name}
                  </p>
                  <div className="my-2">{parse(el?.content_detail)}</div>
                </div>
              </div> : <></>
            ))}
          </div>
        </div>
      </div>
    </div> : <></>
  );
};

export default SectionService;
