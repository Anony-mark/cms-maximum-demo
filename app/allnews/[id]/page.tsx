'use client'

import React, { useEffect, useState } from 'react'

import { SetbgcolorSec2, SetbggridSec2, Setfonttopnews, setBorderCardNewsDetail, setBorderNewsType, setFontColorNewsDetail, setFontColorNewsType } from '../../dynamicCss/dynamicCssNews';
import parse from "html-react-parser";
import { Layout } from '../../components/layout/layout'
import Link from 'next/link';


export default function Page({ params }: { params: { id: string } }) {
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('https://cms-dev.thesonicblue.xyz/api/v1/main_data')
        //   if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`)
        //   }
          const result = await response.json()
          setData(result)
        }
     
        // fetchData().catch((e) => {
        //   // handle the error as needed
        //   console.error('An error occurred while fetching the data: ', e)
        // })
        fetchData()
      }, [])

    
    
    let newsData = data?.data.news;


    const dataNews = newsData;
    const SectionData = dataNews?.filter(
      (el:any) => el?.news_type.id === params.id
    );
    
    const limitString = (data:"string") => {
      if (data.length > 148) {
        return data.slice(0,148) + "..."
      } else {
        return data
      }
    }
    
    return (
        <Layout data={data?.data}>
        <div>
             {SectionData?.map((data: any, index: number) => (
            <div
              style={SetbgcolorSec2(data, "toplasted")}
              className="pb-10"
              key={index}
              data-aos="fade"
            >
              {data?.news_type.show_news_type_name ? (
                <div
                  style={setFontColorNewsType(data, index)}
                  className="font-bold lg:px-72 px-20 pt-10"
                >
                  {data?.news_type.news_type_name}
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
                {data?.news_list.map((dataNews: any, idx: any) => {
                  return (
                    <div
                      key={index}
                      className={`lg:mt-8 mt-2 p-3  hover:scale-110 delay-100 ease-in-out duration-300 ${
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
                      <Link href={`/news/${dataNews?.id}`} className="block ">
                        <img
                          alt="Art"
                          src={dataNews?.image_url}
                          className={`h-64 w-full object-cover sm:h-72 lg:h-72 rounded-3xl`}
                        />
                        <div
                          className="mt-6"
                          style={setFontColorNewsDetail(data, idx)}
                        >
                          <p className="my-4 text-xl tracking-tight">
                            {dataNews?.new_name}
                          </p>
                          <div
                            className="lg:mb-5 mb-8 text-xl tracking-tight font-bold"
                          >
                            {parse(limitString(dataNews?.new_detail))}
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        </Layout>
      )
  }