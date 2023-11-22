import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const setting = {
    id: "647597f7437955fe4cb274bb",
    address_website: "https://maximum-demo.web.app/",
    main_content_website: "Eazy CMS  ( Eazy Content Management System )",
    google_search_word:
      "ระบบจัดการเนื้อหา,CMS,Content Management System,เว็บไซต์,สร้างเว็บไซต์,เว็บไซต์สำเร็จรูป",
    google_detail_content_show: "สร้างเว็บของคุณได้ง่ายๆด้วย Eazy CMS",
    facebook_messenger_code: "123455",
    color_background: "#3028d1",
  };

  return [
    {
      url: setting?.address_website,
      lastModified: new Date(),
      // priority: 1,
    },
    {
      url: `${setting?.address_website}career-work`,
      lastModified: new Date(),
      // priority: 0.5,
    },
  ];
}
