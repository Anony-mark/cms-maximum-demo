"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import parse from "html-react-parser";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import { setBgFooter, setFormButtonReset, setFormButtonSubmit } from "../dynamicCss/dynamicCssFooter";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ErrorMessage } from "@hookform/error-message";
import { AiOutlineClose } from "react-icons/ai";
interface Props {
  modalOpen: boolean;
  setModalOpen: any;
  handleClose: any;
  form: any;
}

export default function BasicModal({
  modalOpen,
  setModalOpen,
  handleClose,
  form,
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

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onReset = (e:any) => {
    e.preventDefault()
    reset()
    handleClose();
  }

  const onSubmit = (data: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(data.flie[0]);

    let msgResult: string = "";
    // console.log(data);
    // console.log("file", data.flie[0]);
    // console.log(reader);
    // console.log(form.current);
    formData?.field_list.forEach((el: any, idx: number) => {
      return (msgResult +=
        el?.name_attribute + " :" + data[el?.name_attribute] + "\n");
    });

    setValue("message", msgResult);

    console.log("msg", msgResult);
    
    emailjs
      .sendForm(
        "service_7p2cthi",
        "template_yodg7lv",
        formRef.current!,
        "b4hiJlxr2j3xksoGV"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(form.current);
        },
        (error) => {
          console.log(error.text);
          handleClose();
        }
      );
    alert("ส่งข้อมูลเรียบร้อยแล้ว");
    reset();
    handleClose();
  };

  const formData = form?.form_list[1];

  
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
        <AiOutlineClose className="absolute right-6 text-2xl cursor-pointer" onClick={handleClose} />
        <img src="https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/Bubble1.png" alt="bubble" width={50} className="absolute bottom-16"/>
        <img src="https://www.maximumsoft.co.th/wp-content/themes/maximunsoft/assets/img/Bubble1.png" alt="bubble" width={50} className="absolute bottom-4 right-4 rotate-180"/>
          <div className="flex flex-col justify-center items-center p-10">
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className=" text-[#1e499a] font-bold"
            >
              <div className="mb-8">
              {formData?.form_name}
              </div>
            </Typography>
            <form
              className="grid grid-cols-12 w-full gap-4"
              onSubmit={handleSubmit(onSubmit)}
              ref={formRef}
            >
              <input
                type="hidden"
                value={formData?.email_to}
                {...register("email_to")}
              />
              <input
                type="hidden"
                value={formData?.email_cc}
                {...register("email_cc")}
              />
              <input
                type="hidden"
                value={formData?.email_bcc}
                {...register("email_bcc")}
              />
              <input type="hidden" value="" {...register("file_url")} />
              <input type="hidden" value="" {...register("message")} />
              {formData?.field_list.map((el: any, index: number) =>
                el?.form_type === "input-text" ? (
                  <div key={`form-${index}`} className="sm:col-span-6 col-span-12">
                    <TextField
                      id="outlined-basic"
                      InputLabelProps={{ shrink: true }}
                      label={el?.label_attribute}
                      {...register(`${el.name_attribute}`, {
                        required: el?.required,
                      })}
                      variant="outlined"
                      type="text"
                      className=" border-[1px] rounded-[6px] focus:outline-none w-full"
                      placeholder={el?.placeholder_attribute}
                      helperText={
                        errors[el.name_attribute]
                          ? "กรุณากรอก " + el?.label_attribute
                          : false
                      }
                      error={errors[el.name_attribute] ? true : false}
                    />
                    {/* {errors.example && <p>กรุณากรอก {el?.name_attribute}</p>} */}
                  </div>
                ) : el?.form_type === "textarea" ? (
                  <div key={`form-${index}`} className="col-span-12">
                    <TextField
                      id="outlined-basic"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      maxRows={4}
                      rows={4}
                      // variant="filled"
                      label={el?.label_attribute}
                      {...register(`${el.name_attribute}`, {
                        required: el?.required,
                      })}
                      variant="outlined"
                      type="text"
                      className=" border-[1px] rounded-[6px] focus:outline-none w-full"
                      placeholder={el?.placeholder_attribute}
                      helperText={
                        errors[el.name_attribute]
                          ? "กรุณากรอก " + el?.label_attribute
                          : false
                      }
                      error={errors[el.name_attribute] ? true : false}
                    />
                    {/* {errors.example && <p>กรุณากรอก {el?.name_attribute}</p>} */}
                  </div>
                ) : el?.form_type === "input-number" ? (
                  <div key={`form-${index}`} className="sm:col-span-6 col-span-12">
                    <TextField
                      id="outlined-basic"
                      InputLabelProps={{ shrink: true }}
                      label={el?.label_attribute}
                      {...register(`${el.name_attribute}`, {
                        required: el?.required,
                      })}
                      variant="outlined"
                      type="number"
                      className=" border-[1px] rounded-[6px] focus:outline-none w-full"
                      placeholder={el?.placeholder_attribute}
                      helperText={
                        errors[el.name_attribute]
                          ? "กรุณากรอก " + el?.label_attribute
                          : false
                      }
                      error={errors[el.name_attribute] ? true : false}
                    />
                    {/* {errors.example && <p>กรุณากรอก {el?.name_attribute}</p>} */}
                  </div>
                ) : el?.form_type === "input-email" ? (
                  <div key={`form-${index}`} className="sm:col-span-6 col-span-12">
                    <TextField
                      id="outlined-basic"
                      InputLabelProps={{ shrink: true }}
                      label={el?.label_attribute}
                      {...register(`${el.name_attribute}`, {
                        required: el?.required,
                      })}
                      variant="outlined"
                      type="email"
                      className=" border-[1px] rounded-[6px] focus:outline-none w-full"
                      placeholder={el?.placeholder_attribute}
                      helperText={
                        errors[el.name_attribute]
                          ? "กรุณากรอก " + el?.label_attribute
                          : false
                      }
                      error={errors[el.name_attribute] ? true : false}
                    />
                    {/* {errors.example && <p>กรุณากรอก {el?.name_attribute}</p>} */}
                  </div>
                ) : el?.form_type === "input-radio" ? (
                  <>
                    <FormLabel
                      id="demo-radio-buttons-group-label"
                      className="col-span-12"
                      key={index}
                    >
                      {el?.label_attribute}
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      className="col-span-12 grid grid-cols-12"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <div className="grid grid-cols-12">
                      {el?.option?.map((option: any, idx: number) => (
                        <FormControlLabel
                          className="sm:col-span-4 col-span-12 !text-sm"
                          {...register(`${el.name_attribute}`, {
                            required: el?.required,
                          })}
                          key={"radio-"+idx}
                          value={option}
                          control={<Radio />}
                          label={<Typography variant="body2">{option}</Typography>}
                        />
                      ))}
                      </div>
                    </RadioGroup>
                  </>
                ) : el?.form_type === "dropdown" ? (
                  <>
                    <InputLabel id="demo-simple-select-label">
                      {el?.name_attribute}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={dropdown}
                      label="Age"
                      onChange={handleChange}
                    >
                      {el?.option.map((option: any, idx: number) => (
                        <MenuItem value={option} key={"dropdown-"+idx}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </>
                ) : el?.form_type === "checkbox" ? (
                  <FormGroup>
                    {el?.option.map((option: any, idx: number) => (
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label={option}
                        key={"checkbox-"+idx}
                      />
                    ))}
                  </FormGroup>
                ) : el?.form_type === "input-file" ? (
                  <div key={`form-${index}`} className="sm:col-span-6 col-span-12">
                    {/* <label
                      htmlFor="formFile"
                      className="mb-2 inline-block text-neutral-700 "
                    >
                      {el?.name_attribute}
                    </label> */}
                    <input
                      className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                      type="file"
                      {...register(`${el.name_attribute}`, {
                        required: el?.required,
                      })}
                      id="formFile"
                    />
                     {errors[el.name_attribute]? "กรุณาเลือกไฟล์ขนาดไม่เกิน 50 kb" + el?.label_attribute : false}
                    {/* {errors.example && <p>กรุณากรอก {el?.name_attribute}</p>} */}
                  </div>
                ) : el?.form_type === "input-date" ? (
                  <div key={`form-${index}`} className="sm:col-span-6 col-span-12">
                    <TextField
                      id="outlined-basic"
                      InputLabelProps={{ shrink: true }}
                      label={el?.label_attribute}
                      {...register(`${el.name_attribute}`, {
                        required: el?.required,
                      })}
                      variant="outlined"
                      type="date"
                      className=" border-[1px] rounded-[6px] focus:outline-none w-full"
                      placeholder={el?.placeholder_attribute}
                      helperText={
                        errors[el.name_attribute]
                          ? "กรุณากรอก " + el?.label_attribute
                          : false
                      }
                      error={errors[el.name_attribute] ? true : false}
                    />
                    {/* {errors.example && <p>กรุณากรอก {el?.name_attribute}</p>} */}
                  </div>
                ) : el?.form_type === "input-time" ? (
                  <div key={`form-${index}`} className="sm:col-span-6 col-span-12">
                    <TextField
                      id="outlined-basic"
                      InputLabelProps={{ shrink: true }}
                      label={el?.label_attribute}
                      {...register(`${el.name_attribute}`, {
                        required: el?.required,
                      })}
                      variant="outlined"
                      type="time"
                      className=" border-[1px] rounded-[6px] focus:outline-none w-full"
                      placeholder={el?.placeholder_attribute}
                      helperText={
                        errors[el.name_attribute]
                          ? "กรุณากรอก " + el?.label_attribute
                          : false
                      }
                      error={errors[el.name_attribute] ? true : false}
                    />
                    {/* {errors.example && <p>กรุณากรอก {el?.name_attribute}</p>} */}
                  </div>
                ) : (
                  <></>
                )
              )}
              <div className="col-span-12 flex justify-center ">
              <button
                    className="my-[10px] py-2 px-12 bg-gradient-to-r from-[#1e499a] to-[#1f90cf] text-white sm:col-span-7 col-span-12 lg:col-span-4 rounded-[20px]"
                    style={setFormButtonSubmit(formData)}
                  >
                    {formData?.button_submit.text_button}
                    {/* ส่งแบบฟอร์ม */}
                  </button>
                  {formData?.button_reset.is_active? <button
                    className="my-[10px] py-2 px-12 bg-gradient-to-r from-[#1e499a] to-[#1f90cf] text-white sm:col-span-7 col-span-12 lg:col-span-4 rounded-[20px]"
                    style={setFormButtonReset(formData)}
                    onClick={onReset}
                  >
                    {formData?.button_reset.text_button}
                    {/* ส่งแบบฟอร์ม */}
                  </button> : <></>}
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
