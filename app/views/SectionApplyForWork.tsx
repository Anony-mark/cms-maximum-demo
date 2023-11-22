"use client";

import React, { useState } from "react";
import { SetFontColor, borderTypeColor } from "../dynamicCss/dynamicCssAboutUs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import parse from "html-react-parser";
import {
  setBgApplyForWork,
  setFontDetailAppyForWork,
  setFontSubTitleAppyForWork,
} from "../dynamicCss/dynamicCssApplyForWork";
import BasicModal from "../components/ModalApplyWork";
import { setButton } from "../dynamicCss/dynamicButton";
interface Props {
  content: any;
  form: any;
}

const SectionApplyForWork: React.FC<Props> = ({content,form}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleClose = () => setModalOpen(false);
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
  //         background_color_2: "#ffffff",
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
  //       content_type_name: "เราทำอะไรได้บ้าง?",
  //       mode_show_content: "mode-1",
  //       content_show_column: "2",
  //       content_show_limit: "6",
  //       show_content_type_name: false,
  //       show_content_detail_shadow: false,
  //       color_content_type: {
  //         degree: "",
  //         text_color: "#1d4a9b",
  //         border_color: "#5ebff5",
  //         background_color_1: "#F8F8F8",
  //         background_color_2: "#F8F8F8",
  //         border: false,
  //       },
  //       color_content_detail: {
  //         text_color: "#0693e3",
  //         border_color: "#ffffff",
  //         background_color: "#FFFFFF",
  //         border: false,
  //         transparent: false,
  //         border_radius: 20,
  //       },
  //       is_active: true,
  //       position: 0,
  //       section: "section2",
  //     },
  //     content_list: [
  //       {
  //         id: "64c00260ea937493b809ca5b",
  //         content_name: "พัฒนาเว็บไซต์",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T17:12:00.019Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/s1.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;พัฒนา Web Application ด้วยเทคโนโลยีที่ทันสมัยและเนรมิตได้ตามที่ใจคุณปรารถนาด้วยราคาย่อมเยา</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e92dc66fe4d805952aee0",
  //         is_main: true,
  //         position: 5,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c002aaea937493b809ca5d",
  //         content_name: "พัฒนาระบบหลังบ้าน",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T17:13:14.388Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/s2.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>พัฒนาระบบหลังบ้าน ใช้งานง่ายและสถิติ ที่แม่นยำ ครบครัน</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e92dc66fe4d805952aee0",
  //         is_main: true,
  //         position: 8,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c002aaea937493b809ca5d",
  //         content_name: "ให้คำปรึกษา",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T17:13:14.388Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/s3.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>ให้คำปรึกษาทางด้านซอฟต์แวร์และตอบคำถามปัญหาต่างๆเกี่ยวกับการใช้งานของ Application</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e92dc66fe4d805952aee0",
  //         is_main: true,
  //         position: 8,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c002aaea937493b809ca5d",
  //         content_name: "ระบบการตลาด",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T17:13:14.388Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/s4.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>ระบบการตลาดที่จะทำให้คุณ เป็นที่รู้จักและเพิ่มยอดขาย อย่างมีประสิทธิภาพ</p>",
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
  //       content_type_name: "ทำไมต้อง Maximum Soft?",
  //       mode_show_content: "mode-1",
  //       content_show_column: "5",
  //       content_show_limit: "5",
  //       show_content_type_name: true,
  //       show_content_detail_shadow: true,
  //       color_content_type: {
  //         degree: "",
  //         text_color: "#1d4a9b",
  //         border_color: "#5ebff5",
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
  //       section: "section3",
  //     },
  //     content_list: [
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Content 4.1",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/Content-1.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //     ],
  //   },
  //   {
  //     content_type: {
  //       id: "649e93a669c2742e5a258956",
  //       content_type_name: "Tech Stack",
  //       mode_show_content: "mode-1",
  //       content_show_column: "5",
  //       content_show_limit: "5",
  //       show_content_type_name: true,
  //       show_content_detail_shadow: true,
  //       color_content_type: {
  //         degree: "",
  //         text_color: "#1d4a9b",
  //         border_color: "#5ebff5",
  //         background_color_1: "#DEF7FC",
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
  //         content_name: "aws",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/aws.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "docker",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/docker.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "css",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/css.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "golang",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/golang.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "kubernetes",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/kubernetes.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "mongodb",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/mongo%20db.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "aws",
  //         create_by: "apache",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/apache.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "nginx",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/nginx.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "php",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/php.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "googlecloud",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/googlecloud.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "node",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/node.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "nuxtjs",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/nuxtjs.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "rabbitmq",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/rabbit.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "redis",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/redis.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "vuejs",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/vuejs.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "wordpress",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/wp.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "sql",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/sql.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "python",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/Python-Logo-PNG-Image.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "flutter",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/flutter.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "helm",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/helm.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "javascript",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/js.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "scss",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/scss.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "typescript",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/ts.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "dart",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/dart.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "lindc",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/line%20dc.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "github",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/github.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "react",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/react.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "bootstrap",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/bootstrap.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;Maximumsoft เรามีความเชี่ยวชาญในการให้บริการพัฒนาซอฟต์แวร์ และแอปพลิเคชันแบบครบวงจร โดยที่เราใช้เครื่องมือ เทคนิคและเทคโนโลยีที่ทันสมัย และมีความเหมาะสมที่สุดในทุกโปรเจกต์เพื่อสร้างความประทับใจสูงสุดให้กับลูกค้าของเรา ด้วยซอฟต์แวร์คุณภาพสูง ที่สามารถใช้งานได้จริง ตอบโจทย์ทุกแง่มุมของความต้องการ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //     ],
  //   },
  //   {
  //     content_type: {
  //       id: "649e93a669c2742e5a258932",
  //       content_type_name: "ทีมของเรา",
  //       mode_show_content: "mode-1",
  //       content_show_column: "5",
  //       content_show_limit: "5",
  //       show_content_type_name: true,
  //       show_content_detail_shadow: true,
  //       color_content_type: {
  //         degree: "",
  //         text_color: "#1d4a9b",
  //         border_color: "#5ebff5",
  //         background_color_1: "#ffffff",
  //         background_color_2: "#ffffff",
  //         border: true,
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
  //       section: "section5",
  //     },
  //     content_list: [
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Programmer Director",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/profile_1.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;ที่เข้าใจในความต้องการของลูกค้า และสามารถออกแบบเป็น Solution ต่างๆ ตามความต้องการได้</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Software Developer",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/profile_2.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;ที่เชี่ยวชาญในการเขียนโปรแกรมและ เว็บไซต์ มีประสบการณ์ในการทำงาน มากกว่า 5 ปี</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Software Quality Assurance",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/profile_3.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;ที่คอยดูแลและควบคุมคุณภาพของงาน ให้อยู่ในมาตรฐานสูงสุด</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "UX/UI Designer",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/profile_4.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;ที่อยู่ในวงการงานออกแบบเว็บไซต์และโปรแกรมมานาน รวมถึงเข้าใจในเรื่องของ User Experience เป็นอย่างดี</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Account Executive",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/profile_5.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;เรามีฝ่ายประสานงานที่มีความเป็นมืออาชีพในการติดต่อสื่อสารงานระหว่างทีมเพื่อให้งานนั้นเกิดความราบรื่นไม่ติดขัดซึ่งจะทำให้ได้งานที่มีคุณภาพมากที่สุด</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Customer Service",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/profile_6.png",
  //         video_url: "",
  //         content_detail:
  //           "<p>&nbsp;เรามีพนักงานที่บริการให้ความช่วยเหลือในการถาม-ตอบปัญหาต่างๆที่เกิดขึ้นกับการใช้งาน Software ด้วยความใส่ใจ</p>",
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //     ],
  //   },
  //   {
  //     content_type: {
  //       id: "649e93a669c2742e5a258a56",
  //       content_type_name: "ขั้นตอนการทำงาน",
  //       mode_show_content: "mode-1",
  //       content_show_column: "5",
  //       content_show_limit: "5",
  //       show_content_type_name: true,
  //       show_content_detail_shadow: true,
  //       color_content_type: {
  //         degree: "",
  //         text_color: "#1d4a9b",
  //         border_color: "#5ebff5",
  //         background_color_1: "#DEF7FC",
  //         background_color_2: "#ffffff",
  //         border: true,
  //       },
  //       color_content_detail: {
  //         text_color: "#1f90cf",
  //         border_color: "#060606",
  //         background_color: "#84b2fa",
  //         border: false,
  //         transparent: true,
  //         border_radius: 20,
  //       },
  //       is_active: true,
  //       position: 0,
  //       section: "section6",
  //     },
  //     content_list: [
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Empathise",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/step.png",
  //         video_url: "",
  //         content_detail:
  //           '<p style="text-align: center;"><strong>เก็บข้อมูล</strong></p>\n<p style="text-align: center;">เก็บรวบรวมความต้องการต่างๆ</p>\n<p style="text-align: center;">ของระบบโดยละเอียด(Get</p>\n<p style="text-align: center;">&nbsp;Requirement)</p>',
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Define",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/step.png",
  //         video_url: "",
  //         content_detail:
  //           '<p style="text-align: center;"><strong>วิเคราะห์</strong></p>\n<p style="text-align: center;">วิเคราะห์และออกแบบ Solution<br>เพื่อให้ตอบโจทย์มากที่สุด</p>',
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Design",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/step.png",
  //         video_url: "",
  //         content_detail:
  //           '<p style="text-align: center;"><strong>ออกแบบหน้าเว็บไซต์</strong></p>\n<p style="text-align: center;">ออกแบบกราฟิคหน้าเว็บไซต์หรือ<br>โปรแกรม</p>',
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Develop",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/step.png",
  //         video_url: "",
  //         content_detail:
  //           '<p style="text-align: center;"><strong>พัฒนาเว็บไซต์</strong></p>\n<p style="text-align: center;">พัฒนาเว็บไซต์หรือโปรแกรม</p>\n<p>&nbsp;</p>',
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Testing",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/step.png",
  //         video_url: "",
  //         content_detail:
  //           '<p style="text-align: center;"><strong>ทดสอบระบบ</strong></p>\n<p style="text-align: center;">ทดสอบระบบ<br>Quality Assurance<br>เพื่อการันตีคุณภาพของงาน</p>',
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Deliver",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/step.png",
  //         video_url: "",
  //         content_detail:
  //           '<p style="text-align: center;"><strong>ส่งมอบงานให้กับลูกค้า</strong></p>\n<p style="text-align: center;">ส่งมอบงานและบริการดูแลหลัง</p>\n<p style="text-align: center;">การขาย</p>',
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //     ],
  //   },
  //   {
  //     content_type: {
  //       id: "649e93a669c2742e5a258d39",
  //       content_type_name: "สมัครงาน",
  //       mode_show_content: "mode-1",
  //       content_show_column: "5",
  //       content_show_limit: "5",
  //       show_content_type_name: true,
  //       show_content_detail_shadow: true,
  //       color_content_type: {
  //         degree: "",
  //         text_color: "#1d4a9b",
  //         border_color: "#5ebff5",
  //         background_color_1: "#ffffff",
  //         background_color_2: "#ffffff",
  //         border: true,
  //       },
  //       color_content_detail: {
  //         text_color: "#1e499a",
  //         border_color: "#060606",
  //         background_color: "#84b2fa",
  //         border: false,
  //         transparent: true,
  //         border_radius: 20,
  //       },
  //       is_active: true,
  //       position: 0,
  //       section: "section7",
  //     },
  //     content_list: [
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Front - End Developer",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/step.png",
  //         video_url: "",
  //         content_detail:
  //           '<p>Full Time | Entry level</p>\n<h3><span style="color: rgb(53, 152, 219);">คุณสมบัติ</span></h3>\n<p>&ndash; สกิลขั้นต่ำ&nbsp;<span class="text-qual" style="color: rgb(35, 111, 161);">HTML, CSS, JavaScript, Node JS<br>Vue, Angular, React, Git</span></p>\n<p>&ndash; ประสบการณ์&nbsp;<span class="text-qual" style="color: rgb(35, 111, 161);">1 ปีขึ้นไป</span></p>\n<p>&ndash; การศึกษาระดับปริญญาตรีขึ้นไป</p>\n<p>&ndash; สามารถออกแบบ พัฒนา Web Application ตามที่ได้รับมอบหมาย</p>\n<p>&ndash; มีความรู้และเข้าใจ HTML, CSS, JavaScript, Node JS, Git Docker</p>\n<p>&ndash; สามารถใช้ JavaScript Framework Vue Angular React ได้เป็นอย่างดี</p>\n<p>&ndash; มีความรับผิดชอบต่องานที่ได้รับและสามารถแก้ไขงานนอกเวลางานได้</p>\n<p>&ndash; ทํางานร่วมกับ UX/UI และ Backend Developer</p>\n<p>&ndash; มีผลงานที่เคยทํา จะพิจารณาเป็นพิเศษ</p>',
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Back - End Developer",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/step.png",
  //         video_url: "",
  //         content_detail:
  //           '<p>Full Time | Middle level</p>\n<h3><span style="color: rgb(53, 152, 219);">คุณสมบัติ</span></h3>\n<p>&ndash; สกิลขั้นต่ำ&nbsp;<span class="text-qual" style="color: rgb(35, 111, 161);">Node JS, Docker, Github, MongoDB</span>&nbsp;ได้<span style="background-color: rgb(255, 255, 255);">&nbsp;</span><span class="text-qual"><span style="background-color: rgb(255, 255, 255); color: rgb(35, 111, 161);">Golang</span>&nbsp;</span>จะพิจารณาเป็นพิเศษ<br>ประสบการณ์&nbsp;<span class="text-qual" style="color: rgb(35, 111, 161);">1 ปีขึ้นไป</span></p>\n<p>&ndash; การศึกษาระดับปริญญาตรีขึ้นไป</p>\n<p>&ndash; มีความรู้ความเข้าใจในหลักการของ REST API</p>\n<p>&ndash; มีประสบการณ์ในการเชื่อมต่อฐานข้อมูลแบบ MySQL หรือ NoSQL</p>\n<p>&ndash; สามารถใช้งาน Git ได้อย่างมีประสิทธิภาพ</p>\n<p>&ndash; เข้าใจหลักการทํางานและคําสั่งพื้นฐานของ Docker</p>\n<p>&ndash; สามารถใช้งาน Operation NGINX, Ubuntu ได้อย่างชํานาญ</p>\n<p>&ndash; มีผลงานที่เคยทํา จะพิจารณาเป็นพิเศษ</p>',
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "UX/UI Designer",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/step.png",
  //         video_url: "",
  //         content_detail:
  //           '<p>Full Time | Entry &ndash; Senior Level</p>\n<h3><span style="color: rgb(53, 152, 219);">คุณสมบัติ</span></h3>\n<p>&ndash; จบใหม่หรือมีประสบการณ์&nbsp;<span class="text-qual" style="color: rgb(35, 111, 161);">1 ปีขึ้นไป</span></p>\n<p>&ndash; ด้านการทํางาน UX/UI Designer, Illustrator, Figma and Photoshop&nbsp;<span class="text-qual" style="color: rgb(35, 111, 161);">1 ปีขึ้นไป</span></p>\n<p>&ndash; มีความรู้ความเข้าใจเกี่ยวกับ Web Design, Web Responsive</p>\n<p>&ndash; ออกแบบ UX / UI สําหรับ Web และ Mobile Application ให้ตรงตามความต้องการ</p>\n<p>&ndash; มีความรู้ความเข้าใจ Web Technology และ Responsive Design</p>\n<p>&ndash; มีความสามารถในการจัดลําดับความสําคัญของงาน</p>\n<p>&ndash; มีความรู้ความเข้าใจเรื่องการจัด Layout การใช้แสง สีต่างๆได้ดี</p>\n<p>&ndash; สามารถสื่อสารได้อย่างคล่องแคล่วแปลงภาษาเป็นภาพได้คิดเป็นภาพได้แปลงภาพเป็นภาษาคนได้</p>',
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Full Stack Developer",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/step.png",
  //         video_url: "",
  //         content_detail:
  //           '<p>Full Time | Entry &ndash; Middle level</p>\n<h3><span style="color: rgb(53, 152, 219);">คุณสมบัติ</span></h3>\n<p>&ndash; มีทัศนคติที่ดีในการทํางาน สามารถทํางานเป็นทีมและทํางาน ภายใต้ภาวะกดดันได้</p>\n<p>&ndash; มีความรู้ความเข้าใจในหลักการของ RESTful API ได้เป็นอย่างดี</p>\n<p>&ndash; เก่งอัลกอริทึมและมีพื้นฐาน Data Structure และ ออกแบบ ปรับปรุงขยายฟีเจอร์ได้อย่างมีประสิทธิภาพ</p>\n<p>&ndash; พัฒนาตัวเองและศึกษาเทคโนโลยีใหม่ๆ อยู่เสมอ</p>\n<p>&ndash; เข้าใจหลักการทํางานและคําสั่งพื้นฐาน Docker หรือ Kubernetes</p>\n<p>&ndash; พัฒนาปรับปรุงประสิทธิภาพของระบบแอพพลิเคชั่น และฐานข้อมูลให้สามารถใช้งานได้อย่างมีประสิทธิภาพ</p>\n<p>&ndash; ภาษาที่ใช้ในการพัฒนา Golang, Node JS, Vue JS, MySQL, MongoDB</p>',
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Business Analysist",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/step.png",
  //         video_url: "",
  //         content_detail:
  //           '<p>Full Time | Entry &ndash; Middle level</p>\n<h3><span style="color: rgb(53, 152, 219);">คุณสมบัติ</span></h3>\n<p>&ndash; เก็บและรวบรวม Requirement ทําความเข้าใจกับความต้องการ ของผู้ใช้งาน จัดทํารายละเอียดเพื่ออธิบายระบบงาน ออกแบบ วิธีการทํางานที่เป็นประโยชน์ ให้ตอบโจทย์กับลูกค้าและผู้ใช้งานระบบ</p>\n<p>&ndash; ออกแบบ Product จาก Business Requirement, UX, และเทคโนโลยีใหม่ๆ</p>\n<p>&ndash; ติดตามผลลัพธ์จากช่องทาง Online เพื่อรับ Feedback มาปรับปรุงและพัฒนา Product</p>\n<p>&ndash; ทํางานร่วมกับ UX/UI Designer, Programmer, Marketing, Customer Service และอื่นๆ</p>\n<p>&ndash; ติดตาม Schedule งานที่ต้องประสานงานกับทุกฝ่ายที่เกี่ยวข้อง</p>\n<p>&ndash; มีความรับผิดชอบ เรียนรู้ได้เร็ว มีไหวพริบ และมีความคิดสร้างสรรค์</p>\n<p>&ndash; มีทักษะการสื่อสารกับผู้อื่น มีมนุษย์สัมพันธ์ที่ดี</p>\n<p>&ndash; จัดระเบียบความคิดได้ดี</p>\n<p>&ndash; ติดต่อประสานงานกับผู้อื่นได้ดี</p>\n<p>&ndash; มีแรงขับเคลื่อนการทํางานได้ด้วยตัวเอง</p>\n<p>&ndash; ถ้ามีประสบการณ์ด้านการออกแบบพัฒนา Software จะพิจารณาเป็นพิเศษ</p>',
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: false,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Graphic Design",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/step.png",
  //         video_url: "",
  //         content_detail:
  //           '<p style="text-align: left;">Full Time | Entry &ndash; Middle level</p>\n<h3 style="text-align: left;"><span style="color: rgb(53, 152, 219);">คุณสมบัติ</span></h3>\n<div class="accordion aos-init aos-animate active" style="text-align: left;" data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-out">\n<div class="accordion-body text-center">\n<div class="btn btn-work-accordion" data-toggle="modal" data-target="#exampleModal">\n<p style="text-align: left;">&ndash; จบใหม่หรือมีประสบการณ์&nbsp;<span class="text-qual" style="color: rgb(35, 111, 161);">1 ปีขึ้นไป</span></p>\n<p style="text-align: left;">&ndash; ต้องมีความเชี่ยวชาญในโปรแกรม Photoshop, Illustrator Premiere Pro, After Effect</p>\n<p style="text-align: left;">&ndash; ท่าสื่อโฆษณา ออกแบบกราฟฟิก ให้เป็นไปตามที่ได้รับมอบหมาย (หากสามารถ create character ได้จะรับพิจารณาเป็นพิเศษ)</p>\n<p style="text-align: left;">&ndash; สามารถตัดต่อวีดิโอได้</p>\n<p style="text-align: left;">&ndash; สามารถทํา Motion Graphic ได้</p>\n<p style="text-align: left;">&ndash; สามารถทํางานเป็นทีมได้ มีทัศนคติบวก</p>\n<p style="text-align: left;">&ndash; มีความสามารถในการจัดล่าดับความสําคัญของงาน</p>\n<p style="text-align: left;">&ndash; สามารถรับแรงกดดันได้ดี</p>\n</div>\n</div>\n</div>\n<div class="accordion aos-init aos-animate" data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-out">\n<div class="accordion-header">\n<div class="title-accodion-header" style="text-align: left;">&nbsp;</div>\n</div>\n</div>',
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: false,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Content Creator",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/step.png",
  //         video_url: "",
  //         content_detail:
  //           '<p style="text-align: left;">Full Time | Entry &ndash; Middle level</p>\n<h3 style="text-align: left;"><span style="color: rgb(53, 152, 219);">คุณสมบัติ</span></h3>\n<div class="accordion aos-init aos-animate active" style="text-align: left;" data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-out">\n<div class="accordion-body text-center">\n<div class="btn btn-work-accordion" data-toggle="modal" data-target="#exampleModal">&nbsp;</div>\n</div>\n</div>\n<div class="accordion aos-init aos-animate" data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-out">\n<div class="accordion-header">\n<div class="title-accodion-header" style="text-align: left;">\n<p>&ndash; จบการศึกษาปริญญาตรี (ยินดีรับนักศึกษาจบใหม่)</p>\n<p>&ndash; มีความคิดสร้างสรรค์ ติดตามเทรนด์ใหม่ๆอยู่เสมอ</p>\n<p>&ndash; ทํางานตรงต่อเวลา ละเอียด รอบคอบ</p>\n<p>&ndash; ทํางานเป็นทีมได้ดี</p>\n<p>&ndash; คิด content เพื่อสร้างยอด engagement และตอบโจทย์ ความต้องการของกลุ่มเป้าหมาย เพื่อให้ไปถึงตามเป้าที่ตั้งไว้</p>\n<p>&ndash; สามารถวิเคราะห์, เข้าใจกลุ่มเป้าหมาย และขยายฐานกลุ่มเป้าหมาย</p>\n<p>&ndash; มีความเข้าใจเกี่ยวกับบริการของบริษัทเป็นอย่างดี เพื่อสร้าง Content ให้ตรงจุดประสงค์</p>\n<p>&ndash; ดูแลช่องทาง social media ที่ได้รับมอบหมาย ทั้งคุณภาพ ของเนื้อหา ความถูกต้อง และความน่าสนใจ</p>\n<p>&ndash; จัดทํา Content Planning ในแต่ละเดือน อย่างต่อเนื่องและตรงเวลา</p>\n<p>&ndash; ประสานงานกับฝ่าย Graphic Designer เพื่อออกแบบ Artwork, Ads ให้ตรงตามที่วาง Content ไว้</p>\n<p>&ndash; วิเคราะห์และสร้างสรรค์ Content เป็น Theme ต่างๆ หรือใน รูปแบบใหม่ๆ อยู่เสมอ</p>\n<p>&ndash; ติดตาม อัปเดตเทรนด์ต่างๆ ให้ทันสถานการณ์ แล้วพลิกมาเป็น<br>ไอเดีย Content ได้</p>\n<p>&ndash; มีประสบการณ์ จะพิจารณาเป็นพิเศษ</p>\n</div>\n</div>\n</div>',
  //         is_active: false,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Software Tester (QA)",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/step.png",
  //         video_url: "",
  //         content_detail:
  //           '<p style="text-align: left;">Full Time | Entry &ndash; Middle level</p>\n<h3 style="text-align: left;"><span style="color: rgb(53, 152, 219);">คุณสมบัติ</span></h3>\n<div class="accordion aos-init aos-animate active" style="text-align: left;" data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-out">\n<div class="accordion-body text-center">&nbsp;</div>\n</div>\n<div class="accordion aos-init aos-animate" data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-out">\n<div class="accordion-header">\n<div class="title-accodion-header" style="text-align: left;">\n<p>-ตรวจจับข้อบกพร่องและทดสอบระบบงานซอฟต์แวร์s</p>\n<p>&ndash; เขียนกรณีทดสอบ (Test Case)</p>\n<p>&ndash; จัดทำเอกสารตามกระบวนการทำ QA วิเคราะห์ผลลัพธ์แล้วส่งข้อสังเกตไปยังทีมพัฒนา</p>\n<p>&ndash; ประสานงานกับทีมพัฒนา/ลูกค้า เพื่อทำความเข้าใจข้อกำหนดของผลิตภัณฑ์ให้ดีขึ้น หรือในกรณีที่การออกแบบต้องมีการปรับเปลี่ยนใดๆ</p>\n<p>&ndash; มีประสบการณ์การทำงานด้านการทดสอบระบบงาน (Software Quality Assurance (QA)) ไม่น้อยกว่า 1 ปี</p>\n<p>&ndash; มีความรู้ความเข้าใจลักษณะและกระบวนการของการพัฒนาซอฟต์แวร์</p>\n<p>&ndash; หากมีประสบการณ์ด้าน Test automation tool เช่น QTP, Load Runner, QC tool, Selenium จะได้รับการพิจารณาเป็นพิเศษ</p>\n<p>&ndash; จะต้องเป็นผู้ที่ซื่อสัตย์ รักษาความลับข้อมูลของบริษัทและบริษัทลูกค้าได้ดี</p>\n<p>&ndash; สามารถทำงานร่วมกับผู้อื่นได้ดี</p>\n<p><span class="text-qual" style="color: rgb(35, 111, 161);">&ndash; หากมีประสบการณ์ด้าน Test automation tool เช่น QTP, Load Runner, QC tool, Selenium จะได้รับการพิจารณาเป็นพิเศษ</span></p>\n</div>\n</div>\n</div>',
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: false,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Recruiter",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/step.png",
  //         video_url: "",
  //         content_detail:
  //           '<p style="text-align: left;">Full Time | Entry &ndash; Middle level</p>\n<h3 style="text-align: left;"><span style="color: rgb(53, 152, 219);">คุณสมบัติ</span></h3>\n<div class="accordion aos-init aos-animate active" style="text-align: left;" data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-out">&nbsp;</div>\n<div class="accordion aos-init aos-animate" data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-out">\n<div class="accordion-header">\n<div class="title-accodion-header" style="text-align: left;">\n<p>&ndash; วุฒิการศึกษาปริญญาตรีสาขาที่เกี่ยวข้อง</p>\n<p>&ndash; ยินดีพิจารณานักศึกษาจบใหม่</p>\n<p>&ndash; หากมีประสบการณ์ด้าน IT Recruitment/ Outsourcing/ Headhunting 1 ปีขึ้นไป จะได้รับการพิจารณาเป็นพิเศษ</p>\n<p>&ndash; มีทักษะการสื่อสารที่ดีเยี่ยม</p>\n<p>&ndash; มีความกระตือรือร้นและอัพเดตเทรนด์ในด้านแรงงานอยู่เสมอ</p>\n<p>&ndash; มีความชอบและความสนใจในการสรรหาบุคคล มีทัศนคติที่ดีต่อลักษณะงานของตนเอง</p>\n<p>&ndash; สามารถรับแรงกดดันได้ดี และทำงานแข่งขันกับเวลาได้</p>\n<p>&ndash; ดำเนินการสรรหาผู้สมัครที่มีศักยภาพ (โดยเฉพาะที่เกี่ยวข้องกับ Developer, Programmer เป็นต้น) ผ่านช่องทางออนไลน์และออฟไลน์</p>\n<p>&ndash; ดำเนินการทั้งหมดที่เกี่ยวข้องกับกระบวนการสรรหาและว่าจ้างได้ เช่น Selection, Screening, Interview Appointment, Online &amp; in person interview, sign contract ETC.</p>\n<p>&ndash; จัดทำเอกสารที่เกี่ยวข้องกับด้านทรัพยากรบุคคล</p>\n<p>&ndash; วางแผนการสรรหาเพื่อตอบสนองต่อ requirement ที่ได้รับ</p>\n<p>&ndash; จัดทำ Report Recruitment ประจำเดือน</p>\n</div>\n</div>\n</div>',
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: false,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Accounting & Administrative Officer",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/step.png",
  //         video_url: "",
  //         content_detail:
  //           '<p style="text-align: left;">Full Time | Entry &ndash; Middle level</p>\n<h3 style="text-align: left;"><span style="color: rgb(53, 152, 219);">คุณสมบัติ</span></h3>\n<div class="accordion aos-init aos-animate" data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-out">\n<div class="accordion-header">\n<div class="title-accodion-header" style="text-align: left;">\n<p class="text-qual fw-bold"><span style="color: rgb(35, 111, 161);">&ndash; ออกเอกสารเรียกเก็บเงิน และทําสรุปรายได้บริษัทได้ ***</span></p>\n<p>&ndash; จบการศึกษาระดับปริญญาตรีในสาบัญชี</p>\n<p>&ndash; สามารถใช้งานโปรแกรม Microsoft และโปรแกรมพื้นฐานอื่นๆ ได้อย่างคล่องแคล่ว</p>\n<p>&ndash; ตรวจสอบความถูกต้องของเอกสารขายและบันทึกบัญชีรวมถึง<br>เอกสารทางบัญชีอื่นๆของบริษัท</p>\n<p>&ndash; จัดทําใบแจ้งหนี้ ใบเสร็จรับเงิน</p>\n<p>&ndash; ติดตามการชําระเงินของลูกค้าและจัดส่งเอกสารทางบัญชี</p>\n<p>&ndash; บันทึกการจ่ายเงินการรับเงินและธุรกรรมทางการเงินของบริษัท</p>\n<p>&ndash; รวบรวมเอกสารรายรับ-จ่ายส่งให้สํานักงานบัญชี</p>\n<p>&ndash; จัดทํารายงานอื่นๆ ตามที่ได้รับมอบหมาย</p>\n<p>&ndash; มีความระเอียดรอบคอบในการปฎิบัติงานและทํางานร่วมกับผู้อื่น<br>ได้เป็นอย่างดี</p>\n<p>&ndash; มีประสบการณ์การทํางานอย่างน้อย 1 ปี</p>\n<p>&ndash; ยินดีต้อนรับนักศึกษาจบใหม่</p>\n</div>\n</div>\n</div>',
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: false,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Customer Service",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/step.png",
  //         video_url: "",
  //         content_detail:
  //           '<p style="text-align: left;">Full time | Entry level</p>\n<h3 style="text-align: left;"><span style="color: rgb(53, 152, 219);">คุณสมบัติ</span></h3>\n<div class="accordion aos-init aos-animate" data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-out">\n<div class="accordion-header">\n<div class="title-accodion-header" style="text-align: left;">\n<p>&ndash; เพศชาย / หญิง</p>\n<p>&ndash; วุฒิการศึกษาปริญญาตรี หรือเทียบเท่า</p>\n<p>&ndash; ยินดีรับนักศึกษาจบใหม่ หากมีประสบกาณ์การมาก่อนจะพิจารณาเป็นพิเศษ</p>\n<p>&ndash; มีทักษะการสื่อสารที่ดี</p>\n<p>&ndash; มีความซื่อสัตย์</p>\n<p>&ndash; มีความกระตือรือร้นและมีความใฝ่รู้ในการทํางาน</p>\n<p>&ndash; สามารถรับแรงกดดันได้ดี</p>\n<p>&ndash; ดําเนินการแก้ไขปัญหาและการวินิจฉัยหาสาเหตุ เพื่อให้สามารถแก้ไขปัญหาได้อย่าง ถูกต้องและตอบคําถามสําหรับปัญหาที่เกิดขึ้นได้</p>\n<p>&ndash; ประสานงานและช่วยเหลือกรณีเร่งด่วนได้ รวมถึงงานอื่นๆตามที่ได้รับมอบหมาย</p>\n<p>&ndash; สามารถทํางานเป็นกะเวลาได้</p>\n</div>\n</div>\n</div>',
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: false,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //       {
  //         id: "64c00ffff25d77294ad29385",
  //         content_name: "Mobile Application Developer",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/uploads/2023/01/step.png",
  //         video_url: "",
  //         content_detail:
  //           '<p style="text-align: left;">Full Time | Entry &ndash; Middle level</p>\n<h3 style="text-align: left;"><span style="color: rgb(53, 152, 219);">คุณสมบัติ</span></h3>\n<div class="accordion aos-init aos-animate" data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-out">\n<div class="accordion-header">\n<div class="title-accodion-header" style="text-align: left;">\n<p>&ndash; สามารถเรียนรู้ได้ด้วยตนเอง ชอบเรียนรู้ ทดลอง technology และพร้อมเปิดรับสิ่งใหม่อยู่เสมอ</p>\n<p>&ndash; มีทักษะในการวิเคราะห์และแก้ปัญหา และสื่อสารได้ดี</p>\n<p>&ndash; สามารถทำงานร่วมกันเป็นทีมได้</p>\n<p>&nbsp;</p>\n<p>คุณสมบัติเพิ่มเติม</p>\n<p>&ndash; ประสบการณ์มากกว่า 1 ปีในฐานะนักพัฒนามือถือ (iOS &amp; Android) (Android จะพิจารณาเป็นพิเศษ)</p>\n<p>&ndash; มีทักษะการพัฒนา Mobile Application ด้วย&nbsp; C / C++ / C # / Java / Swift / Kotlin (Android),Swift(iOS)</p>\n<p>&ndash; ออกแบบ พัฒนา Mobile Application เชื่อมต่อกับ Backend Application(RESTful-API) ตามที่บริษัทกำหนดได้</p>\n<p>&ndash; สามารถทำการ Deploy หรือ Maintenance Mobile Application บน Apple Store และ Google Play Store ได้</p>\n</div>\n</div>\n</div>',
  //         is_active: true,
  //         ref_content_type_id: "649e93a669c2742e5a258993",
  //         is_main: true,
  //         position: 9,
  //         tags: [],
  //         slugs: [],
  //       },
  //     ],
  //   },
  // ];

  const contentData = content?.find(
    (el: any) => el?.content_type.section === "section7"
  );

  const AccordionStyle = {
    "&:before": {
      backgroundColor: "transparent !important",
    },
  };

  return contentData?.content_type.is_active ? (
    <div style={setBgApplyForWork(contentData)} id="section7">
      <BasicModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        handleClose={handleClose}
        form={form}
      />
      <div className="md:container mx-auto px-4 pb-8">
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
          <h3 className="mb-8">
            {contentData?.content_type.content_type_description}
          </h3>
          {contentData?.content_list
            .filter((el: any) => el?.is_active && el?.is_main === true)
            .map((el: any, index: number) => (
              <div className="w-full" key={index}
              data-aos={contentData?.content_type.animation.effect}
              data-aos-easing={contentData?.content_type.animation.easing}
              data-aos-anchor-placement={
                contentData?.content_type.animation.anchor_placement
              }
              data-aos-offset={
                contentData?.content_type.animation.advance_effect
                  ? contentData?.content_type.animation.offset
                  : ""
              }
              data-aos-delay={
                contentData?.content_type.animation.advance_effect
                  ? contentData?.content_type.animation.delay
                  : ""
              }
              data-aos-duration={
                contentData?.content_type.animation.advance_effect
                  ? contentData?.content_type.animation.duration
                  : ""
              }
              data-aos-mirror={
                contentData?.content_type.animation.advance_effect
                  ? contentData?.content_type.animation.mirror
                  : ""
              }
              data-aos-once={
                contentData?.content_type.animation.advance_effect
                  ? contentData?.content_type.animation.once
                  : ""
              }
              >
              <Accordion
                className="w-full my-2 rounded-2xl shadow-[1px 1px 6px 2px rgba(196,196,196,1)]"
                sx={AccordionStyle}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="flex justify-between items-center w-full py-2">
                    <Typography
                      className="mb-2"
                    >
                      <div className="font-bold sm:text-[1.5rem] text-md" style={setFontDetailAppyForWork(contentData)}>
                      {el?.content_name}
                      </div>
                      <div style={setFontSubTitleAppyForWork(contentData)} className="sm:text-md text-sm">
                      {el?.content_sub_title}
                      </div>
                    </Typography>
                    <Typography>
                      
                    </Typography>
                    <p className="text-[#1f90cf] sm:text-[16px] text-xs">
                      รายละเอียด
                    </p>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  {parse(el?.content_detail)}
                  <div className="flex justify-center my-4">
                    {el?.button?.filter((bt:any) => bt?.is_active).map((button:any,index:number) => {
                      return  <button
                      className="py-2 px-12 rounded-[100px] cursor-pointer"
                      onClick={() => setModalOpen(true)}
                      style={setButton(button)}
                      key={index}
                    >
                      {button?.text_button}
                    </button>
                    })}
  
                  </div>
                </AccordionDetails>
              </Accordion>
              </div>
            ))}
            {contentData?.content_type.button.filter((el:any) => el?.is_active).map((el:any,index:number) => {
              return <Link  href={el?.href.url}  target={el?.href.open_new_tab? "_blank" : ""} key={index}>
              <button className="py-3 px-8 my-8 text-white bg-gradient-to-b rounded-[100px] cursor-pointer"  style={setButton(el)}>
              {el?.text_button}
              </button>
            </Link>
            })}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SectionApplyForWork;
