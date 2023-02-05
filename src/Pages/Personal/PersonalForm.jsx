import React, { useContext, useEffect, useState } from "react";
import * as styled from "./PersonalStyled";
import Navbar from "../../Components/Navbar";
import { Button } from "../../Components/GlobalStyledComponents";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import useLocalStorage from "../../Context/useLocalStorage";
import { StoreContext } from "../../Context/StoreContext";

const PersonalForm = () => {
  const { file, setFile } = useContext(StoreContext);
  const [store, setstore] = useLocalStorage("store", {
    name: "",
    surname: "",
    email: "",
    phone_number: "",
    about_me: "",
    image: "",
    file: "",
  });
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: store,
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "მინიმუმ 2 ასო")
        .matches(/^[\u10A0-\u10FF]+$/, "მხოლოდ ქართული ასოები")
        .required("სავალდებულო"),
      surname: Yup.string()
        .min(2, "მინიმუმ 2 ასო")
        .matches(/^[\u10A0-\u10FF]+$/, "მხოლოდ ქართული ასოები")
        .required("სავალდებულო"),
      image: Yup.string().required("სავალდებულო"),
      email: Yup.string()
        .matches(/.*\@redberry.ge$/, "უნდა მთავრდებოდეს @redberry.ge-ით")
        .required("სავალდებულო"),
      phone_number: Yup.string()
        .matches(
          /^(\+?995)?(79\d{7}|5\d{8})$/,
          "უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
        )
        .required("სავალდებულო"),
    }),
    onSubmit: () => {
      navigate("/experience");
    },
  });
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setstore({ ...store, image: e.target.files[0].name });
    }
  };
  return (
    <styled.LeftContainer>
      <Navbar title="პირადი ინფო" page={"1/3"} />
      <styled.Form onSubmit={formik.handleSubmit}>
        <styled.NameContainer>
          <styled.Label
            color={formik.errors.name && formik.touched.name && "red"}
          >
            სახელი
            <styled.Input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onChangeCapture={(e) =>
                setstore({ ...store, name: e.target.value })
              }
              type={"text"}
              placeholder="ანზორ"
              width={"371px"}
              border={
                formik.errors.name && formik.touched.name && "1px solid red"
              }
            />
            <styled.Requirements
              color={formik.errors.name && formik.touched.name && "red"}
            >
              {formik.errors.name && formik.touched.name
                ? formik.errors.name
                : "მინიმუმ 2 ასო, ქართული ასოები"}
            </styled.Requirements>
          </styled.Label>
          <styled.Label
            color={formik.errors.surname && formik.touched.surname && "red"}
          >
            გვარი
            <styled.Input
              name="surname"
              value={formik.values.surname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onChangeCapture={(e) =>
                setstore({ ...store, surname: e.target.value })
              }
              type={"text"}
              placeholder="მუმლაძე"
              width={"371px"}
              border={
                formik.errors.surname &&
                formik.touched.surname &&
                "1px solid red"
              }
            />
            <styled.Requirements
              color={formik.errors.surname && formik.touched.surname && "red"}
            >
              {formik.errors.surname && formik.touched.surname
                ? formik.errors.surname
                : "მინიმუმ 2 ასო, ქართული ასოები"}
            </styled.Requirements>
          </styled.Label>
        </styled.NameContainer>
        <styled.FileUploadContainer>
          <styled.FileTitle
            error={formik.errors.image && formik.touched.image && "red"}
          >
            პირადი ფოტოს ატვირთვა
          </styled.FileTitle>
          <label id="label" htmlFor="upload-photo">
            ატვირთვა
          </label>
          <input
            onChange={(e) => handleFileChange(e)}
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
            name="about_me"
            value={formik.values.about_me}
            onChange={formik.handleChange}
            onChangeCapture={(e) =>
              setstore({ ...store, about_me: e.target.value })
            }
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
            onChangeCapture={(e) =>
              setstore({ ...store, email: e.target.value })
            }
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
          color={
            formik.errors.phone_number && formik.touched.phone_number && "red"
          }
          style={{ marginTop: "50px" }}
        >
          მობილურის ნომერი
          <styled.Input
            name="phone_number"
            value={formik.values.phone_number}
            onChange={formik.handleChange}
            onChangeCapture={(e) =>
              setstore({ ...store, phone_number: e.target.value })
            }
            onBlur={formik.handleBlur}
            placeholder="+995 551 12 31 12"
            border={
              formik.errors.phone_number &&
              formik.touched.phone_number &&
              "1px solid red"
            }
          />
          <styled.Requirements
            color={
              formik.errors.phone_number && formik.touched.phone_number && "red"
            }
          >
            {formik.errors.phone_number && formik.touched.phone_number
              ? formik.errors.phone_number
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
