export const SetbgcolorSec2 = (storesprops: any, checkdiv: string) => {
    let css = {};
    let Sectiontwo;
    if (checkdiv === "tophaeder") {
      Sectiontwo = storesprops.sectionTwo.tophaeder.background;
  
      css = {
        backgroundColor: `${Sectiontwo.color1}`,
        background: `${
          Sectiontwo.degree === ""
            ? Sectiontwo.color1
            : `linear-gradient(${Sectiontwo.degree}, ${Sectiontwo.color1} 0%, ${Sectiontwo.color2} 90%)`
        }`,
      };
      return css;
    }
  
    if (checkdiv === "elliptical") {
      let color1 = storesprops.color;
      let color2 = storesprops.color2;
      let degree = storesprops.degree
      css = {
        background: `${
          degree === ""
            ? `linear-gradient(${color1}, ${color2})`
            : `linear-gradient(${degree}, ${color1} , ${color2} )`
        }`,
      };
      return css;
    }
  
    if (checkdiv === "topnews") {
      Sectiontwo = storesprops.sectionTwo.topnews.background;
      css = {
        backgroundColor: `${Sectiontwo.color1}`,
        background: `${
          Sectiontwo.degree === ""
            ? Sectiontwo.color1
            : `linear-gradient(${Sectiontwo.degree}, ${Sectiontwo.color1} 0%, ${Sectiontwo.color2} 90%)`
        }`,
      };
  
      return css;
    }
  
    if (checkdiv === "toplasted") {
      Sectiontwo = storesprops?.news_type;
      css = {
        color: `${Sectiontwo?.color_news_type.text_color}`,
        background: `${
          Sectiontwo.color_news_type.degree === ""
            ? `linear-gradient(${Sectiontwo?.color_news_type.background_color_1},${Sectiontwo?.color_news_type.background_color_2})`
            : `linear-gradient(${Sectiontwo?.color_news_type.degree}, ${Sectiontwo.color_news_type.background_color_1},${Sectiontwo.color_news_type.background_color_2})`
        }`,
      }
  
      return css;
  }
  
    if (checkdiv === "topactivity") {
      Sectiontwo = storesprops.sectionTwo.activitynews.background;
      css = {
        backgroundColor: `${Sectiontwo.color1}`,
        background: `${
          Sectiontwo.degree === ""
            ? Sectiontwo.color1
            : `linear-gradient(${Sectiontwo.degree}, ${Sectiontwo.color1} 0%, ${Sectiontwo.color2} 90%)`
        }`,
      };
      return css;
    }
  
    if (checkdiv === "topvideonews") {
      Sectiontwo = storesprops.sectionTwo.videonews.background;
      css = {
        backgroundColor: `${Sectiontwo.color1}`,
        background: `${
          Sectiontwo.degree === ""
            ? Sectiontwo.color1
            : `linear-gradient(${Sectiontwo.degree},  ${Sectiontwo.color1} 0%,${Sectiontwo.color2} 60%)`
        }`,
      };
  
      return css;
    }
  
    if (checkdiv === "themereleaseSectwo") {
      Sectiontwo = storesprops.sectionTwo.background;
      css = {
        backgroundColor: `${Sectiontwo.color1}`,
        background: `${
          Sectiontwo.degree === ""
            ? Sectiontwo.color1
            : `linear-gradient(${Sectiontwo.degree},  ${Sectiontwo.color1} 0%,${Sectiontwo.color2} 60%)`
        }`,
      };
  
      return css;
    }
  };
  
  export const SetbggridSec2 = (storesprops: any, checkdiv: string) => {
    let Setgrid;
    let Usegrid;
    if (checkdiv === "tophaeder") {
      Setgrid = storesprops.sectionTwo.tophaeder.grid;
      Usegrid = `grid lg:grid-cols-${Setgrid}`;
      return Usegrid;
    }
    if (checkdiv === "topnew") {
      Setgrid = storesprops.sectionTwo.tophaeder.grid;
      Usegrid = `grid lg:grid-cols-${Setgrid}`;
      return Usegrid;
    }
  
    if (checkdiv === "subsectop") {
      Setgrid = storesprops.sectionTwo.topnews.grid;
      Usegrid = `grid lg:grid-cols-${Setgrid}`;
      return Usegrid;
    }
    if (checkdiv === "subsecbottom") {
      Setgrid = storesprops?.grid;
      Usegrid = `grid lg:grid-cols-${Setgrid}`;
      return Usegrid;
    }
    if (checkdiv === "toplasted") {
      Setgrid = storesprops?.news_type.news_show_column;
      Usegrid = `grid lg:grid-cols-${Setgrid.slice(0,1)}`;
      return Usegrid;
    }
    if (checkdiv === "topactivity") {
      Setgrid = storesprops.sectionTwo.activitynews.grid;
      Usegrid = `grid lg:grid-cols-${Setgrid}`;
      return Usegrid;
    }
    if (checkdiv === "topvideonews") {
      Setgrid = storesprops.sectionTwo.videonews.grid;
      Usegrid = `grid lg:grid-cols-${Setgrid}`;
      return Usegrid;
    }
  
    if (checkdiv === "topuniversity") {
      Setgrid = storesprops.sectionTwo.university.grid;
      Usegrid = `grid lg:grid-cols-${Setgrid}`;
      return Usegrid;
    }
  };
  
  export const tophaeder = (
    storesprops: any,
    checkdiv: string,
    index: number
  ) => {
    let Setfont;
    let cssFontTitle: object = {};
  
    if (checkdiv === "title") {
      Setfont = storesprops.sectionTwo.tophaeder.content[index].title;
      cssFontTitle = {
        fontSize: `${Setfont.fontSize + "rem"}`,
        color: `${Setfont.color}`,
        textAlign: "center",
      };
    }
  
    if (checkdiv === "discription") {
      Setfont = storesprops.sectionTwo.tophaeder.content[index].discription;
      cssFontTitle = {
        fontSize: `${Setfont.fontSize + "rem"}`,
        color: `${Setfont.color}`,
      };
    }
    return cssFontTitle;
  };
  
  export const SetsectwoBT = (storesprops: any, index: number) => {
    let SetBT = storesprops.sectionTwo.tophaeder.content[index].more;
    let Setfontsize = storesprops.sectionTwo.tophaeder.content[index].more;
  
    
    const cssFontcontent: object = {
      fontSize: `${Setfontsize.fontSize + "rem"}`,
      color: `${SetBT.color}`,
      backgroundColor: `${SetBT.Bgcolor}`,
      textAlign: "center",
    };
  
    return cssFontcontent;
  };
  
  export const SetsectwoBTmoreNew = (
    storesprops: any,
    checkdiv: string,
    index: number
  ) => {
    let SetBT;
    let cssFontcontent: object = {}; 
  
    if (checkdiv === "latestnews") {
      SetBT = storesprops.sectionTwo.latestnews.moreDetail;
  
      cssFontcontent = {
        color: `${SetBT.color}`,
        backgroundColor: `#2e4da1 `,
        textAlign: "center",
      };
    }
    if (checkdiv === "activitynews") {
      SetBT = storesprops.sectionTwo.activitynews.moreDetail;
  
      cssFontcontent = {
        color: `${SetBT.color}`,
        backgroundColor: `${SetBT.bgcolor}`,
        textAlign: "center",
      };
    }
  
    if (checkdiv === "videonews") {
      SetBT = storesprops.sectionTwo.videonews.moreDetail;
  
      cssFontcontent = {
        color: `${SetBT.color}`,
        backgroundColor: `${SetBT.bgcolor}`,
        textAlign: "center",
      };
    }
  
    if (checkdiv === "universitynews") {
      SetBT = storesprops.sectionTwo.university.moreDetail;
  
      cssFontcontent = {
        color: `${SetBT.color}`,
        backgroundColor: `${SetBT.bgcolor}`,
        textAlign: "center",
      };
    }
  
    return cssFontcontent;
  };
  
  export const Setfonttopnews = (
    storesprops: any,
    checkdiv: string,
    index: number
  ) => {
    let Setfont = storesprops?.title;
    let cssFontTitle;
  
    if (checkdiv === "title") {
      cssFontTitle = {
        fontSize: `${Setfont.fontSize + "rem"}`,
        color: `${Setfont.color}`,
      };
    }
    if (checkdiv === "titleimg") {
      let Setfontsize = storesprops.sectionTwo.topnews.content[index].title;
      cssFontTitle = {
        fontSize: `${Setfontsize.fontSize + "rem"}`,
        color: `${Setfontsize.color}`,
      };
    }
    if (checkdiv === "discription") {
      let Setfontsize = storesprops.sectionTwo.topnews.content[index].discription;
      cssFontTitle = {
        fontSize: `${Setfontsize.fontSize + "rem"}`,
        color: `${Setfontsize.color}`,
      };
    }
    if (checkdiv === "more") {
      let Setfontsize = storesprops.sectionTwo.topnews.content[index].more;
      cssFontTitle = {
        fontSize: `${Setfontsize.fontSize + "rem"}`,
        color: `${Setfontsize.color}`,
      };
    }
  
    if (checkdiv === "Subsectitle") {
      let Setfontsize = storesprops?.content[index].title;
      cssFontTitle = {
        fontSize: `${Setfontsize.fontSize + "rem"}`,
        color: `${Setfontsize.color}`,
      };
    }
  
    if (checkdiv === "Subsecdiscription") {
      let Setfontsize =
        storesprops?.content[index].discription;
       
      cssFontTitle = {
        fontSize: `${Setfontsize.fontSize + "rem"}`,
        color: `${Setfontsize.color}`,
      };
    }
  
    if (checkdiv === "borderbackground") {
      let SetBackgroundAndBorder = storesprops?.content[index].title;
      let checkTextBackground = storesprops?.checkTextBackground;
      let transparent = "rgba(0,0,0,0)"
      let checkShadow = storesprops?.checkShadow;
      
      cssFontTitle = {
        backgroundColor: `${checkTextBackground? SetBackgroundAndBorder.background :transparent }`,
        borderColor: `${SetBackgroundAndBorder.border}`,
        borderRadius: `${SetBackgroundAndBorder.borderRadius}px`,
        boxShadow: `${checkShadow ? "0px 0px 8px 6px rgba(71,71,71,0.34)" : ""}`,
      };
    }
    
    if (checkdiv === "titleheadtopnew") {
      cssFontTitle = {
        fontSize: `${Setfont.fontSize + "rem"}`,
        color: `${Setfont.color}`,
      };
    }
    if (checkdiv === "titlenewlatest") {
      let Setfontsize = storesprops.sectionTwo.latestnews.content[index].title;
      cssFontTitle = {
        fontSize: `${Setfontsize.fontSize + "rem"}`,
        color: `${Setfontsize.color}`,
      };
    }
    if (checkdiv === "discriptionnewlatest") {
      let Setfontsize =
        storesprops.sectionTwo.latestnews.content[index].discription;
      cssFontTitle = {
        fontSize: `${Setfontsize.fontSize + "rem"}`,
        color: `${Setfontsize.color}`,
      };
    }
  
    if (checkdiv === "titleheadactivity") {
      let Setfontsize = storesprops.sectionTwo.activitynews.title;
      cssFontTitle = {
        fontSize: `${Setfontsize.fontSize + "rem"}`,
        color: `${Setfontsize.color}`,
      };
    }
    if (checkdiv === "titleactivity") {
      let Setfontsize = storesprops.sectionTwo.activitynews.content[index].title;
      cssFontTitle = {
        backgroundColor: `${Setfontsize.bgcolor}`,
        fontSize: `${Setfontsize.fontSize + "rem"}`,
        color: `${Setfontsize.color}`,
      };
    }
    if (checkdiv === "discriptionactivity") {
      let Setfontsize =
        storesprops.sectionTwo.activitynews.content[index].discription;
      cssFontTitle = {
        fontSize: `${Setfontsize.fontSize + "rem"}`,
        color: `${Setfontsize.color}`,
      };
    }
  
    if (checkdiv === "titleheadvideonews") {
      let Setfontsize = storesprops.sectionTwo.videonews.title;
      cssFontTitle = {
        fontSize: `${Setfontsize.fontSize + "rem"}`,
        color: `${Setfontsize.color}`,
      };
    }
    if (checkdiv === "titlevideonews") {
      let Setfontsize = storesprops.sectionTwo.videonews.content[index].title;
      cssFontTitle = {
        backgroundColor: `${Setfontsize.bgcolor}`,
        fontSize: `${Setfontsize.fontSize + "rem"}`,
        color: `${Setfontsize.color}`,
      };
    }
    if (checkdiv === "discriptionvideonews") {
      let Setfontsize =
        storesprops.sectionTwo.videonews.content[index].discription;
      cssFontTitle = {
        fontSize: `${Setfontsize.fontSize + "rem"}`,
        color: `${Setfontsize.color}`,
      };
    }
  
    if (checkdiv === "titleheaduniversity") {
      let Setfontsize = storesprops.sectionTwo.university.title;
      cssFontTitle = {
        fontSize: `${Setfontsize.fontSize + "rem"}`,
        color: `${Setfontsize.color}`,
      };
    }
    if (checkdiv === "titleuniversity") {
      let Setfontsize = storesprops.sectionTwo.university.content[index].title;
      cssFontTitle = {
        backgroundColor: `${Setfontsize.bgcolor}`,
        fontSize: `${Setfontsize.fontSize + "rem"}`,
        color: `${Setfontsize.color}`,
      };
    }
    if (checkdiv === "discriptionuniversity") {
      let Setfontsize =
        storesprops?.content[index].discription;
      cssFontTitle = {
        fontSize: `${Setfontsize.fontSize + "rem"}`,
        color: `${Setfontsize.color}`,
      };
    }
    if (checkdiv === "dateuniversity") {
      let Setfontsize = storesprops.sectionTwo.university.content[index].date;
      cssFontTitle = {
        fontSize: `${Setfontsize.fontSize + "rem"}`,
        color: `${Setfontsize.color}`,
      };
    }
    if (checkdiv === "dateuniversity") {
      let Setfontsize = storesprops.sectionTwo.university.content[index].date;
      cssFontTitle = {
        //  fontSize: `${Setfontsize.fontSize + "rem"}`, //fix date not use fontSize
        color: `${Setfontsize.color}`,
      };
    }
  
    return cssFontTitle;
  };
  
  export const setFontColorNewsType = (storesprops: any, index: number) => {
    let SetFontNewsType = storesprops?.news_type.color_news_type;
    let cssFontColorNewsType;
  
    cssFontColorNewsType = {
      color: `${SetFontNewsType?.text_color}`,
      fontSize: "1.3rem",
    };
    return cssFontColorNewsType;
  };
  
  export const setFontColorNewsDetail = (storesprops: any, index: number) => {
    let SetfontNewsDetail = storesprops?.news_type?.color_news_detail;
    let cssFontColorNewsDetail;
  
    cssFontColorNewsDetail = {
      color: `${SetfontNewsDetail?.text_color}`,
    }
    return cssFontColorNewsDetail
  };
  
  export const setBorderNewsType = (storesprops: any, index: number) => {
    let SetBorderNewsType = storesprops?.news_type.color_news_type;
    let cssBorderNewsType;
  
    cssBorderNewsType = {
      borderColor: `${SetBorderNewsType?.border_color}`
    }
    return cssBorderNewsType;
  }
  
  export const setBorderCardNewsDetail = (storesprops:any, index:number) => {
    let SetfontNewsDetail = storesprops?.news_type?.color_news_detail;
    let SetCardBorder = storesprops?.news_type?.color_news_detail;
    let checkDetailBackground = storesprops?.news_type.color_news_detail.transparent
    let cssBorderCardNewsDetail;
    let transparent = "rgba(0,0,0,0)"
  
    let checkshadow = storesprops?.news_type.show_news_detail_shadow
  
    let borderRadius = storesprops?.news_type.color_news_detail.border_radius
  
    cssBorderCardNewsDetail = {
      background: `${!checkDetailBackground? SetfontNewsDetail?.background_color : transparent}`,
      borderColor: `${SetCardBorder?.border_color}`,
      boxShadow:  `${checkshadow ? "0px 0px 8px 6px rgba(71,71,71,0.34)" : ""}`,
      borderRadius: `${borderRadius}px`
    }
    return cssBorderCardNewsDetail
  }
  
  export const IconSize = (storesprops: any, index: number) => {
    let Setsizeicon = storesprops?.content[index].image;
  
    const css = {
      width: `${Setsizeicon.width}vh`,
      height: `${Setsizeicon.height}vh`,
    };
  
    return css;
  };
  
  export const Setfontmaincard = (
    storesprops: any,
    checkdiv: string,
    index: number
  ) => {
    let cssFontTitle;
    if (checkdiv === "titlehead") {
      let Setfont = storesprops.sectionTwo.title;
      cssFontTitle = {
        fontSize: `${Setfont.fontSize + "rem"}`,
        color: `${Setfont.color}`,
      };
    }
    if (checkdiv === "titlemaincard") {
      let Setfont = storesprops.sectionTwo.maincard[index].title;
      cssFontTitle = {
        color: `${Setfont.color}`,
      };
    }
    if (checkdiv === "submaincard") {
      let Setfont = storesprops.sectionTwo.maincard[index].subTitle;
      cssFontTitle = {
        color: `${Setfont.color}`,
      };
    }
    return cssFontTitle;
  };
  
  export const SetgridcardContent = (grid: any, checkdiv: string) => {
    let Usegrid;
    if (checkdiv === "cardgrid") {
      Usegrid = `grid lg:grid-cols-${grid}`;
      return Usegrid;
    }
  };
  export const SetfontcardContent = (storesprops: any, checkdiv: string) => {
    let cssFontTitle;
  
    if (checkdiv === "titleCard") {
      cssFontTitle = {
        color: `${storesprops.title.color}`,
      };
    }
    if (checkdiv === "discriptionCard") {
      cssFontTitle = {
        color: `${storesprops.discription.color}`,
      };
    }
    if (checkdiv === "tagCard") {
      cssFontTitle = {
        color: `${storesprops.tag.color}`,
      };
    }
    if (checkdiv === "dateCard") {
      cssFontTitle = {
        color: `${storesprops.date.color}`,
      };
    }
    if (checkdiv === "moreCard") {
      cssFontTitle = {
        color: `${storesprops.more.color}`,
      };
    }
  
    return cssFontTitle;
  };
  export const SetfontmoredetailAll = (storesprops: any, checkdiv: string) => {
    let cssFontTitle;
  
    if (checkdiv === "moredetailAll") {
      cssFontTitle = {
        color: `${storesprops.color}`,
      };
    }
  
    return cssFontTitle;
  };
  
  export const Setfonttags = (storesprops: any, checkdiv: string) => {
    let cssFontTitle;
  
    if (checkdiv === "tagtitle") {
      cssFontTitle = {
        color: `${storesprops.title.color}`,
      };
    }
  
    return cssFontTitle;
  };
  