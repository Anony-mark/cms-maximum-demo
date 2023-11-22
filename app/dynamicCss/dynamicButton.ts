export const setButton = (storeprops:any) => {
    let buttonSet = storeprops;
    let css = {}

    css = {
        color : buttonSet?.color_text_button,
        background: buttonSet?.background_status? `${
            buttonSet?.degree === ""
              ? `linear-gradient(${buttonSet?.color_background_button_1}, ${buttonSet?.color_background_button_2})`
              : `linear-gradient(${buttonSet?.degree}, ${buttonSet?.color_background_button_1} , ${buttonSet?.color_background_button_2} )`
          }` : "rgba(0,0,0,0)",
        border: buttonSet?.border_status? `1px solid ${buttonSet?.color_border_button}` : "",
    }
    return css;
}