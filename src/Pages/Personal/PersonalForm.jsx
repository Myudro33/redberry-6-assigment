import React, { useState } from "react";
import * as styled from "./PersonalStyled";
import Navbar from "../../Components/Navbar";
import { Button } from "../../Components/GlobalStyledComponents";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const PersonalForm = () => {
  const [file, setFile] = useState();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      photo: "",
      aboutYourself: "",
      email: "",
      number: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "მინიმუმ 2 ასო")
        .matches(/^[\u10A0-\u10FF]+$/, "მხოლოდ ქართული ასოები")
        .required("სავალდებულო"),
      lastName: Yup.string()
        .min(2, "მინიმუმ 2 ასო")
        .matches(/^[\u10A0-\u10FF]+$/, "მხოლოდ ქართული ასოები")
        .required("სავალდებულო"),
      photo: Yup.string().required("სავალდებულო"),
      email: Yup.string()
        .matches(/.*\@redberry.ge$/, "უნდა მთავრდებოდეს @redberry.ge-ით")
        .required("სავალდებულო"),
      number: Yup.string()
        .matches(
          /^(\+?995)?(79\d{7}|5\d{8})$/,
          "უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
        )
        .required("სავალდებულო"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      navigate("/experience");
    },
  });
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  return (
    <styled.LeftContainer>
      <Navbar title="პირადი ინფო" page={"1/3"} />
      <styled.Form onSubmit={formik.handleSubmit}>
        <styled.NameContainer>
          <styled.Label
            color={formik.errors.firstName && formik.touched.firstName && "red"}
          >
            სახელი
            <styled.Input
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type={"text"}
              placeholder="ანზორ"
              width={"371px"}
              border={
                formik.errors.firstName &&
                formik.touched.firstName &&
                "1px solid red"
              }
            />
            <styled.Requirements
              color={
                formik.errors.firstName && formik.touched.firstName && "red"
              }
            >
              {formik.errors.firstName && formik.touched.firstName
                ? formik.errors.firstName
                : "მინიმუმ 2 ასო, ქართული ასოები"}
            </styled.Requirements>
          </styled.Label>
          <styled.Label
            color={formik.errors.lastName && formik.touched.lastName && "red"}
          >
            გვარი
            <styled.Input
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type={"text"}
              placeholder="მუმლაძე"
              width={"371px"}
              border={
                formik.errors.lastName &&
                formik.touched.lastName &&
                "1px solid red"
              }
            />
            <styled.Requirements
              color={formik.errors.lastName && formik.touched.lastName && "red"}
            >
              {formik.errors.lastName && formik.touched.lastName
                ? formik.errors.lastName
                : "მინიმუმ 2 ასო, ქართული ასოები"}
            </styled.Requirements>
          </styled.Label>
        </styled.NameContainer>
        <styled.FileUploadContainer>
          <styled.FileTitle
            error={formik.errors.photo && formik.touched.photo && "red"}
          >
            პირადი ფოტოს ატვირთვა
          </styled.FileTitle>
          <label id="label" htmlFor="upload-photo">
            ატვირთვა
          </label>
          <input
            value={formik.values.photo}
            onChange={handleFileChange}
            onChangeCapture={formik.handleChange}
            onBlur={formik.handleBlur}
            name="photo"
            type="file"
            id="upload-photo"
          />
        </styled.FileUploadContainer>
        <styled.Label style={{ marginTop: "50px" }}>
          ჩემს შესახებ (არასავალდებულო)
          <styled.Textarea
            name="aboutYourself"
            value={formik.values.aboutYourself}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="ზოგადი ინფო შენს შესახებ"
          />
        </styled.Label>
        <styled.Label
          color={formik.errors.email && formik.touched.email && "red"}
          style={{ marginTop: "50px" }}
        >
          ელ.ფოსტა
          <styled.Input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="anzori666@redberry.ge"
            width={"100%"}
            type="text"
            border={
              formik.errors.email && formik.touched.email && "1px solid red"
            }
          />
          <styled.Requirements
            color={formik.errors.email && formik.touched.email && "red"}
          >
            {formik.errors.email && formik.touched.email
              ? formik.errors.email
              : "უნდა მთავრდებოდეს @redberry.ge-ით"}
          </styled.Requirements>
        </styled.Label>
        <styled.Label
          color={formik.errors.number && formik.touched.number && "red"}
          style={{ marginTop: "50px" }}
        >
          მობილურის ნომერი
          <styled.Input
            name="number"
            value={formik.values.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="+995 551 12 31 12"
            border={
              formik.errors.number && formik.touched.number && "1px solid red"
            }
          />
          <styled.Requirements
            color={formik.errors.number && formik.touched.number && "red"}
          >
            {formik.errors.number && formik.touched.number
              ? formik.errors.number
              : "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"}
          </styled.Requirements>
        </styled.Label>
        <styled.NavigationContainer>
          <Button type="submit" width="151px">
            შემდეგი
          </Button>
        </styled.NavigationContainer>
      </styled.Form>
    </styled.LeftContainer>
  );
};

export default PersonalForm;
