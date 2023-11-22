export const SetFontColor = (storeprops:any) => {
    let setFont = storeprops?.content_type
    let css = {};

    css = {
        color : `${setFont?.color_content_type.text_color}`
    }
    return css
}

export const borderTypeColor = (storeprops:any) => {
    let setBorder = storeprops?.content_type
    let css = {};

    css = {
        borderColor: `${setBorder?.color_content_type.border_color}`
    }
    return css
}

export const setBgAboutUs = (storeprops:any) => {
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
}