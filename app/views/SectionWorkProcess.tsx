"use client";

import React from "react";
import { SetFontColor, borderTypeColor } from "../dynamicCss/dynamicCssAboutUs";
import parse from "html-react-parser";
import {
  setBgWorkProcess,
  setColorWorkProcess,
} from "../dynamicCss/dynamicCssWorkProcess";
interface Props {
  content: any;
}

const SectionWorkProcess: React.FC<Props> = ({ content }) => {
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
  //         background_color_1: "#e4f5ff",
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
  //         alt: "line-1",
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
  //         alt: "line-2",
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
  //         alt: "line-3",
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
  //         alt: "line-4",
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
  //         alt: "line-5",
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
  //         alt: "line-6",
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
  // ];

  const contentData = content?.find(
    (el: any) => el?.content_type.section === "section6"
  );

  return contentData?.content_type.is_active ? (
    <div style={setBgWorkProcess(contentData)} id="section6">
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
          <div
            className="flex sm:flex-row flex-col"
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
            {contentData?.content_list.map((el: any, index: number) => (
              el?.is_active && el?.is_main?<div
                className="w-auto sm:mt-4 mt-0 flex sm:flex-col flex-row items-center"
                key={index}
              >
                <h3
                  className="mb-4 sm:w-auto w-24"
                  style={setColorWorkProcess(contentData)}
                >
                  {el?.content_name}
                </h3>
                <div className="sm:mb-4 mb-0">
                  <img
                    src={el?.image_url}
                    alt={el?.alt}
                    className="sm:w-full w-24 sm:rotate-0 rotate-90 "
                  />
                </div>
                <div className="sm:w-auto w-48 responsive-editor">
                  {parse(el?.content_detail)}
                </div>
              </div> : <></>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SectionWorkProcess;
