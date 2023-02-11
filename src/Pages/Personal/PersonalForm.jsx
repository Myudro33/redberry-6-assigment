import React, { useContext, useEffect, useState } from "react";
import * as styled from "./PersonalStyled";
import Navbar from "../../Components/Navbar";
import { Button } from "../../Components/GlobalStyledComponents";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { StoreContext } from "../../Context/StoreContext";
import warning from "../../assets/warning.png";
import success from "../../assets/success.png";
const PersonalForm = () => {
  const { setPersonalInfo, store,setstore } = useContext(StoreContext);
  const [file, setfile] = useState(store.file);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: store?.name,
      surname: store?.surname,
      email: store?.email,
      phone_number: store?.phone_number,
      about_me: store?.about_me,
      image: store?.image,
      file: file,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "მინიმუმ 2 ასო")
        .matches(/^[\u10A0-\u10FF]+$/, "მხოლოდ ქართული ასოები")
        .required("სავალდებულო"),
      surname: Yup.string()
        .min(2, "მინიმუმ 2 ასო")
        .matches(/^[\u10A0-\u10FF]+$/, "მხოლოდ ქართული ასოები")
        .required("სავალდებულო"),
      file: Yup.string().required("სავალდებულო"),
      email: Yup.string()
        .matches(/.*\@redberry.ge$/, "უნდა მთავრდებოდეს @redberry.ge-ით")
        .required("სავალდებულო"),
      phone_number: Yup.string()
        .matches(
          /^(\+995)?(5[0-9]{8})$/,
          "უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
        )
        .required("სავალდებულო"),
    }),
    onSubmit: () => {
      setPersonalInfo(formik.values);
      navigate("/experience");
    },
  });
  useEffect(() => {
    setPersonalInfo(formik.values);
  }, [formik.values]);

  const handleChange = (e) => {
    const objectUrl = URL.createObjectURL(
      new Blob([e.target.files[0]], { type: "image/png" })
    );
    setfile(objectUrl);
    formik.initialValues.file = objectUrl;
    const selectedFile = e.target.files[0]
    const reader = new FileReader();
    reader.onloadend = () =>{
      setstore({...store,image:reader.result.toString()})
    }
    reader.readAsDataURL(selectedFile)
    return () => URL.revokeObjectURL(objectUrl);
  };

  useEffect(() => {
    formik.values.file = file;
    setPersonalInfo(formik.initialValues);
  }, [file, formik.initialValues]);

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
              type={"text"}
              placeholder="ანზორ"
              width={"371px"}
              border={
                formik.errors.name && formik.touched.name && "1px solid red"
              }
            />
            {formik.touched.name && (
              <styled.ValidationIcon
                src={formik.errors.name && formik.touched.name?warning:success}
                alt=""
              />
            )}
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
              type={"text"}
              placeholder="მუმლაძე"
              width={"371px"}
              border={
                formik.errors.surname &&
                formik.touched.surname &&
                "1px solid red"
              }
            />
               {formik.touched.surname && (
              <styled.ValidationIcon
                src={formik.errors.surname && formik.touched.surname?warning:success}
                alt=""
              />
            )}
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
            error={formik.errors.file && formik.touched.file && "red"}
          >
            პირადი ფოტოს ატვირთვა
          </styled.FileTitle>
          <label id="label" htmlFor="upload-photo">
            ატვირთვა
          </label>
          <input
            onChangeCapture={(e) => handleChange(e)}
            onBlur={formik.handleBlur}
            value={undefined}
            name="image"
            type="file"
            id="upload-photo"
          />
             {formik.touched.file && (
              <styled.ValidationIcon
              style={{top:5}}
                src={formik.errors.file && formik.touched.file?warning:success}
                alt=""
              />
            )}
        </styled.FileUploadContainer>
        <styled.Label style={{ marginTop: "50px" }}>
          ჩემს შესახებ (არასავალდებულო)
          <styled.Textarea
            name="about_me"
            value={formik.values.about_me}
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
             {formik.touched.email && (
              <styled.ValidationIcon
                src={formik.errors.email && formik.touched.email?warning:success}
                alt=""
              />
            )}
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
            onBlur={formik.handleBlur}
            placeholder="+995 551 12 31 12"
            border={
              formik.errors.phone_number &&
              formik.touched.phone_number &&
              "1px solid red"
            }
          />
             {formik.touched.phone_number && (
              <styled.ValidationIcon
                src={formik.errors.phone_number && formik.touched.phone_number?warning:success}
                alt=""
              />
            )}
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
