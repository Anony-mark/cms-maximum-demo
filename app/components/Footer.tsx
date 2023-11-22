"use client";

import React, { useRef, useState } from "react";
import parse from "html-react-parser";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import {
  setBgFooter,
  setFormButtonReset,
  setFormButtonSubmit,
} from "../dynamicCss/dynamicCssFooter";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useStore } from "@/store/useStore";

interface Props {
  menu: any;
  footer: any;
  form: any;
}

const Footer: React.FC<Props> = ({ menu, footer, form }) => {
  const [dropdown, setDropdown] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // const {menu , footer, form}:any = useStore()

  const handleChange = (event: SelectChangeEvent) => {
    setDropdown(event.target.value as string);
  };

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onReset = (e:any) => {
    e.preventDefault()
    reset()
  }

  const onSubmit = (data: any) => {
    let msgResult: string = "";
    console.log(data);
    console.log(formRef.current);
    formData?.field_list.forEach((el: any, idx: number) => {
      return (msgResult +=
        el?.name_attribute + " :" + data[el?.name_attribute] + "\n");
    });

    setValue("message", msgResult);

    console.log("msg", msgResult);
    emailjs
      .sendForm(
        "service_7p2cthi",
        "template_yodg7lv",
        formRef.current!,
        "b4hiJlxr2j3xksoGV"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(formRef.current);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("ส่งข้อมูลเรียบร้อยแล้ว");
    reset();
  };

  // const sendEmail = (e:any) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_7p2cthi', 'template_yodg7lv', form.current!, 'b4hiJlxr2j3xksoGV')
  //     .then((result) => {
  //         console.log(result.text);
  //         console.log("formcurrent",form.current)
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };

  // const menu = [
  //   {
  //     id: "647821377e5feb3712cae987",
  //     label_th: "หน้าหลัก",
  //     label_en: "#",
  //     mode_link: true,
  //     href: {
  //       url: "https://eazy-cms-demo.web.app/",
  //       open_new_tab: false,
  //     },
  //     detail: "<p>hello&nbsp;</p>",
  //     icon: "",
  //     font: {
  //       color: "#000000",
  //       degree: "to right",
  //       background_color_1: "#518992",
  //       background_color_2: "#518992",
  //       border_color: "#eed0b7",
  //       transparent_active: true,
  //       border_active: false,
  //       sub_color: "#000000",
  //       sub_background_color: "#ffffff",
  //       sub_border_color: "#880eed",
  //       sub_transparent_active: false,
  //       sub_border_active: false,
  //       sub_in_sub_color: "#000000",
  //       sub_in_sub_background_color: "#ffffff",
  //       sub_in_sub_border_color: "#9497e6",
  //       sub_in_sub_transparent_active: false,
  //       sub_in_sub_border_active: false,
  //     },
  //     position: "HEADER",
  //     is_active: true,
  //     sub_menu: [],
  //   },
  //   {
  //     id: "647821647e5feb3712cae989",
  //     label_th: "เกี่ยวกับเรา",
  //     label_en: "Services",
  //     mode_link: true,
  //     href: {
  //       url: "https://www.google.com/",
  //       open_new_tab: true,
  //     },
  //     detail: "<p>พี่ภีมสุดหล่อ</p>",
  //     icon: "",
  //     font: {
  //       color: "#00000",
  //       degree: "",
  //       background_color_1: "#ffffff",
  //       background_color_2: "#ffffff",
  //       border_color: "#ffffff",
  //       transparent_active: true,
  //       border_active: false,
  //       sub_color: "#212851",
  //       sub_background_color: "#80C8EE",
  //       sub_border_color: "#DDDDDD",
  //       sub_transparent_active: true,
  //       sub_border_active: false,
  //       sub_in_sub_color: "#212851",
  //       sub_in_sub_background_color: "#80C8EE",
  //       sub_in_sub_border_color: "#DDDDDD",
  //       sub_in_sub_transparent_active: true,
  //       sub_in_sub_border_active: false,
  //     },
  //     position: "HEADER",
  //     is_active: true,
  //     sub_menu: [
  //       {
  //         id: "64f0491e2bebc47be3e528e7",
  //         label_th: "รับออกแบบและสร้างเว็บไซต์",
  //         label_en: "Design&Create Website",
  //         mode_link: true,
  //         href: {
  //           url: "https://www.google.com/",
  //           open_new_tab: true,
  //         },
  //         detail: "<p>xxxxx</p>\n<p>&nbsp;</p>",
  //         icon: "",
  //         is_active: true,
  //         sub_menu: [
  //           {
  //             id: "6502a0b9284def6c6dda0c9d",
  //             label_th: "กกก",
  //             label_en: "กก",
  //             mode_link: false,
  //             href: {
  //               url: "",
  //               open_new_tab: true,
  //             },
  //             detail: "",
  //             icon: "",
  //             is_active: true,
  //           },
  //         ],
  //       },
  //       {
  //         id: "64f1888e7ec1102e284936c9",
  //         label_th: "รับออกแบบเทมเพลต",
  //         label_en: "Design Template",
  //         mode_link: false,
  //         href: {
  //           url: "",
  //           open_new_tab: false,
  //         },
  //         detail: "<p>AAAAAAAAAAAAAAAAAAAAAAA</p>",
  //         icon: "",
  //         is_active: true,
  //         sub_menu: [],
  //       },
  //       {
  //         id: "64f188d77ec1102e284936ca",
  //         label_th: "รับออกแบบโลโก้",
  //         label_en: " Design Logo",
  //         mode_link: false,
  //         href: {
  //           url: "",
  //           open_new_tab: true,
  //         },
  //         detail: "<p>logo</p>",
  //         icon: "",
  //         is_active: true,
  //         sub_menu: [
  //           {
  //             id: "64f57bc21f2bd1e94f1eda94",
  //             label_th: "ออกแบบโลโก้ทางการ",
  //             label_en: "*",
  //             mode_link: false,
  //             href: {
  //               url: "",
  //               open_new_tab: true,
  //             },
  //             detail: "<p>โลโก้ทางการ</p>",
  //             icon: "",
  //             is_active: true,
  //           },
  //           {
  //             id: "64f581e7a92a9ad88130a1c1",
  //             label_th: "ออกแบบโลโก้ไม่เป็นทางการ",
  //             label_en: "#",
  //             mode_link: true,
  //             href: {
  //               url: "https://www.google.com/",
  //               open_new_tab: true,
  //             },
  //             detail: "<p>โลโก้ไม่เป็นทางการ</p>",
  //             icon: "",
  //             is_active: true,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: "64df1fe56281ad06ff2c4704",
  //     label_th: "บริการของเรา",
  //     label_en: " #",
  //     mode_link: false,
  //     href: {
  //       url: "https://www.google.com/",
  //       open_new_tab: false,
  //     },
  //     detail: "",
  //     icon: "",
  //     font: {
  //       color: "#000000",
  //       degree: "",
  //       background_color_1: "#ffffff",
  //       background_color_2: "#ffffff",
  //       border_color: "#DDDDDD",
  //       transparent_active: true,
  //       border_active: false,
  //       sub_color: "#FFFFFF",
  //       sub_background_color: "#80C8EE",
  //       sub_border_color: "#DDDDDD",
  //       sub_transparent_active: false,
  //       sub_border_active: false,
  //       sub_in_sub_color: "#FFFFFF",
  //       sub_in_sub_background_color: "#80C8EE",
  //       sub_in_sub_border_color: "#DDDDDD",
  //       sub_in_sub_transparent_active: false,
  //       sub_in_sub_border_active: false,
  //     },
  //     position: "HEADER",
  //     is_active: true,
  //     sub_menu: [],
  //   },
  //   {
  //     id: "64f1891a0325aac81eb8fd64",
  //     label_th: "ผลงานของเรา",
  //     label_en: "Benefits & Features",
  //     mode_link: false,
  //     href: {
  //       url: "",
  //       open_new_tab: true,
  //     },
  //     detail: "",
  //     icon: "",
  //     font: {
  //       color: "#000000",
  //       degree: "",
  //       background_color_1: "#80C8EE",
  //       background_color_2: "#80C8EE",
  //       border_color: "#DDDDDD",
  //       transparent_active: true,
  //       border_active: false,
  //       sub_color: "#212851",
  //       sub_background_color: "#80C8EE",
  //       sub_border_color: "#DDDDDD",
  //       sub_transparent_active: true,
  //       sub_border_active: false,
  //       sub_in_sub_color: "#FFFFFF",
  //       sub_in_sub_background_color: "#80C8EE",
  //       sub_in_sub_border_color: "#DDDDDD",
  //       sub_in_sub_transparent_active: false,
  //       sub_in_sub_border_active: false,
  //     },
  //     position: "HEADER",
  //     is_active: true,
  //     sub_menu: [
  //       {
  //         id: "64f189997ec1102e284936cb",
  //         label_th: "Eazy Themes",
  //         label_en: "#",
  //         mode_link: false,
  //         href: {
  //           url: "",
  //           open_new_tab: true,
  //         },
  //         detail: "",
  //         icon: "",
  //         is_active: true,
  //         sub_menu: [],
  //       },
  //       {
  //         id: "64f189aa7ec1102e284936cc",
  //         label_th: "Eazy Plugins",
  //         label_en: "#",
  //         mode_link: false,
  //         href: {
  //           url: "",
  //           open_new_tab: true,
  //         },
  //         detail: "",
  //         icon: "",
  //         is_active: true,
  //         sub_menu: [],
  //       },
  //       {
  //         id: "64f189bb0325aac81eb8fd65",
  //         label_th: "Google Analytics",
  //         label_en: "#",
  //         mode_link: false,
  //         href: {
  //           url: "",
  //           open_new_tab: true,
  //         },
  //         detail: "",
  //         icon: "",
  //         is_active: true,
  //         sub_menu: [],
  //       },
  //     ],
  //   },
  //   {
  //     id: "647821567e5feb3712cae988",
  //     label_th: "ขั้นตอนการทำงาน",
  //     label_en: "#",
  //     mode_link: false,
  //     href: {
  //       url: "",
  //       open_new_tab: true,
  //     },
  //     detail: "",
  //     icon: "",
  //     font: {
  //       color: "#000000",
  //       degree: "",
  //       background_color_1: "#ffffff",
  //       background_color_2: "#ffffff",
  //       border_color: "#ffffff",
  //       transparent_active: true,
  //       border_active: false,
  //       sub_color: "#212851",
  //       sub_background_color: "#85bac6",
  //       sub_border_color: "#ffffff",
  //       sub_transparent_active: true,
  //       sub_border_active: false,
  //       sub_in_sub_color: "#FFFFFF",
  //       sub_in_sub_background_color: "#85bac6",
  //       sub_in_sub_border_color: "#ffffff",
  //       sub_in_sub_transparent_active: false,
  //       sub_in_sub_border_active: false,
  //     },
  //     position: "HEADER",
  //     is_active: true,
  //     sub_menu: [
  //       {
  //         id: "64df43824a3546787c4a0cb6",
  //         label_th: "ติดต่อเรา",
  //         label_en: "#",
  //         mode_link: true,
  //         href: {
  //           url: "https://www.google.com/",
  //           open_new_tab: true,
  //         },
  //         detail: "<p>/newdetail/64b8c5cf97538f91837aaac2</p>",
  //         icon: "",
  //         is_active: true,
  //         sub_menu: [],
  //       },
  //       {
  //         id: "64df43aae88fd6e6144c566f",
  //         label_th: " ร่วมเป็นพันธมิตร",
  //         label_en: "#",
  //         mode_link: true,
  //         href: {
  //           url: "http://localhost:6900/newdetail/64b8c5cf97538f91837aaac2",
  //           open_new_tab: true,
  //         },
  //         detail: "",
  //         icon: "",
  //         is_active: true,
  //         sub_menu: [],
  //       },
  //       {
  //         id: "64df43c1e88fd6e6144c5670",
  //         label_th: "สมัครงาน",
  //         label_en: " #",
  //         mode_link: false,
  //         href: {
  //           url: "",
  //           open_new_tab: true,
  //         },
  //         detail: "<p>newdetail/64b8c5cf97538f91837aaac2</p>",
  //         icon: "",
  //         is_active: false,
  //         sub_menu: [],
  //       },
  //     ],
  //   },
  //   {
  //     id: "64df22336ae17dab2f2d940f",
  //     label_th: "สมัครงาน",
  //     label_en: "#",
  //     mode_link: false,
  //     href: {
  //       url: "",
  //       open_new_tab: true,
  //     },
  //     detail:
  //       "<p><strong>Eazy</strong> คือโปรแกรมสำเร็จรูปที่ใช้ในการจัดการเนื้อหาหรือข้อมูลบนเว็บไซต์ (Content Management System) เป้าหมายหลักคือทำให้ผู้ใช้ที่ไม่มีความเชี่ยวชาญด้านเทคนิคสามารถสร้างเนื้อหาใหม่, แก้ไขเนื้อหาเดิม หรือจัดการข้อมูลต่างๆ บนเว็บไซต์ได้โดยง่ายและมีความยืดหยุ่นมากขึ้น โดยไม่จำเป็นต้องมีความรู้พิเศษในการเขียนโค้ดหรือการโปรแกรมมิ่งเป็นพิเศษเลย ฟีเจอร์โดดเด่นของ Eazy ได้แก่ ใช้งานง่าย รองรับการทำSEO สร้างTemplateด้วยตนเอง ความยืดหยุ่น บริการMarketplace บริการหลังการขาย ความปลอดภัยสูง</p>",
  //     icon: "",
  //     font: {
  //       color: "#000000",
  //       degree: "",
  //       background_color_1: "#518992",
  //       background_color_2: "#518992",
  //       border_color: "#DDDDDD",
  //       transparent_active: true,
  //       border_active: false,
  //       sub_color: "#ffffff",
  //       sub_background_color: "#80C8EE",
  //       sub_border_color: "#DDDDDD",
  //       sub_transparent_active: false,
  //       sub_border_active: false,
  //       sub_in_sub_color: "#FFFFFF",
  //       sub_in_sub_background_color: "#80C8EE",
  //       sub_in_sub_border_color: "#DDDDDD",
  //       sub_in_sub_transparent_active: false,
  //       sub_in_sub_border_active: true,
  //     },
  //     position: "HEADER",
  //     is_active: true,
  //     sub_menu: [],
  //   },
  //   {
  //     id: "64f198d47ec1102e284936cd",
  //     label_th: "ติดต่อเรา",
  //     label_en: "#",
  //     mode_link: false,
  //     href: {
  //       url: "",
  //       open_new_tab: true,
  //     },
  //     detail: '<p style="text-align: left;">Text editor detail</p>',
  //     icon: "",
  //     font: {
  //       color: "#000000",
  //       degree: "",
  //       background_color_1: "#80C8EE",
  //       background_color_2: "#80C8EE",
  //       border_color: "#DDDDDD",
  //       transparent_active: true,
  //       border_active: false,
  //       sub_color: "#212851",
  //       sub_background_color: "#80C8EE",
  //       sub_border_color: "#DDDDDD",
  //       sub_transparent_active: true,
  //       sub_border_active: false,
  //       sub_in_sub_color: "#FFFFFF",
  //       sub_in_sub_background_color: "#80C8EE",
  //       sub_in_sub_border_color: "#DDDDDD",
  //       sub_in_sub_transparent_active: false,
  //       sub_in_sub_border_active: false,
  //     },
  //     position: "HEADER",
  //     is_active: true,
  //     sub_menu: [],
  //   },
  //   {
  //     id: "64d7cd077d07d4282b9757f2",
  //     label_th: "ที่อยู่",
  //     label_en: "#",
  //     mode_link: false,
  //     href: {
  //       url: "",
  //       open_new_tab: true,
  //     },
  //     detail: "",
  //     icon: "",
  //     font: {
  //       color: "#ffffff",
  //       degree: "",
  //       background_color_1: "#ffffff",
  //       background_color_2: "#ffffff",
  //       border_color: "#DDDDDD",
  //       transparent_active: true,
  //       border_active: false,
  //       sub_color: "#ffffff",
  //       sub_background_color: "#c4c4c4",
  //       sub_border_color: "#DDDDDD",
  //       sub_transparent_active: true,
  //       sub_border_active: false,
  //       sub_in_sub_color: "#FFFFFF",
  //       sub_in_sub_background_color: "#80C8EE",
  //       sub_in_sub_border_color: "#DDDDDD",
  //       sub_in_sub_transparent_active: false,
  //       sub_in_sub_border_active: false,
  //     },
  //     position: "FOOTER",
  //     is_active: true,
  //     sub_menu: [
  //       {
  //         id: "64d7d1777d07d4282b9757f4",
  //         label_th: "ดูแผนที่",
  //         label_en: "#",
  //         mode_link: false,
  //         href: {
  //           url: "",
  //           open_new_tab: false,
  //         },
  //         detail: "<p>'khcvghlj;'l/;lk;jkkkj;hjh.jn,</p>",
  //         icon: "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/map.png",
  //         alt: "map-icon",
  //         is_active: true,
  //         sub_menu: [],
  //       },
  //       {
  //         id: "64d7d1777d07d4282b9757f4",
  //         label_th: "Maximum SOFT CO., LTD.",
  //         label_en: "#",
  //         mode_link: false,
  //         href: {
  //           url: "",
  //           open_new_tab: false,
  //         },
  //         detail: "<p>'khcvghlj;'l/;lk;jkkkj;hjh.jn,</p>",
  //         icon: "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/facebook-icon.png",
  //         alt: "facebook-icon",
  //         is_active: true,
  //         sub_menu: [],
  //       },
  //       {
  //         id: "64d7d1777d07d4282b9757f4",
  //         label_th: "02-118-2764",
  //         label_en: "#",
  //         mode_link: false,
  //         href: {
  //           url: "",
  //           open_new_tab: false,
  //         },
  //         detail: "<p>'khcvghlj;'l/;lk;jkkkj;hjh.jn,</p>",
  //         icon: "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/tel.png",
  //         alt: "telophone-icon",
  //         is_active: true,
  //         sub_menu: [],
  //       },
  //       {
  //         id: "64d7d1777d07d4282b9757f4",
  //         label_th: "Line",
  //         label_en: "#",
  //         mode_link: false,
  //         href: {
  //           url: "",
  //           open_new_tab: false,
  //         },
  //         detail: "<p>'khcvghlj;'l/;lk;jkkkj;hjh.jn,</p>",
  //         icon: "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/Line-icon.png",
  //         alt: "line-icon",
  //         is_active: true,
  //         sub_menu: [],
  //       },
  //       {
  //         id: "64d7d1777d07d4282b9757f4",
  //         label_th: "sale@maximumsoft.co.th",
  //         label_en: "#",
  //         mode_link: false,
  //         href: {
  //           url: "",
  //           open_new_tab: false,
  //         },
  //         detail: "<p>'khcvghlj;'l/;lk;jkkkj;hjh.jn,</p>",
  //         icon: "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/mail.png",
  //         alt: "mail-icon",
  //         is_active: true,
  //         sub_menu: [],
  //       },
  //     ],
  //   },
  //   {
  //     id: "64d7cc99a3a789040ce17b18",
  //     label_th: "บริการ",
  //     label_en: "#",
  //     mode_link: true,
  //     href: {
  //       url: "https://eazy-cms-demo.web.app/",
  //       open_new_tab: false,
  //     },
  //     detail: "",
  //     icon: "",
  //     font: {
  //       color: "#FFFFFF",
  //       degree: "",
  //       background_color_1: "#c4c4c4",
  //       background_color_2: "#c4c4c4",
  //       border_color: "#DDDDDD",
  //       transparent_active: false,
  //       border_active: false,
  //       sub_color: "#ffffff",
  //       sub_background_color: "#c4c4c4",
  //       sub_border_color: "#DDDDDD",
  //       sub_transparent_active: false,
  //       sub_border_active: false,
  //       sub_in_sub_color: "#FFFFFF",
  //       sub_in_sub_background_color: "#80C8EE",
  //       sub_in_sub_border_color: "#DDDDDD",
  //       sub_in_sub_transparent_active: false,
  //       sub_in_sub_border_active: false,
  //     },
  //     position: "FOOTER",
  //     is_active: true,
  //     sub_menu: [
  //       {
  //         id: "64d7d142a3a789040ce17b1c",
  //         label_th: "รับทำเว็บไซต์บริษัท",
  //         label_en: "#",
  //         mode_link: false,
  //         href: {
  //           url: "https://www.youtube.com/",
  //           open_new_tab: true,
  //         },
  //         detail: "<p>zdffbzdbxcvbcxbcxnbnvnvfghdfghdh</p>",
  //         icon: "",
  //         is_active: true,
  //         sub_menu: [],
  //       },
  //       {
  //         id: "64d7d1587d07d4282b9757f3",
  //         label_th: "พัฒนาระบบหลังบ้าน",
  //         label_en: "#",
  //         mode_link: false,
  //         href: {
  //           url: "https://www.youtube.com",
  //           open_new_tab: false,
  //         },
  //         detail: "<p>DDDDDDDDDDD</p>",
  //         icon: "",
  //         is_active: true,
  //         sub_menu: [],
  //       },
  //       {
  //         id: "64d7d1587d07d4282b9757f3",
  //         label_th: "ให้คำปรึกษา",
  //         label_en: "#",
  //         mode_link: false,
  //         href: {
  //           url: "https://www.youtube.com",
  //           open_new_tab: false,
  //         },
  //         detail: "<p>DDDDDDDDDDD</p>",
  //         icon: "",
  //         is_active: true,
  //         sub_menu: [],
  //       },
  //       {
  //         id: "64d7d1587d07d4282b9757f3",
  //         label_th: "ระบบการตลาด",
  //         label_en: "#",
  //         mode_link: false,
  //         href: {
  //           url: "https://www.youtube.com",
  //           open_new_tab: false,
  //         },
  //         detail: "<p>DDDDDDDDDDD</p>",
  //         icon: "",
  //         is_active: true,
  //         sub_menu: [],
  //       },
  //     ],
  //   },
  //   {
  //     id: "64d75943ee2ff38a2fed6bf7",
  //     label_th: "ร่วมงานกับเรา",
  //     label_en: "#",
  //     mode_link: true,
  //     href: {
  //       url: "http://www.youtube.com",
  //       open_new_tab: false,
  //     },
  //     detail: "",
  //     icon: "",
  //     font: {
  //       color: "#ffffff",
  //       degree: "",
  //       background_color_1: "#bebebe",
  //       background_color_2: "#bebebe",
  //       border_color: "#DDDDDD",
  //       transparent_active: false,
  //       border_active: false,
  //       sub_color: "#ffffff",
  //       sub_background_color: "#bebebe",
  //       sub_border_color: "#bebebe",
  //       sub_transparent_active: false,
  //       sub_border_active: false,
  //       sub_in_sub_color: "#FFFFFF",
  //       sub_in_sub_background_color: "#80C8EE",
  //       sub_in_sub_border_color: "#DDDDDD",
  //       sub_in_sub_transparent_active: false,
  //       sub_in_sub_border_active: false,
  //     },
  //     position: "FOOTER",
  //     is_active: true,
  //     sub_menu: [
  //       {
  //         id: "64d7cef2a3a789040ce17b19",
  //         label_th: "สมัครงาน",
  //         label_en: "#",
  //         mode_link: true,
  //         href: {
  //           url: "https://www.youtube.com/",
  //           open_new_tab: true,
  //         },
  //         detail: "",
  //         icon: "",
  //         is_active: true,
  //         sub_menu: [],
  //       },
  //     ],
  //   },
  // ];

  // const footer = {
  //   id: "649018aaa0c5e90169d00091",
  //   degree: "",
  //   background_color_1: "#FFFFFF",
  //   background_color_2: "#FFFFFF",
  //   image_url:
  //     "https://d2nl0wple9d2r0.cloudfront.net/EazyCMS/app_images/fb33cdd1d3fe8bd40196c7ed011b0b13.webp",
  //   footer_detail:
  //     "<p>บริษัท แมกซีมั่ม ซอฟท์ จำกัด</p>\n<p>อาคาร Major Tower Rama9 แขวงหัวหมาก เขตบางกะปิ กรุงเทพฯ 10240</p>",
  //   contact: {
  //     contact_detail:
  //       '<p><span style="color: rgb(35, 111, 161); font-size: 18pt;">มีธุรกิจอยู่แล้วใช่ไหม? ให้เราช่วยดูแลคุณ ปรึกษาฟรี!</span></p>',
  //     href: {
  //       url: "https://eazy-cms-demo.web.app/",
  //       open_new_tab: true,
  //     },
  //     degree: "",
  //     background_color_1: "#e4f5ff",
  //     background_color_2: "#e4f5ff",
  //     text_link: "โทร 02-118-2764",
  //     text_link_color: "#ffffff",
  //     text_link_background_color: "#1e499a",
  //     is_active: true,
  //   },
  //   copyright: "Maximum Soft Co., LTD",
  // };

  let footerMenuData = menu?.filter(
    (el: any) => el.position === "FOOTER" && el.is_active === true
  );
  // const formApi = {
  //   id: "650a6eab3db18aeea185c8c5",
  //   form_list: [
  //     {
  //       id: "650a75f93db18aeea185c8c6",
  //       form_name: "แบบฟอร์มติดต่อ",
  //       email_to: "markeykung009@gmail.com",
  //       email_cc: "",
  //       email_bcc: "peem@hpktechnology.com",
  //       field_list: [
  //         {
  //           form_type: "input-text",
  //           name_attribute: "companyname",
  //           label_attribute: "companyname",
  //           placeholder_attribute: "ชื่อบริษัท",
  //           option: [],
  //           required: true,
  //         },
  //         {
  //           form_type: "input-email",
  //           name_attribute: "email",
  //           label_attribute: "email",
  //           placeholder_attribute: "อีเมล",
  //           option: [],
  //           required: true,
  //         },
  //         {
  //           form_type: "input-text",
  //           name_attribute: "phonenumber",
  //           label_attribute: "phonenumber",
  //           placeholder_attribute: "เบอร์โทรศัพท์",
  //           option: [],
  //           required: true,
  //         },
  //         {
  //           form_type: "input-text",
  //           name_attribute: "interestservice",
  //           label_attribute: "interestservice",
  //           placeholder_attribute: "รูปแบบบริการที่สนใจ",
  //           option: [],
  //           required: true,
  //         },
  //         {
  //           form_type: "textarea",
  //           name_attribute: "moredetails",
  //           label_attribute: "moredetails",
  //           placeholder_attribute: "รายละเอียดเพิ่มเติม",
  //           option: [],
  //           required: true,
  //         },
  //       ],
  //       is_active: false,
  //     },
  //     {
  //       id: "65116161870425116aac510a",
  //       form_name: "2222",
  //       email_to: "test1@gmail.com",
  //       email_cc: "gdfgdfg1@gmail.com",
  //       email_bcc: "",
  //       field_list: [
  //         {
  //           form_type: "input-text",
  //           name_attribute: "az",
  //           label_attribute: "a",
  //           placeholder_attribute: "",
  //           option: [],
  //           required: true,
  //         },
  //         {
  //           form_type: "input-text",
  //           name_attribute: "azz",
  //           label_attribute: "4",
  //           placeholder_attribute: "",
  //           option: [],
  //           required: true,
  //         },
  //       ],
  //       is_active: true,
  //     },
  //   ],
  // };

  const formData = form?.form_list[0];

  return (
    <div style={setBgFooter(footer)}>
      <div className="md:container mx-auto px-4 pb-8">
        <div className="flex sm:flex-row flex-col" data-aos="fade-up">
          <div className="sm:w-2/4 w-full px-[15px]">
            <h2 className="mb-2 text-[#1e499a] sm:text-[1.5rem] text-[1.5rem] lg:text-[2rem] mt-8">
              {footer?.footer_title}
            </h2>

            <div className="mb-2">{footer?.footer_detail? parse(footer?.footer_detail) : <></>}</div>
            <div className="mb-4">
              {footerMenuData?.slice(0, 1).map((main: any, index: number) => (
                <div key={index} className="grid grid-cols-12">
                  {main?.sub_menu.map((submenu: any, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 lg:col-span-5 sm:col-span-12 col-span-12 mt-4"
                    >
                      {submenu?.icon !== "" ? (
                        <span>
                          <img
                            src={submenu?.icon}
                            alt={submenu?.alt}
                            className="w-[20px]"
                          />
                        </span>
                      ) : (
                        <></>
                      )}
                      <Link
                        href={submenu?.href.url}
                        target={submenu?.href.open_new_tab ? "_blank" : ""}
                      >
                        {submenu?.label_th}
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex">
              {footerMenuData?.slice(1, footerMenuData.length)
                .map((main: any, index: number) => (
                  <div key={index} className="w-2/4 ">
                    <h4 className="mb-2 text-[1.5rem]">{main?.label_th}</h4>
                    {main?.sub_menu.map((submenu: any, idx: number) => (
                      <div key={idx} className="flex items-center gap-4 mt-4">
                        {submenu?.icon !== "" ? (
                          <span>
                            <img
                              src={submenu?.icon}
                              alt={submenu?.alt}
                              className="w-[20px]"
                            />
                          </span>
                        ) : (
                          <></>
                        )}
                        <Link
                          href={submenu?.href.url}
                          target={submenu?.href.open_new_tab ? "_blank" : ""}
                        >
                          {submenu?.label_th}
                        </Link>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>
          <div className="sm:w-2/4 w-full px-[15px] ">
            {formData?.is_active ? (
              <h2 className="mb-2 text-[#1d4a9b] sm:text-[2rem] text-[1.5rem] mt-8">
                {formData?.form_name}
              </h2>
            ) : (
              <></>
            )}
            {formData?.is_active ? (
              <form
                className="grid grid-cols-12 gap-4"
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  type="hidden"
                  value={formData?.email_to}
                  {...register("email_to")}
                />
                <input
                  type="hidden"
                  value={formData?.email_cc}
                  {...register("email_cc")}
                />
                <input
                  type="hidden"
                  value={formData?.email_bcc}
                  {...register("email_bcc")}
                />
                <input type="hidden" value="" {...register("message")} />
                {formData?.field_list.map((el: any, index: number) =>
                  el?.form_type === "input-text" ? (
                    <div key={index} className="sm:col-span-6 col-span-12">
                      <TextField
                        id="outlined-basic"
                        InputLabelProps={{ shrink: true }}
                        label={el?.label_attribute}
                        {...register(`${el.name_attribute}`, {
                          required: el?.required,
                        })}
                        variant="outlined"
                        type="text"
                        className=" border-[1px] rounded-[6px] focus:outline-none w-full"
                        placeholder={el?.placeholder_attribute}
                        helperText={
                          errors[el.name_attribute]
                            ? "กรุณากรอก " + el?.label_attribute
                            : false
                        }
                        error={errors[el.name_attribute] ? true : false}
                      />
                      {/* {errors.example && <p>กรุณากรอก {el?.name_attribute}</p>} */}
                    </div>
                  ) : el?.form_type === "textarea" ? (
                    <div key={index} className="col-span-12">
                      <TextField
                        id="outlined-basic"
                        InputLabelProps={{ shrink: true }}
                        multiline
                        rows={4}
                        // variant="filled"
                        label={el?.label_attribute}
                        {...register(`${el.name_attribute}`, {
                          required: el?.required,
                        })}
                        variant="outlined"
                        type="text"
                        className=" border-[1px] rounded-[6px] focus:outline-none w-full"
                        placeholder={el?.placeholder_attribute}
                        helperText={
                          errors[el.name_attribute]
                            ? "กรุณากรอก " + el?.label_attribute
                            : false
                        }
                        error={errors[el.name_attribute] ? true : false}
                      />
                      {/* {errors.example && <p>กรุณากรอก {el?.name_attribute}</p>} */}
                    </div>
                  ) : el?.form_type === "input-number" ? (
                    <div key={index} className="sm:col-span-6 col-span-12">
                      <TextField
                        id="outlined-basic"
                        InputLabelProps={{ shrink: true }}
                        label={el?.label_attribute}
                        {...register(`${el.name_attribute}`, {
                          required: el?.required,
                        })}
                        variant="outlined"
                        type="number"
                        className=" border-[1px] rounded-[6px] focus:outline-none w-full"
                        placeholder={el?.placeholder_attribute}
                        helperText={
                          errors[el.name_attribute]
                            ? "กรุณากรอก " + el?.label_attribute
                            : false
                        }
                        error={errors[el.name_attribute] ? true : false}
                      />
                      {/* {errors.example && <p>กรุณากรอก {el?.name_attribute}</p>} */}
                    </div>
                  ) : el?.form_type === "input-email" ? (
                    <div key={index} className="sm:col-span-6 col-span-12">
                      <TextField
                        id="outlined-basic"
                        InputLabelProps={{ shrink: true }}
                        label={el?.label_attribute}
                        {...register(`${el.name_attribute}`, {
                          required: el?.required,
                        })}
                        variant="outlined"
                        type="email"
                        className=" border-[1px] rounded-[6px] focus:outline-none w-full"
                        placeholder={el?.placeholder_attribute}
                        helperText={
                          errors[el.name_attribute]
                            ? "กรุณากรอก " + el?.label_attribute
                            : false
                        }
                        error={errors[el.name_attribute] ? true : false}
                      />
                      {/* {errors.example && <p>กรุณากรอก {el?.name_attribute}</p>} */}
                    </div>
                  ) : el?.form_type === "input-radio" ? (
                    <>
                      <FormLabel id="demo-radio-buttons-group-label">
                        {el?.name_attribute}
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        {el?.option.map((option: any, idx: number) => (
                          <FormControlLabel
                            key={idx}
                            value={option}
                            control={<Radio />}
                            label={option}
                          />
                        ))}
                      </RadioGroup>
                    </>
                  ) : el?.form_type === "dropdown" ? (
                    <>
                      <InputLabel id="demo-simple-select-label">
                        {el?.name_attribute}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={dropdown}
                        label="Age"
                        onChange={handleChange}
                      >
                        {el?.option.map((option: any, idx: number) => (
                          <MenuItem value={option} key={idx}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </>
                  ) : el?.form_type === "checkbox" ? (
                    <FormGroup>
                      {el?.option.map((option: any, idx: number) => (
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label={option}
                          key={idx}
                        />
                      ))}
                    </FormGroup>
                  ) : el?.form_type === "input-file" ? (
                    <div key={index} className="sm:col-span-6 col-span-12">
                      <TextField
                        id="outlined-basic"
                        InputLabelProps={{ shrink: true }}
                        label={el?.label_attribute}
                        {...register(`${el.name_attribute}`, {
                          required: el?.required,
                        })}
                        variant="outlined"
                        type="flie"
                        className=" border-[1px] rounded-[6px] focus:outline-none w-full"
                        placeholder={el?.placeholder_attribute}
                        helperText={
                          errors[el.name_attribute]
                            ? "กรุณากรอก " + el?.label_attribute
                            : false
                        }
                        error={errors[el.name_attribute] ? true : false}
                      />
                      {/* {errors.example && <p>กรุณากรอก {el?.name_attribute}</p>} */}
                    </div>
                  ) : el?.form_type === "input-date" ? (
                    <div key={index} className="sm:col-span-6 col-span-12">
                      <TextField
                        id="outlined-basic"
                        InputLabelProps={{ shrink: true }}
                        label={el?.label_attribute}
                        {...register(`${el.name_attribute}`, {
                          required: el?.required,
                        })}
                        variant="outlined"
                        type="date"
                        className=" border-[1px] rounded-[6px] focus:outline-none w-full"
                        placeholder={el?.placeholder_attribute}
                        helperText={
                          errors[el.name_attribute]
                            ? "กรุณากรอก " + el?.label_attribute
                            : false
                        }
                        error={errors[el.name_attribute] ? true : false}
                      />
                      {/* {errors.example && <p>กรุณากรอก {el?.name_attribute}</p>} */}
                    </div>
                  ) : el?.form_type === "input-time" ? (
                    <div key={index} className="sm:col-span-6 col-span-12">
                      <TextField
                        id="outlined-basic"
                        InputLabelProps={{ shrink: true }}
                        label={el?.label_attribute}
                        {...register(`${el.name_attribute}`, {
                          required: el?.required,
                        })}
                        variant="outlined"
                        type="time"
                        className=" border-[1px] rounded-[6px] focus:outline-none w-full"
                        placeholder={el?.placeholder_attribute}
                        helperText={
                          errors[el.name_attribute]
                            ? "กรุณากรอก " + el?.label_attribute
                            : false
                        }
                        error={errors[el.name_attribute] ? true : false}
                      />
                      {/* {errors.example && <p>กรุณากรอก {el?.name_attribute}</p>} */}
                    </div>
                  ) : (
                    <></>
                  )
                )}
        
                  <button
                    className="my-[10px] py-2 px-12 bg-gradient-to-r from-[#1e499a] to-[#1f90cf] text-white sm:col-span-7 col-span-12 lg:col-span-4 rounded-[20px]"
                    style={setFormButtonSubmit(formData)}
                  >
                    {formData?.button_submit.text_button}
                    {/* ส่งแบบฟอร์ม */}
                  </button>
                  
                 {formData?.button_reset.is_active? <button
                    className="my-[10px] py-2 px-12 bg-gradient-to-r from-[#1e499a] to-[#1f90cf] text-white sm:col-span-7 col-span-12 lg:col-span-4 rounded-[20px]"
                    style={setFormButtonReset(formData)}
                    onClick={onReset}
                  >
                    {formData?.button_reset.text_button}
                    {/* ส่งแบบฟอร์ม */}
                  </button> : <></>}
                  
              </form>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
