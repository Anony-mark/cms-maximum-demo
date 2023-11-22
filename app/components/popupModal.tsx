"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AiOutlineClose } from "react-icons/ai";
import parse from "html-react-parser";
import Link from "next/link";

interface Props {
  modalOpen: boolean;
  setModalOpen: any;
  handleClose: any;
  popup: any
}

export default function PopupModal({
  modalOpen,
  setModalOpen,
  handleClose,
  popup
}: Props) {
  // const style = {
  //   position: "absolute" as "absolute",
  //   top: `${width < breakpointmobile? "70%" : "50%"}`,
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   // width: `${width > breakpoint? "70%" : "95%"} `,
  //   bgcolor: "background.paper",
  //   border: "2px solid #000",
  //   boxShadow: 24,
  //   // overflow:'auto',
  //   p: 4,
  //   borderRadius: "10px",
  // };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const formRef = React.useRef<HTMLFormElement>(null);

  // const handleClose = () => setOpen(false);

  const [dropdown, setDropdown] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setDropdown(event.target.value);
  };


  
  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="overflow-auto"
      >
        <Box className="absolute top-[70%] sm:top-[50%] left-[50%] bg-white translate-x-[-50%] translate-y-[-50%] border-2 border-x-zinc-700 shadow-xl p-4 rounded-2xl sm:w-[70%] w-[95%]">
        <AiOutlineClose className="absolute right-2 top-2 text-2xl cursor-pointer" onClick={handleClose} />
        <div className="p-5 flex justify-center ">
         {popup? <Link href={popup?.link} target="_blank">
            <img
              src={popup?.image_url}
              alt={popup?.alt}
            />
          </Link> : <>  </>}
        </div>
        <div>
          {popup?.popup_detail? parse(popup?.popup_detail) : <></>}
        </div>
        </Box>
      </Modal>
    </div>
  );
}
