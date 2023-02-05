import React, { useEffect, useState } from "react";
import getDegrees from "../Pages/Education/getDegrees";
import * as styled from "../Pages/Experience/ExperienceStyled";
import { useFormik } from "formik";
import * as Yup from "yup";

const EducationFormComponent = ({index,setmoreOptions}) => {
  const [degrees, setdegrees] = useState();
  useEffect(() => {
    getDegrees(setdegrees);
  }, []);
  const formik = useFormik({
    initialValues: {
      college: "",
      degree: "",
      endDate: "",
      aboutCollege: "",
    },
    validationSchema: Yup.object({
      college: Yup.string().min(2, "მინიმუმ 2 სიმბოლო").required("სავალდებულო"),
      degree: Yup.string().required("სავალდებულო"),
      endDate: Yup.string().required("სავალდებულო"),
      aboutCollege: Yup.string().required("სავალდებულო"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  useEffect(() => {
    if (
      Object.keys(formik.errors).length === 0 &&
      formik.values.aboutCollege !== "" &&
      formik.values.college !== "" &&
      formik.values.endDate !== "" &&
      formik.values.degree !== "") {
      setmoreOptions((prevOptions) =>
        prevOptions.map((item) => {
          if (item.id === index) {
            return { ...item, validate: true };
          }
          return item;
        })
      );
    }
  }, [formik.values]);

  return (
    <styled.Form>
      <styled.Label
        color={formik.errors.college && formik.touched.college && "red"}
      >
        სასწავლებელი
        <styled.Input
          name="college"
          value={formik.values.college}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type={"text"}
          width="100%"
          placeholder="სასწავლებელი"
          border={
            formik.errors.college && formik.touched.college && "1px solid red"
          }
        />
        <styled.Requirements
          color={formik.errors.college && formik.touched.college && "red"}
        >
          {formik.errors.college && formik.touched.college
            ? formik.errors.college
            : "მინიმუმ 2 სიმბოლო"}
        </styled.Requirements>
      </styled.Label>
      <styled.DateContainer>
        <styled.Label
          color={formik.errors.degree && formik.touched.degree && "red"}
        >
          ხარისხი
          <styled.Select
            value={formik.values.degree}
            name="degree"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.degree && formik.touched.degree && "1px solid red"
            }
          >
            <styled.Option selected>აირჩიეთ ხარისხი</styled.Option>
            {degrees?.map((degree) => (
              <styled.Option key={degree.id} value={degree.title}>
                {degree.title}
              </styled.Option>
            ))}
          </styled.Select>
        </styled.Label>
        <styled.Label
          color={formik.errors.endDate && formik.touched.endDate && "red"}
        >
          დამთავრების თარიღი
          <styled.Input
            name="endDate"
            value={formik.values.endDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type={"date"}
            width="371px"
            border={
              formik.errors.endDate && formik.touched.endDate && "1px solid red"
            }
          />
        </styled.Label>
      </styled.DateContainer>
      <styled.Label
        color={
          formik.errors.aboutCollege && formik.touched.aboutCollege && "red"
        }
      >
        აღწერა
        <styled.Textarea
          name="aboutCollege"
          value={formik.values.aboutCollege}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ height: "179px" }}
          placeholder="განათლების აღწერა"
          error={
            formik.errors.aboutCollege &&
            formik.touched.aboutCollege &&
            "1px solid red"
          }
        />
      </styled.Label>
      <styled.Hr />
    </styled.Form>
  );
};

export default EducationFormComponent;
