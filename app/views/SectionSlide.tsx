"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCards,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  EffectFlip,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-flip";
import AOS from "aos";
import "aos/dist/aos.css";

import { Helmet } from "react-helmet";

import parse from "html-react-parser";
import {
  colorTwoTone,
  setButtonSlidemain,
} from "../dynamicCss/dynamicCssSlide";
import { useStore } from "@/store/useStore";
import { setButton } from "../dynamicCss/dynamicButton";

interface Props {
  slide: any;
}

const SectionSlide: React.FC<Props> = ({ slide }) => {
  // let slide = {
  //   id: "64913175b911d8a145b066e2",
  //   is_active: true,
  //   auto_play: false,
  //   delay_auto_play: 5,
  //   slide_list: [
  //     {
  //       id: "650d1af0338ce571b9039bb9",
  //       banner_name: "sfsfsdf",
  //       href: {
  //         url: "",
  //         open_new_tab: true,
  //       },
  //       image_url:
  //         "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/banner.jpg",
  //       alt: "employee",
  //       customize: true,
  //       customize_detail: {
  //         text_detail:
  //           '<h1 style="text-align: center;"><span style="color: rgb(255, 255, 255); background-color: rgb(53, 152, 219); font-size: 36pt;">ให้เราเป็นส่วนหนึ่งความสำเร็จ</span></h1>\n<h1 style="text-align: center;"><span style="color: rgb(255, 255, 255); background-color: rgb(53, 152, 219); font-size: 36pt;">ของธุรกิจคุณ</span></h1>\n<p>&nbsp;</p>\n<p style="text-align: center;"><span style="color: rgb(255, 255, 255); background-color: rgb(53, 152, 219);">ถ้าคุณต้องการเทคโนโลยีที่จะมาเปลี่ยนแปลงธุรกิจของคุณ เราคือคำตอบที่ดีที่สุด</span></p>',
  //         image_detail_url: "",
  //         alt: "",
  //         position_text_detail: "left",
  //         text_link: "สมัครงาน",
  //         text_link_color: "#000000",
  //         text_link_background_color: "#f3af60",
  //       },
  //       is_active: true,
  //     },
  //     {
  //       id: "650ac0ab516a39d8e7cf5362",
  //       banner_name: "BBBB",
  //       href: {
  //         url: "https://www.google.com/",
  //         open_new_tab: true,
  //       },
  //       image_url:
  //         "https://d2nl0wple9d2r0.cloudfront.net/EazyCMS/app_images/b0be41b24d375af59e80d79923f7e27f.webp",
  //       alt: "",
  //       customize: false,
  //       customize_detail: {
  //         text_detail: "",
  //         image_detail_url: "",
  //         alt: "",
  //         position_text_detail: "left",
  //         text_link: "",
  //         text_link_color: "",
  //         text_link_background_color: "",
  //       },
  //       is_active: true,
  //     },
  //   ],
  // };

  // console.log(useStore.getState())


  const filterSlideData: any = slide?.slide_list.filter(
    (el: any) => el?.is_active
  );

  const changeAutoPlayTime = (time: number) => {
    return time * 1000;
  };

  const Parser = (data: any) => {
    const htmlContent = data;

    return <div className="responsive-container">{parse(htmlContent)}</div>;
  };

  return (
    <>
      {filterSlideData?.length === 0 || !slide?.is_active? (
        <></>
      ) : (
        <div
          className="lg:h-auto md:h-auto h-auto"
          data-aos="flip-left"
        >
          {filterSlideData?.map((data: any, index: number) => (
            <Helmet key={index}>
              {/* Preload LCP image */}
              <link rel="preload" as="image" href={data?.image_url} />
            </Helmet>
          ))}
          {slide?.auto_play ? (
            <Swiper
              autoplay={{
                delay: changeAutoPlayTime(slide?.delay_auto_play),
                disableOnInteraction: false,
              }}
              spaceBetween={50}
              slidesPerView={1}
              navigation={true}
              pagination={true}
              effect={slide?.animation}
              modules={[
                Navigation,
                Pagination,
                Autoplay,
                EffectCards,
                EffectFade,
                EffectCube,
                EffectCoverflow,
                EffectFlip,
              ]}
              className="wrap"
            >
              {filterSlideData?.map((data: any, index: number) => (
                <SwiperSlide key={index}>
                  {data.customize ? (
                    <div className="relative" key={index}>
                     {data?.overlay.overlay_status? <div
                        className="w-full absolute bg-gradient-to-b from-blue-300/70 to-blue-500/70 h-full"
                        style={colorTwoTone(data)}
                      ></div> : <></>}
                      <img
                        src={data?.image_url}
                        alt={data?.alt}
                        className="w-full h-full"
                        width="100%"
                        rel="preload"
                      />
                      <div
                        className={` w-full h-auto  max-w-[100%]  flex sm:justify-center lg:p-10 ${
                          data?.customize_detail.image_detail_url === ""
                            ? "justify-center"
                            : "justify-around"
                        } items-center sm:gap-10 gap-1 absolute z-40 lg:top-[35%] sm:top-[5%] top-0 ${
                          data?.customize_detail.position_text_detail === "left"
                            ? "lg:justify-start"
                            : data?.customize_detail.position_text_detail ===
                              "right"
                            ? "lg:justify-end"
                            : "lg:justify-center"
                        }`}
                      >
                        {data?.customize_detail.image_detail_url === "" ? (
                          <></>
                        ) : (
                          <div className="sm:w-56 lg:w-96 w-28">
                            <img
                              src={data?.customize_detail.image_detail_url}
                              alt={data?.customize_detail.alt}
                              width="100%"
                              rel="preload"
                            />
                          </div>
                        )}
                        <div className="text-center">
                          {data?.customize_detail.text_detail === "" ? (
                            <></>
                          ) : (
                            <div className={`sm:my-10 my-3`}>
                              {Parser(data?.customize_detail.text_detail)}
                            </div>
                          )}
                          {data?.customize_detail.button
                            .filter((el: any) => el?.is_active)
                            .map((el: any, index: number) => {
                              return (
                                <a
                                  href={el?.href.url}
                                  target={el.href.open_new_tab ? "_blank" : ""}
                                  style={setButton(el)}
                                  className="bg-teal-500 text-white  py-2 px-12 rounded-full m-2"
                                  key={index}
                                >
                                  <button className="mb-6 text-md fon-bold">
                                    {el?.text_button}
                                  </button>
                                </a>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="" key={index}>
                      <a
                        href={data.href.url}
                        target={data.href.open_new_tab ? "_blank" : ""}
                      >
                        <img
                          src={data?.image_url}
                          alt={data?.alt}
                          className="w-full h-auto max-w-[100%]"
                          width="100%"
                          rel="preload"
                        />
                      </a>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation={true}
              pagination={true}
              effect={slide?.animation}
              modules={[
                Navigation,
                Pagination,
                Autoplay,
                EffectCards,
                EffectFade,
                EffectCube,
                EffectCoverflow,
                EffectFlip,
              ]}
              className="wrap"
            >
              {filterSlideData?.map((data: any, index: number) => (
                <SwiperSlide key={index}>
                  {data.customize ? (
                    <div
                      className="relative lg:h-auto sm:h-auto h-52"
                      key={index}
                      // data-aos="flip-right"
                    >
                     {data?.overlay.overlay_status? <div
                        className="w-full absolute bg-gradient-to-b from-blue-300/70 to-red-500/70 h-full"
                        style={colorTwoTone(data)}
                      ></div> : <></>}
                      <img
                        src={data?.image_url}
                        alt={data?.alt}
                        className="w-full h-full"
                        width="100%"
                        rel="preload"
                      />
                      <div
                        className={` w-full h-auto max-w-[100%]  flex sm:justify-center lg:p-10 ${
                          data?.customize_detail.image_detail_url === ""
                            ? "justify-center"
                            : "justify-around"
                        } items-center sm:gap-10 gap-1 absolute z-40 lg:top-[35%] sm:top-[5%] top-0 ${
                          data?.customize_detail.position_text_detail === "left"
                            ? "lg:justify-start"
                            : data?.customize_detail.position_text_detail ===
                              "right"
                            ? "lg:justify-end"
                            : "lg:justify-center"
                        } `}
                      >
                        {data?.customize_detail.image_detail_url === "" ? (
                          <></>
                        ) : (
                          <div className="sm:w-56 lg:w-96 w-28">
                            <img
                              src={data?.customize_detail.image_detail_url}
                              alt={data?.customize_detail.alt}
                              width="100%"
                              rel="preload"
                            />
                          </div>
                        )}
                        <div className="text-center">
                          {data?.customize_detail.text_detail === "" ? (
                            <></>
                          ) : (
                            <div className={`sm:my-10 my-3`}>
                              {Parser(data?.customize_detail.text_detail)}
                            </div>
                          )}
                          {data?.customize_detail.button
                            .filter((el: any) => el?.is_active)
                            .map((el: any, index: number) => {
                              return (
                                <a
                                  href={el?.href.url}
                                  target={el.href.open_new_tab ? "_blank" : ""}
                                  style={setButton(el)}
                                  className="bg-teal-500 text-white  py-2 px-12 rounded-full m-2" 
                                  key={index}
                                >
                                  <button className="mb-6 text-md font-bold">
                                    {el?.text_button}
                                  </button>
                                </a>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="" key={index}>
                      <a
                        href={data.href.url}
                        target={data.href.open_new_tab ? "_blank" : ""}
                      >
                        <img
                          src={data?.image_url}
                          alt={data?.alt}
                          className="w-full max-w-[100%] lg:h-auto sm:h-auto h-52"
                          width="100%"
                          rel="preload"
                        />
                      </a>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      )}
    </>
  );
};

export default SectionSlide;
