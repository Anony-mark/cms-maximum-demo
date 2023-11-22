"use client";

import React from "react";
import {
  SetFontColor,
  borderTypeColor,
  setBgAboutUs,
} from "../dynamicCss/dynamicCssAboutUs";
import parse from "html-react-parser";

interface Props {
  content: any
}

const SectionAboutUs: React.FC<Props> = ({content}) => {
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
  //         background_color_2: "#FFFFFF",
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
  //         alt: "working-1",
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
  //       content_type_name: "Content Topic 3",
  //       mode_show_content: "mode-1",
  //       content_show_column: "2",
  //       content_show_limit: "6",
  //       show_content_type_name: false,
  //       show_content_detail_shadow: false,
  //       color_content_type: {
  //         degree: "",
  //         text_color: "#e31a1a",
  //         border_color: "#ffffff",
  //         background_color_1: "#5e9eb7",
  //         background_color_2: "#5e9eb7",
  //         border: false,
  //       },
  //       color_content_detail: {
  //         text_color: "#ffffff",
  //         border_color: "#ffffff",
  //         background_color: "#7836b2",
  //         border: false,
  //         transparent: false,
  //         border_radius: 20,
  //       },
  //       is_active: true,
  //       position: 0,
  //       section: "section3",
  //     },
  //     content_list: [
  //       {
  //         id: "64c00260ea937493b809ca5b",
  //         content_name: "Content 3.1",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T17:12:00.019Z",
  //         view_count: 0,
  //         image_url:
  //           "https://rocketwinoffice.s3.ap-southeast-1.amazonaws.com/EazyCMS/app_images/3a68dd6bb3d43e53c9c6698730df2488",
  //         video_url: "",
  //         content_detail:
  //           '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n<p>Sed pulvinar, est ac suscipit condimentum,&nbsp;</p>\n<p style="text-align: left;">nulla augue rutrum tortor,</p>',
  //         is_active: true,
  //         ref_content_type_id: "649e92dc66fe4d805952aee0",
  //         is_main: true,
  //         position: 5,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c002aaea937493b809ca5d",
  //         content_name: "Content 3.2",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T17:13:14.388Z",
  //         view_count: 0,
  //         image_url:
  //           "https://rocketwinoffice.s3.ap-southeast-1.amazonaws.com/EazyCMS/app_images/b11fe17b1724f51d7a970d18adde5a2f",
  //         video_url: "",
  //         content_detail:
  //           '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n<p>Sed pulvinar, est ac suscipit condimentum,&nbsp;</p>\n<p style="text-align: left;">nulla augue rutrum tortor,</p>',
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

  const contentData = content?.find(
    (el:any) => el?.content_type.section === "section1"
  );

  return contentData?.content_type.is_active ? (
    <div style={setBgAboutUs(contentData)} id="section1">
      <div className="md:container mx-auto px-4">
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
          <div>
            {contentData?.content_list.map((el: any, idx: number) => (
             el?.is_active && el?.is_main? <div key={idx} className="flex flex-col items-center">
                <img
                  src={el?.image_url}
                  alt={el?.alt}
                  className="lg:w-[627px] w-auto"
                />
                <div className="my-4 lg:w-[800px] w-auto">
                  {parse(el?.content_detail)}
                </div>
              </div> : <></>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SectionAboutUs;
