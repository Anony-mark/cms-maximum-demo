export const setBgSlidemain = (storeprops: any) => {
    let css = {};
    let SetBg = storeprops?.image_url;
    css = {
      background: SetBg === ""?  "rgba(0,0,0,0)" : `url(${SetBg})` ,
    };
    return css;
  };
  
  export const setButtonSlidemain = (storeprops: any) => {
    let css = {};
    let SetButton = storeprops?.customize_detail;
  
    css = {
      color: SetButton?.text_link_color,
      background: SetButton?.text_link_background_color,
    }
  return css
  }

export const colorTwoTone = (storeprops: any) => {
  let css = {}
  let color = storeprops?.overlay
  
  css = {
    background: `${
      color?.degree === ""
        ? `linear-gradient(${color?.color_background_button_1}95, ${color?.color_background_button_2}95)`
        : `linear-gradient(${color?.degree}, ${color?.color_background_button_1}95 , ${color?.color_background_button_2}95)`
    }`,
  }

  return css
}