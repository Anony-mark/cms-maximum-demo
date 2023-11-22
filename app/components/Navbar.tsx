"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "antd";
import {
  SetFontHeaderLogo,
  SetbgcolorHeader,
  SetbgcolorMenu,
} from "../dynamicCss/dynamicCssHeader";
import parse from "html-react-parser";
import { setButtonContactUs } from "../dynamicCss/dynamicCssContactUs";
import { setButton } from "../dynamicCss/dynamicButton";


interface Props {
  menu: any;
  header: any;
  logo: any
  footer: any;
}

const { SubMenu } = Menu;

const generateMenuItems = (data: any) => {
  return data?.map((item: any, index: number) => {
    if (
      item?.sub_menu?.length > 0 &&
      item?.sub_menu?.filter((status: any) => status.is_active === true)
        .length > 0
    ) {
      return (
        <SubMenu
          style={SetbgcolorMenu(data, "main_menu", index)}
          className="menu-flex"
          key={item?.id}
          title={item?.label_th}
          icon={
            item.icon === "" || item.icon === null ? (
              <></>
            ) : (
              <img
                src={item?.icon}
                alt={`logo-menu-${index}`}
                width={40}
                height={40}
              />
            )
          }
        >
          {generateMenuItemsSubMenu(item?.sub_menu, item.font, item.id)}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item
          key={item?.label_th + index}
          style={SetbgcolorMenu(data, "main_menu", index)}
          className="menu-flex "
          icon={
            item.icon === "" || item.icon === null ? (
              <></>
            ) : (
              <img
                src={item?.icon}
                alt={`logo-menu-${index}`}
                width={40}
                height={40}
              />
            )
          }
        >
          <Link
            href={`${item?.mode_link ? item?.href.url : item?.href.url}`}
            target={`${item?.href.open_new_tab ? "_blank" : ""}`}
          >
            {item?.label_th}
          </Link>
        </Menu.Item>
      );
    }
  });
};

const generateMenuItemsSubMenu = (
  data: any,
  dataStyle: any,
  menuId: string
) => {
  return data?.map((item: any, index: number) => {
    if (
      item?.sub_menu?.length > 0 &&
      item?.sub_menu?.filter((status: any) => status.is_active === true)
        .length > 0
    ) {
      return (
        <SubMenu
          style={SetbgcolorMenu(dataStyle, "sub_menu", index)}
          className="menu-flex"
          key={item?.id}
          title={item?.label_th}
          icon={
            item.icon === "" || item.icon === null ? (
              <></>
            ) : (
              <img
                src={item?.icon}
                alt={`logo-menu-${index}`}
                width={40}
                height={40}
              />
            )
          }
        >
          {generateMenuItemsSubInSubMenu(
            item?.sub_menu,
            dataStyle,
            menuId,
            item.id
          )}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item
          key={item?.label_th + index}
          style={SetbgcolorMenu(dataStyle, "sub_menu", index)}
          className="menu-flex "
          icon={
            item.icon === "" || item.icon === null ? (
              <></>
            ) : (
              <img
                src={item?.icon}
                alt={`logo-menu-${index}`}
                width={40}
                height={40}
              />
            )
          }
        >
          <Link
            href={`${item?.mode_link ? item?.href.url : item?.href.url}`}
            target={`${item?.href.open_new_tab ? "_blank" : ""}`}
          >
            {item?.label_th}
          </Link>
        </Menu.Item>
      );
    }
  });
};

const generateMenuItemsSubInSubMenu = (
  data: any,
  dataStyle: any,
  menuId: string,
  submenuId: string
) => {
  return data.map((item: any, index: number) => {
    return item.is_active === true ? (
      <Menu.Item
        key={item?.label_th + index}
        style={SetbgcolorMenu(dataStyle, "sub_in_sub_menu", index)}
        className="menu-flex "
        icon={
          item.icon === "" || item.icon === null ? (
            <></>
          ) : (
            <img
              src={item?.icon}
              alt={`logo-menu-${index}`}
              width={40}
              height={40}
            />
          )
        }
      >
        <Link
          href={`${item?.mode_link ? item?.href.url : item?.href.url}`}
          target={`${item?.href.open_new_tab ? "_blank" : ""}`}
        >
          {item?.label_th}
        </Link>
      </Menu.Item>
    ) : (
      <></>
    );
  });
};

