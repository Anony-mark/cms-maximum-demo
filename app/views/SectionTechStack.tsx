"use client";

import React from "react";
import { SetFontColor, borderTypeColor } from "../dynamicCss/dynamicCssAboutUs";
import { setBgTechStack } from "../dynamicCss/dynamicCssTechStack";
interface Props {
  content: any;
}

const SectionTechStack: React.FC<Props> = ({ content }) => {
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
  //         background_color_1: "#e4f5ff",
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
  //         alt: "logo-aws",
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
  //         alt: "logo-docker",
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
  //         alt: "",
  //         video_url: "logo-css",
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
  //         alt: "",
  //         video_url: "logo-golang",
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
  //         alt: "logo-kubernetes",
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
  //         alt: "logo-mongodb",
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
  //         content_name: "apache",
  //         create_by: "Admin",
  //         create_at: "2023-07-25T18:10:07.336Z",
  //         view_count: 0,
  //         image_url:
  //           "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/apache.png",
  //         alt: "logo-apache",
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
  //         alt: "logo-nginx",
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
  //         alt: "logo-php",
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
  //         alt: "logo-googlecloud",
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
  //         alt: "logo-node",
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
  //         alt: "logo-nuxtjs",
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
  //         alt: "logo-rabbitmq",
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
  //         alt: "logo-redis",
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
  //         alt: "logo-vuejs",
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
  //         alt: "logo-wordpress",
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
  //         alt: "logo-sql",
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
  //         alt: "logo-python",
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
  //         alt: "logo-flutter",
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
  //         alt: "logo-helm",
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
  //         alt: "logo-javascript",
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
  //         alt: "logo-scss",
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
  //         alt: "logo-typescript",
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
  //         alt: "logo-dart",
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
  //         alt: "logo-lindc",
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
  //         alt: "logo-github",
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
  //         alt: "logo-react",
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
  //         alt: "logo-bootstrap",
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
  // ];

  const contentData = content?.find(
    (el: any) => el?.content_type.section === "section4"
  );

  return contentData?.content_type.is_active ? (
    <div style={setBgTechStack(contentData)} id="section4">
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
          <div
            className="flex flex-col items-center"
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
            <h3 className="mb-8">
              {contentData?.content_type.content_type_description}
            </h3>
            <ul className="flex sm:justify-center justify-around flex-wrap items-center gap-10 box-border leading-6 px-10">
              {contentData?.content_list.map((el: any, index: number) => (
              el?.is_active && el?.is_main?  <li
                  key={index}
                  className="flex justify-center items-center sm:w-[120px] w-[70px] sm:h-[130px] h-[75px] p-[8px]"
                >
                  <img
                    src={el?.image_url}
                    alt={el?.alt}
                    className="max-w-[100px]"
                  />
                </li> : <></>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SectionTechStack;
