export const setBgWorkProcess = (storeprops: any) => {
  let SetBackground = storeprops?.content_type;
  let cssbackground = {};
  let cssImage = {};

  cssbackground = {
    background: `${
      SetBackground.color_content_type.degree === ""
        ? `linear-gradient(${SetBackground?.color_content_type.background_color_1}, ${SetBackground?.color_content_type.background_color_2})`
        : `linear-gradient(${SetBackground?.color_content_type.degree}, ${SetBackground?.color_content_type.background_color_1} , ${SetBackground?.color_content_type.background_color_2} )`
    }`,
  };

  cssImage = {
    backgroundImage: `url(${SetBackground?.background_image_url})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return SetBackground?.background_image_url !== "" ? cssImage : cssbackground;
};

export const setColorWorkProcess = (storeprops: any) => {
  let setColor = storeprops?.content_type;
  let css = {
    color: setColor?.color_content_detail.text_color,
  };

  return css;
};
