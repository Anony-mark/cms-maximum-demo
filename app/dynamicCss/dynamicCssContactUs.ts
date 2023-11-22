export const setBgContactUs = (storeprops:any) => {
    let SetBackground = storeprops
    let css = {};

    css = {
        background: `${
            SetBackground?.degree === ""
              ? `linear-gradient(${SetBackground?.background_color_1}, ${SetBackground?.background_color_2})`
              : `linear-gradient(${SetBackground?.degree}, ${SetBackground?.background_color_1} , ${SetBackground?.background_color_2} )`
          }`
    }
    return css
}

export const setButtonContactUs = (storeprops:any) => {
    let SetButton = storeprops
    let css = {};

    css = {
        color: SetButton?.text_link_color,
        background: SetButton?.text_link_background_color
    }
    return css
}