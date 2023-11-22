export const setBgFooter = (storeprops: any) => {
  let SetBackground = storeprops;
  let css = {};

  if (SetBackground?.image_url) {
    css = {
      backgroundImage: `url(${SetBackground?.image_url})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
    }
  } else {
    css = {
      background: `${
        SetBackground?.degree === ""
          ? `linear-gradient(${SetBackground?.background_color_1}, ${SetBackground?.background_color_2})`
          : `linear-gradient(${SetBackground?.degree}, ${SetBackground?.background_color_1} , ${SetBackground?.background_color_2} )`
      }`,
    };
  }
  
 
  return css;
};

export const setFormButtonSubmit = (storeprops: any) => {
  let setButton = storeprops?.button_submit;
  let css = {};

  css = {
    background: setButton?.background_status
      ? `${
          setButton?.degree === ""
            ? `linear-gradient(${setButton?.color_background_button_1}, ${setButton?.color_background_button_2})`
            : `linear-gradient(${setButton?.degree}, ${setButton?.color_background_button_1} , ${setButton?.color_background_button_2} )`
        }`
      : "rgba(0,0,0,0)",
    color: setButton?.color_text_button,
    border: setButton?.border_status
      ? `1px solid ${setButton?.color_border_button}`
      : "",
  };
  return css;
};

export const setFormButtonReset = (storeprops: any) => {
  let setButton = storeprops.button_reset;
  let css = {};

  css = {
    background: setButton?.background_status
      ? `${
          setButton?.degree === ""
            ? `linear-gradient(${setButton?.color_background_button_1}, ${setButton?.color_background_button_2})`
            : `linear-gradient(${setButton?.degree}, ${setButton?.color_background_button_1} , ${setButton?.color_background_button_2} )`
        }`
      : "rgba(0,0,0,0)",
    color: setButton?.color_text_button,
    border: setButton?.border_status
      ? `1px solid ${setButton?.color_border_button}`
      : "",
  };
  return css;
};
