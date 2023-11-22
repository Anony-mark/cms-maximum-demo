"use client";

import { Prompt } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material";
import { ConfigProvider } from "antd";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface Props {
    data: any,
    children: React.ReactNode;
}

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const theme = createTheme({
  typography: {
      fontFamily: 'inherit',
  }
})

export const Layout:React.FC<Props> = ({
  children,data
}) =>

{
  return (
      <ThemeProvider theme={theme}>
      <ConfigProvider
            theme={{
                token: {
                    fontFamily: prompt.style.fontFamily,
                },
            }}
        >
        <Navbar menu={data?.menu} header={data?.header} logo={data?.logo} footer={data?.footer}/>
        {children}
        <Footer menu={data?.menu} footer={data?.footer} form={data?.form}/>
     </ConfigProvider>
        </ThemeProvider>
  );
}