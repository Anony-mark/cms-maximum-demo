export const setBgOurWelfare = (storeprops: any) => {
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

export const setCardOurWelfare = (storeprops: any) => {
  let setting = storeprops?.content_type;
  let css = {};

  css = {
    background: setting?.color_content_detail.transparent
      ? "rgba(0,0,0,0)"
      : `${setting?.color_content_detail.background_color}`,
    boxShadow: setting?.show_content_detail_shadow
      ? `1px 1px 6px 2px rgba(196,196,196,1)`
      : "",
    borderColor: setting?.color_content_detail.border_color,
  };
  return css;
};

export const setFontDetailOurWelfare = (storeprops: any) => {
    let setting = storeprops?.content_type;
    let css = {};

    css = {
        color: setting?.color_content_detail.text_color
    }
    return css
};
