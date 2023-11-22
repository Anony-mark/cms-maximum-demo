'use client'

import React, { useState, useEffect } from 'react'
import { Layout } from '../components/layout/layout'
import { Helmet } from 'react-helmet'
import SectionCareer from '../career-work/SectionCareer'

const CareerSection = () => {
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

    return (
        <>
         <Layout data={data?.data}>
         <Helmet>
            <title>{data?.data.setting.main_content_website}</title>
    
            <link rel="icon" type="image/svg+xml" href={`${data?.data.logo.url}`} />
            <meta
              name="description"
              content={data?.data.setting.google_detail_content_show}
            />
            <meta name="keywords" content={data?.data.setting.google_search_word} />
          </Helmet>
          <SectionCareer content={data?.data.content} form={data?.data.form}/>
            </Layout>
        </>
      )
}

export default CareerSection