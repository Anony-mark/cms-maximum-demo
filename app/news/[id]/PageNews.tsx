"use client"

import { useEffect, useMemo, useState } from "react";
import parse from "html-react-parser";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";
import { Layout } from '../../components/layout/layout'
import Link from "next/link";

import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import dayjs from "dayjs";
import "dayjs/locale/th";

export default function PageNews( {id}:any ) {
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
  
    const [openCopy, setOpenCopy] = useState(false);
  
    // let { newsListId } = useParams();
  
    const dataNews = newsData;
  
    const mergeArrayNewsList = useMemo(() => {
      const newsLists: any = [];
      dataNews?.forEach((el: any) => {
        if (el.news_list.length > 0) {
          newsLists.push(...el.news_list);
        }
      });
      return newsLists;
    }, [dataNews]);
  
    const DetailData = mergeArrayNewsList?.find(
      (el: any) => el?.id === id
    );
  
    const formatDate = (date: any) =>
      dayjs(date).locale("th").add(543, "year").format("DD MMMM YYYY HH:MM น.");
  
    const copyUrl = () => {
      const url = window.location.href;
      navigator.clipboard
        .writeText(url)
        .then(() => {
          setOpenCopy(true);
          setTimeout(() => {
            setOpenCopy(false);
          }, 1500);
        })
        .catch((error) => {
          console.error("Error copying URL:", error);
        });
    };
    
    
    return (
        <>
         <Layout data={data?.data}>
          <div className="md:container mx-auto px-4">
            <div className="mt-5">
              <img src={DetailData?.image_url} alt="" className="w-full" />
            </div>
            <div className="mt-1 flex items-center gap-2 text-lg">
              <AiOutlineCalendar /> <p>{formatDate(DetailData?.create_at)}</p>
            </div>
            <div className="border-b-2 border-gray-300 mt-2"></div>
            <h2 className="my-5 font-bold text-4xl">{DetailData?.new_name}</h2>
            <div className="border-b-2 border-gray-300 mt-2"></div>
            <div className="my-5 break-all">
              <div>
                {DetailData?.new_detail !== undefined
                  ? parse(DetailData?.new_detail)
                  : ""}
              </div>
            </div>
            <div className="border-b-2 border-gray-300 mt-2"></div>
            <div className="flex sm:items-center justify-start gap-20 my-5 sm:flex-row flex-col item-start">
              <div className="">
                <h2 className="font-bold text-lg my-3">แชร์ข่าว</h2>
                <div className="flex gap-2">
                  <FacebookShareButton
                    url={`https://eazy-cms-demo.web.app/news/${id}`}
                    hashtag={"#portfolio..."}
                  >
                    <FacebookIcon size={50} round={true} />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={`https://eazy-cms-demo.web.app/news/${id}`}
                  >
                    <TwitterIcon size={50} round={true} />
                  </TwitterShareButton>
                  <LineShareButton
                    url={`https://eazy-cms-demo.web.app/news/${id}`}
                  >
                    <LineIcon size={50} round={true} />
                  </LineShareButton>
                  <button
                    onClick={copyUrl}
                    className="bg-deep-orange-400 p-3 rounded-full"
                  >
                    <FaRegCopy className="text-2xl" />
                  </button>
                </div>
                <div className="relative">
                  {openCopy ? (
                    <p className="ml-40 absolute w-full">คัดลอกแล้ว</p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="">
                <h2 className="font-bold text-lg my-3">แท็กที่เกี่ยวข้อง</h2>
                <div className="flex items-center gap-3 ">
                  {DetailData?.tags.map((el: any, idx: number) => (
                    <Link
                      href={`/tag/${el}`}
                      className="border-2 border-black px-5 py-1 rounded-full"
                      key={idx}
                    >
                      <span>#</span>
                      {el}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </Layout>
        </>
      );
  }

