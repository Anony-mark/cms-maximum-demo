import { create } from "zustand";

export interface Main {
  data: Data;
  status: Status;
}

export interface Data {
  setting: Setting;
  header: Header;
  logo: Logo;
  menu: Menu[];
  slide: Slide;
  footer: Footer;
  popup: Popup;
  news: News[];
  content: Content[];
  document: any[];
  form: Form;
}

export interface Content {
  content_type: ContentType;
  content_list: ContentList[];
}

export interface ContentList {
  id: string;
  content_name: string;
  create_by: CreateBy;
  create_at: Date;
  view_count: number;
  image_url: string;
  video_url: string;
  content_detail: string;
  is_active: boolean;
  ref_content_type_id: string;
  is_main: boolean;
  position: number;
  tags: string[];
  slugs: any[];
}

export enum CreateBy {
  Admin = "Admin",
  Admin1 = "admin1",
}

export interface ContentType {
  id: string;
  content_type_name: string;
  mode_show_content: string;
  content_show_column: string;
  content_show_limit: string;
  show_content_type_name: boolean;
  show_content_detail_shadow: boolean;
  color_content_type: ColorType;
  color_content_detail: ColorDetail;
  is_active: boolean;
  position: number;
  section: string;
  animation: Animation;
}

export interface Animation {
  advance_effect: boolean;
  effect: string;
  offset: number;
  delay: number;
  duration: number;
  easing: string;
  once: boolean;
  mirror: boolean;
  anchor_placement: string;
}

export interface ColorDetail {
  text_color: string;
  border_color: string;
  background_color: string;
  border: boolean;
  transparent: boolean;
  border_radius: number;
}

export interface ColorType {
  degree: string;
  text_color: string;
  border_color: string;
  background_color_1: string;
  background_color_2: string;
  border: boolean;
}

export interface Footer {
  degree: string;
  background_color_1: string;
  background_color_2: string;
  image_url: string;
  footer_detail: string;
  contact: Contact;
  copyright: string;
}

export interface Contact {
  contact_detail: string;
  href: Href;
  degree: string;
  background_color_1: string;
  background_color_2: string;
  text_link: string;
  text_link_color: string;
  text_link_background_color: string;
  is_active: boolean;
}

export interface Href {
  url: string;
  open_new_tab: boolean;
}

export interface Form {
  form_list: FormList[];
}

export interface FormList {
  id: string;
  form_name: string;
  email_to: string;
  email_cc: string;
  email_bcc: string;
  field_list: FieldList[];
  is_active: boolean;
}

export interface FieldList {
  form_type: string;
  name_attribute: string;
  label_attribute: string;
  placeholder_attribute: string;
  option: string[];
  required: boolean;
}

export interface Header {
  background: Background;
  text: Text;
}

export interface Background {
  mode: boolean;
  degree: string;
  color1: string;
  color2: string;
  image: string;
}

export interface Text {
  title: Title;
  sub_title: Title;
}

export interface Title {
  label_th: string;
  label_en: string;
  font_size: string;
  color: string;
  background: string;
  transparent: boolean;
}

export interface Logo {
  url: string;
  width: string;
  height: string;
}

export interface Menu {
  id: string;
  label_th: string;
  label_en: string;
  mode_link: boolean;
  href: Href;
  detail: string;
  icon: string;
  font: Font;
  position: string;
  is_active: boolean;
  sub_menu: SubMenu[];
}

export interface Font {
  color: string;
  degree: string;
  background_color_1: string;
  background_color_2: string;
  border_color: string;
  transparent_active: boolean;
  border_active: boolean;
  sub_color: string;
  sub_background_color: string;
  sub_border_color: string;
  sub_transparent_active: boolean;
  sub_border_active: boolean;
  sub_in_sub_color: string;
  sub_in_sub_background_color: string;
  sub_in_sub_border_color: string;
  sub_in_sub_transparent_active: boolean;
  sub_in_sub_border_active: boolean;
}

export interface SubMenu {
  id: string;
  label_th: string;
  label_en: string;
  mode_link: boolean;
  href: Href;
  detail: string;
  icon: string;
  is_active: boolean;
  sub_menu?: SubMenu[];
}

export interface News {
  news_type: NewsType;
  news_list: NewsList[];
}

export interface NewsList {
  id: string;
  new_name: string;
  create_by: CreateBy;
  create_at: Date;
  view_count: number;
  image_url: string;
  image_gallery: string[];
  new_detail: string;
  is_active: boolean;
  ref_news_type_id: ID;
  is_main: boolean;
  position: number;
  tags: string[];
  slugs: any[];
}

export enum ID {
  The64A24D45Fd4A4C4E0147D5CA = "64a24d45fd4a4c4e0147d5ca",
  The64B5182Cf27Ccd9922Dbadaf = "64b5182cf27ccd9922dbadaf",
}

export interface NewsType {
  id: ID;
  news_type_name: string;
  mode_show_news: string;
  news_show_column: string;
  news_show_limit: string;
  show_news_type_name: boolean;
  show_news_detail_shadow: boolean;
  color_news_type: ColorType;
  color_news_detail: ColorDetail;
  is_active: boolean;
  position: number;
  section: string;
  animation: Animation;
}

export interface Popup {
  image_url: string;
  link: string;
  is_active: boolean;
  popup_detail: string;
}

export interface Setting {
  address_website: string;
  main_content_website: string;
  google_search_word: string;
  google_detail_content_show: string;
  facebook_messenger_code: string;
  color_background: string;
}

export interface Slide {
  is_active: boolean;
  auto_play: boolean;
  delay_auto_play: number;
  animation: string;
  slide_list: SlideList[];
}

export interface SlideList {
  id: string;
  banner_name: string;
  href: Href;
  image_url: string;
  customize: boolean;
  customize_detail: CustomizeDetail;
  is_active: boolean;
}

export interface CustomizeDetail {
  text_detail: string;
  image_detail_url: string;
  position_text_detail: string;
  text_link: string;
  text_link_color: string;
  text_link_background_color: string;
}

export interface Status {
  code: number;
  message: string;
}

export interface uselayout {
  header: Header;
  logo: Logo;
  menu: Menu[];
  footer: Footer;
  form: Form;
}

export const useStore = create((set) => ({
  menu: [],
  logo: {
    url: "",
    width: "",
    height: "",
  },
  header: {
    background: {
      mode: false,
      degree: "",
      color1: "",
      color2: "",
      image: "",
    },
    text: {
      title: {
        label_th: "",
        label_en: "",
        font_size: "",
        color: "",
        background: "",
        transparent: false,
      },
      sub_title: {
        label_th: "",
        label_en: "",
        font_size: "",
        color: "",
        background: "",
        transparent: false,
      },
    },
  },
  footer: {
    degree: "",
    background_color_1: "",
    background_color_2: "",
    image_url: "",
    footer_detail: "",
    contact: {
      contact_detail: "",
      href: {
        url: "",
        open_new_tab: false,
      },
      degree: "",
      background_color_1: "",
      background_color_2: "",
      text_link: "",
      text_link_color: "",
      text_link_background_color: "",
      is_active: true,
    },
    copyright: "",
  },
  form: {
    form_list: []
  },
}));
