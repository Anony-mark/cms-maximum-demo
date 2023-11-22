export const SetFontColorDetail = (storeprops: any) => {
  let setFont = storeprops?.content_type;
  let css = {};

  css = {
    color: `${setFont?.color_content_detail.text_color}`,
  };
  return css;
};

export const SetCardShadow = (storesprops: any) => {
  let setColorCard = storesprops?.content_type;
  let css = {};

  css = {
    background: setColorCard?.color_content_detail.transparent
      ? "rgba(0,0,0,0)"
      : `${setColorCard?.color_content_detail.background_color}`,
    boxShadow: setColorCard?.show_content_detail_shadow
      ? `1px 1px 6px 2px rgba(196,196,196,1)`
      : "",
    borderColor: setColorCard?.color_content_detail.border_color,
  };
  return css;
};

export const setBgService = (storeprops: any) => {
  let SetBackground = storeprops?.content_type
  let cssbackground = {};
  let cssImage = {};

  cssbackground = {
      background: `${
          SetBackground.color_content_type.degree === ""
            ? `linear-gradient(${SetBackground?.color_content_type.background_color_1}, ${SetBackground?.color_content_type.background_color_2})`
            : `linear-gradient(${SetBackground?.color_content_type.degree}, ${SetBackground?.color_content_type.background_color_1} , ${SetBackground?.color_content_type.background_color_2} )`
        }`
  }

  cssImage = {
      backgroundImage: `url(${SetBackground?.background_image_url})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center"
  }

  return SetBackground?.background_image_url !== ""? cssImage : cssbackground
};

// export const setGird = (storeprops:any,checkdiv:string) => {
//   let Setgrid;
//   let Usegrid;

//   // if(checkdiv === "service") {
//   //   Setgrid = storeprops?.content_type?.content_show_column
//   //   Usegrid = `grid lg:grid-cols-4`;
//   //   return Usegrid;
//   // }

//   // if(checkdiv === "ourteam") {
//   //   Setgrid = storeprops?.content_type?.content_show_column
//   //   Usegrid = `grid lg:grid-cols-3`;
//   //   return Usegrid;
//   // }
//   // if(checkdiv === "ourwelfare") {
//   //   Setgrid = storeprops?.content_type?.content_show_column
//   //   Usegrid = `grid lg:grid-cols-2`;
//   //   return Usegrid;
//   // }

//   let css = {}
//   Setgrid = storeprops?.content_type?.content_show_column

//     css = {
//       display: "grid",
//       gridTemplateColumns: `repeat(${Setgrid},minmax(0,1fr))`
//     }
    
//     return css
  
//   }

  