const Navbar:React.FC<Props> = ({menu,header,logo,footer}) => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

//  const {menu , header, logo}:any = useStore()

  

  // const header = {
  //   id: "64b4c66ff87e7fc03aa42f17",
  //   background: {
  //     mode: true,
  //     degree: "to left bottom",
  //     color1: "#ffffff",
  //     color2: "#3c73d6",
  //     image: "",
  //   },
  //   text: {
  //     title: {
  //       label_th: "Eazy Contents Management System",
  //       label_en: "",
  //       font_size: "1.5",
  //       color: "#ffffff",
  //       background: "#3c73d6",
  //       transparent: true,
  //     },
  //     sub_title: {
  //       label_th: "",
  //       label_en: "",
  //       font_size: "1.5",
  //       color: "#8489f8",
  //       background: "#3c73d6",
  //       transparent: true,
  //     },
  //   },
  // };

  // const logo = {
  //   id: "6476c73848086219526b497a",
  //   url: "https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/logo.png",
  //   width: "150",
  //   height: "150",
  // };

  let menuData = menu?.filter(
    (el: any) => el.position === "HEADER" && el.is_active === true
  );

  const contact = footer?.contact;
  
  return (
    <div
      style={SetbgcolorHeader(header, "bgcolor")}
      className="sticky z-50 w-full top-0 shadow-2xl"
    >
      <div className={`${header?.background.mode? "md:container" : ""} mx-auto px-4 relative`}>
        <div className="flex justify-between items-center z-20">
          <div data-aos="fade-right" className="flex items-center gap-4">
            <Link href="/">
              <img
                className="py-2"
                src={logo?.url}
                alt="logo"
                width={parseInt(logo?.width)}
                height={parseInt(logo?.height)}
              />
            </Link>
            <div className="sm:block hidden">
            <div style={SetFontHeaderLogo(header,"title")}>{header?.text.title.label_th}</div>
            <div style={SetFontHeaderLogo(header,"sub-title")}>{header?.text.sub_title.label_th}</div>
            </div>
          </div>
          <Menu
            className=" sticky top-0 z-10 lg:flex sm:hidden hidden justify-end  py-2 items-center bg-transparent w-[60%] text-[15px]"
            mode="horizontal"
            // overflowedIndicator={true}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            {generateMenuItems(menuData)}
          </Menu>
          <button
            className="sm:flex flex lg:hidden flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
        </div>
        <div
          className={`absolute top-[78px] left-0 z-10 lg:hidden sm:block block ${
            isOpen ? "h-[80vh] overflow-y-auto" : "h-0 overflow-y-hidden"
          } w-full bg-white transition-all duration-700 delay-200`}
        >
          <Menu
            className={` justify-end py-2 items-center  w-full text-[15px]`}
            mode="vertical"
            // overflowedIndicator={true}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            {generateMenuItems(menuData)}
          </Menu>
          <div className="border-b-2 border-[#1e499a] w-full px-8"></div>
          <div className="flex gap-3 items-center m-4">
            {/* <img
              src="https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/tel.png"
              alt="tel"
              className="w-[25px]"
            />
            <p>02-118-2764</p> */}
             {contact?.contact_detail? parse(contact?.contact_detail) : <></>}
          </div>
          <div className="flex gap-3 items-center m-4">
            {/* <img
              src="https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/mail.png"
              alt="mail"
              className="w-[25px]"
            />
            <p>Sale@Maximumsoft.Co.Th</p> */}
            {contact?.button
              .filter((el: any) => el?.is_active)
              .map((el: any, index: number) => {
                return (
                  <Link
                    href={el?.href.url}
                    target={`${el?.href.open_new_tab ? "_blank" : ""}`}
                    data-aos="fade"
                    key={index}
                  >
                    <button
                      className="mx-0 lg:my-0 md:my-8 my-8 py-[5px] px-8 rounded-[100px]"
                      style={setButton(el)}
                    >
                      {el?.text_button}
                    </button>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
