"use client"

import {
  SetbgcolorSec2,
  SetbggridSec2,
  Setfonttopnews,
  setBorderCardNewsDetail,
  setBorderNewsType,
  setFontColorNewsDetail,
  setFontColorNewsType,
} from "../dynamicCss/dynamicCssNews";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import parse from "html-react-parser";

interface Props {
    news: any
  }

const SectionNews: React.FC<Props> = ({news}) => {
  
  let newsData = news;
  

  
  const limitString = (data: "string") => {
    if (data.length > 148) {
      return data.slice(0, 148) + "...";
    } else {
      return data;
    }
  };

  return (
    <>
      {newsData?.map((data: any, index: number) => (
        <div
          style={SetbgcolorSec2(data, "toplasted")}
          className="pb-10"
          key={index}
          data-aos="fade"
        >
          {data?.news_type.show_news_type_name ? (
            <div
              style={setFontColorNewsType(data, index)}
              className=" lg:px-72 px-20 pt-10"
            >
              <div className="flex justify-between ">
                {data?.news_type.news_type_name}
                <div className="flex items-center hover:cursor-pointer text-sm">
                  <a
                    href={`/allnews/${data?.news_type.id}`}
                    className="text-black button-all-a font-bold"
                  >
                    ดูทั้งหมด
                  </a>
                  <BsFillArrowRightCircleFill className="text-black ml-1 icon-all-a" />
                </div>
              </div>
              <div
                className="border-b-2 mt-2" 
                style={setBorderNewsType(data, index)}
              ></div>
            </div>
          ) : (
            <></>
          )}
          <div
            className={`${SetbggridSec2(
              data,
              "toplasted"
            )} md:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 lg:mx-72 md:mx-[4.5rem] mx-1`}
          >
            {data?.news_list
              .filter((el: any) => el.is_main === true)
              .map((dataNews: any, idx: any) => {
                return (
                  <div
                    key={idx}
                    className={`lg:mt-8 mt-2 p-3  sm:hover:scale-110 sm:delay-100 sm:ease-in-out sm:duration-300 ${
                      newsData[index]?.news_type.color_news_detail.border
                        ? " border-2"
                        : ""
                    } ${
                      data.news_type.show_news_detail_shadow
                        ? "shadow-lg shadow-gray-900"
                        : ""
                    }`}
                    style={setBorderCardNewsDetail(data, idx)}
                  >
                    <a href={`/news/${dataNews?.id}`} className="block ">
                      <img
                        alt="Art"
                        src={dataNews?.image_url}
                        className={`h-64 w-full object-cover sm:h-72 lg:h-72 rounded-3xl`}
                        width="100%"
                      />
                      <div
                        className="mt-6"
                        style={setFontColorNewsDetail(data, idx)}
                      >
                        <p className="my-4 text-xl tracking-tight">
                          {dataNews?.new_name}
                        </p>
                        <div
                          className="lg:mb-5 mb-8 text-[15px] tracking-tight "
                        //   style={Setfonttopnews(
                        //     content,
                        //     "discriptionnewlatest",
                        //     index
                        //   )}
                        >
                          {limitString(dataNews?.new_sub_title)}
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </>
  );
};

export default SectionNews;
