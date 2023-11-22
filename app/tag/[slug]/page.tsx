"use client"

import  { useEffect, useMemo, useState } from "react";
import { Layout } from '../../components/layout/layout'
import parse from "html-react-parser";
import Link from "next/link";


export default function Page({ params }: { params: { slug: string } }) {
   const decodeSlug = decodeURIComponent(params.slug)
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
    let contentData = data?.data.content;
  
   
  
    const dataNews = newsData;
  
    const dataContent = contentData;
  
    const mergeArrayContentList = useMemo(() => {
      const contentLists: any = [];
      dataContent?.forEach((el: any) => {
        if (el?.content_list?.length > 0) {
          contentLists.push(...el?.content_list);
        }
      });
      return contentLists;
    }, [dataContent]);
  
    let arrContentMap: any[] = [];
  
    mergeArrayContentList.map((item: any) => {
      const {
        id,
        content_name,
        create_by,
        create_at,
        view_count,
        image_url,
        content_detail,
        is_active,
        ref_content_type_id,
        is_main,
        position,
        tags,
      } = item;
      const data = {
        id: id,
        new_name: content_name,
        create_by: create_by,
        create_at: create_at,
        view_count: view_count,
        image_url: image_url,
        image_gallery: [
          "https://rocketwinoffice.s3.ap-southeast-1.amazonaws.com/EazyCMS/app_images/9231c477b01266868e45558f7b7a8abe",
        ],
        new_detail: content_detail,
        is_active: is_active,
        ref_news_type_id: ref_content_type_id,
        is_main: is_main,
        position: position,
        tags: tags,
        checkpath: true,
      };
      arrContentMap.push(data);
    });
  
    const mergeArrayNewsList = useMemo(() => {
      const newsLists: any = [];
      dataNews?.forEach((el: any) => {
        if (el.news_list.length > 0) {
          newsLists.push(...el.news_list);
        }
      });
      if (arrContentMap !== undefined) {
        arrContentMap?.forEach((item: any) => {
          newsLists?.push(item);
        });
      }
      return newsLists;
    }, [dataNews]);
  
    const findData = mergeArrayNewsList.filter((el: any, idx: number) =>
      el.tags.includes(decodeSlug)
    );
  
    const limitString = (data: "string") => {
      if (data.length > 85) {
        return data.slice(0, 85) + "...";
      } else {
        return data;
      }
    };

    return (
        <Layout data={data?.data}>
        <div className=" mx-auto px-4 mb-5">
          <h1 className="text-2xl py-1 text-center">#{decodeSlug}</h1>
          <div
            className={` md:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 lg:mx-64 md:mx-[4.5rem] mx-1 lg:grid-cols-4 grid`}
          >
            {findData?.map((el: any, idx: number) => (
              <div className="lg:mt-8 mt-2 p-3  hover:scale-110 delay-100 ease-in-out duration-300 border-2 rounded-xl border-black" key={idx}>
                <Link
                  href={`/${el.checkpath ? "content" : "news"}/${el?.id}`}
                  className="block "
                >  
                  <img
                    alt="Art"
                    src={el?.image_url}
                    className={`h-64 w-full object-cover sm:h-72 lg:h-72 rounded-3xl`}
                  />
                  <div className="mt-6">
                    <p className="my-4 text-xl tracking-tight">{el?.new_name}</p>
                    <div className="lg:mb-5 mb-8 text-xl tracking-tight font-bold">
                      {parse(limitString(el?.new_detail))}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        </Layout>
      )
  }