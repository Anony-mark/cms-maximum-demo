'use client'

import React, { useState, useEffect } from 'react'

import SectionSlide from './SectionSlide'
import SectionAboutUs from './SectionAboutUs'
import SectionService from './SectionService'
import SectionWhyMaximum from './SectionWhyMaximum'
import SectionTechStack from './SectionTechStack'
import SectionOurTeam from './SectionOurTeam'
import SectionWorkProcess from './SectionWorkProcess'
import SectionApplyForWork from './SectionApplyForWork'
import SectionOurWelfare from './SectionOurWelfare'
import SectionContactUs from './SectionContactUs'
import { Layout } from '../components/layout/layout'
import { Helmet } from 'react-helmet'
import PopupModal from '../components/popupModal'
import SectionNews from './SectionNews'


const AllSection = () => {
  const [data, setData] = useState<any>(null)
  const [modalOpen, setModalOpen] = useState(false);
  const handleClose = () => setModalOpen(false);
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://cms-dev.thesonicblue.xyz/api/v1/main_data')
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`)
    //   }
      const result = await response.json()
      setData(result)
      setModalOpen(result.data.popup.is_active)
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
      <PopupModal modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        handleClose={handleClose}
        popup={data?.data.popup}
        />
        <SectionSlide slide={data?.data.slide} />
        <SectionAboutUs content={data?.data.content} />
        <SectionService content={data?.data.content} />
        <SectionWhyMaximum content={data?.data.content} />
        <SectionTechStack content={data?.data.content} />
        <SectionOurTeam content={data?.data.content} />
        <SectionWorkProcess content={data?.data.content} />
        <SectionApplyForWork
          content={data?.data.content}
          form={data?.data.form}
        />
        <SectionOurWelfare content={data?.data.content} />
        <SectionNews news={data?.data.news}/>
        <SectionContactUs footer={data?.data.footer} />
        </Layout>
    </>
  )
}

export default AllSection