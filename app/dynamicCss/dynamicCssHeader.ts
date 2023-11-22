export const SetbgcolorHeader = (storesprops: any, checkdiv: string) => {
    let css = {};
    let header;
  
    header = storesprops?.background;
    if (checkdiv === "bgcolor") {
      if (header !== undefined) {
        if (header?.image) {
          css = {
            backgroundImage: `url(${header?.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center"
          };
        } else {
          css = {
            backgroundColor: `${header?.color1}`,
            background: `${
              header.degree === ""
                ? `linear-gradient(${header?.color1}, ${header?.color2})`
                : `linear-gradient(${header?.degree}, ${header?.color1} , ${header?.color2})`
            }`,
          };
        }
      }
  
      return css;
    }
  };
  
  export const SetSizeLogo = (storesprops: any, checkdiv: string) => {
    let css = {};
    let widthLogo;
    let heightLogo;
    if (checkdiv === "logoSize") {
      widthLogo = storesprops?.width;
      heightLogo = storesprops?.height;
  
      css = {
        width: `${widthLogo}px`,
        height: `${heightLogo}px`,
      };
  
      return css;
    }
  };
  
  export const SetFontHeaderLogo = (storesprops: any, checkdiv: string) => {
    let css = {};
    let fontColor;
    let backgroundColor;
    let fontSize;
    let bgTransparent = "rgba(0,0,0,0)";
    let SetTransparent = storesprops?.text;
  
    if (checkdiv === "title") {
      fontColor = storesprops?.text.title.color;
      backgroundColor = storesprops?.text.title.background;
      fontSize = storesprops?.text.title.font_size;
  
      css = {
        color: fontColor,
        backgroundColor: `${
          SetTransparent?.title.transparent ? bgTransparent : backgroundColor
        }`,
        fontSize: `${fontSize}rem`,
      };
  
      return css;
    }
  
    if (checkdiv === "sub-title") {
      fontColor = storesprops?.text.sub_title.color;
      backgroundColor = storesprops?.text.sub_title.background;
      fontSize = storesprops?.text.sub_title.font_size;
  
      css = {
        color: fontColor,
        backgroundColor: `${
          SetTransparent?.sub_title.transparent ? bgTransparent : backgroundColor
        }`,
        fontSize: `${fontSize}rem`,
      };
  
      return css;
    }
  
    if (checkdiv === "title-res") {
      fontColor = storesprops?.text.title.color;
      backgroundColor = storesprops?.text.title.background;
      fontSize = storesprops?.text.title.font_size;
  
      css = {
        color: fontColor,
        backgroundColor: `${
          SetTransparent?.title.transparent ? bgTransparent : backgroundColor
        }`,
      };
  
      return css;
    }
  
    if (checkdiv === "sub-title-res") {
      fontColor = storesprops?.text.sub_title.color;
      backgroundColor = storesprops?.text.sub_title.background;
      fontSize = storesprops?.text.sub_title.font_size;
  
      css = {
        color: fontColor,
        backgroundColor: `${
          SetTransparent?.sub_title.transparent ? bgTransparent : backgroundColor
        }`,
      };
  
      return css;
    }
  };
  
  export const SetbgcolorMenu = (
    storesprops: any,
    checkdiv: string,
    index: number
  ) => {
    let css = {};
    let font;
  
    if (checkdiv === "main_menu") {
      let checkTranparentMainMenu = storesprops[index]?.font.transparent_active;
  
      let checkBorder = storesprops[index]?.font.border_active;
  
      font = storesprops[index]?.font;
      css = {
        background: checkTranparentMainMenu
          ? "rgba(0,0,0,0)"
          : font?.degree === ""
          ? `linear-gradient(${font?.background_color_1}, ${font?.background_color_2})`
          : `linear-gradient(${font?.degree},${font?.background_color_1}, ${font?.background_color_2})`,
  
        color: `${font?.color}`,
        border: checkBorder ? `1px solid ${font?.border_color}` : "",
      };
  
      return css;
    }
  
    if (checkdiv === "sub_menu") {
      let checkTranparentSubMenu =
        storesprops?.sub_transparent_active;
  
      let checkBorder = storesprops.sub_border_active;
  
      font = storesprops;
      css = {
        background: checkTranparentSubMenu
          ? "rgba(0,0,0,0)"
          : `${font?.sub_background_color}`,
        color: `${font?.sub_color}`,
        border: checkBorder ? `1px solid ${font?.sub_border_color}` : "",
      };
  
      return css;
    }
  
    if (checkdiv === "sub_in_sub_menu") {
      let checkTranparentSubinsubMenu =
        storesprops?.sub_in_sub_transparent_active;
  
      let checkBorder = storesprops?.sub_in_sub_border_active;
  
      font = storesprops;
      css = {
        background: checkTranparentSubinsubMenu
          ? "rgba(0,0,0,0)"
          : `${font?.sub_in_sub_background_color}`,
        color: `${font?.sub_in_sub_color}`,
        border: checkBorder ? `1px solid ${font?.sub_in_sub_border_color}` : "",
      };
  
      return css;
    }
  };
  
  export const Setfontsec6 = (storesprops: any, checkdiv: string) => {
    let Setfont;
    let cssFontTitle;
  
    if (checkdiv === "title") {
      Setfont = storesprops.sectionSix.title;
      cssFontTitle = {
        color: `${Setfont.color}`,
      };
    }
  
    if (checkdiv === "subTitle") {
      Setfont = storesprops.sectionSix.subTitle;
      cssFontTitle = {
        color: `${Setfont.color}`,
      };
    }
  
    if (checkdiv === "extra1title") {
      Setfont = storesprops.extrasectionSix.subsection1.title;
      cssFontTitle = {
        color: `${Setfont.color}`,
      };
    }
  
    return cssFontTitle;
  };
  
  export const extraSetsecBTmore = (storesprops: any, checkdiv: string) => {
    let SetBT;
    let cssFontcontent;
  
    if (checkdiv === "Viewalljobpostings") {
      SetBT = storesprops.extrasectionSix.subsection1.button;
  
      cssFontcontent = {
        color: `${SetBT.fontcolor}`,
        backgroundColor: `${SetBT.bgcolor}`,
        textAlign: "center",
      };
    }
  
    return cssFontcontent;
  };
  