import React, { useEffect } from "react";
import * as styled from "../Pages/Experience/ExperienceStyled";
import { useFormik } from "formik";
import * as Yup from "yup";

const ExperienceFormComponent = ({ index, setmoreOptions }) => {
  const formik = useFormik({
    initialValues: {
      position: "",
      employer: "",
      startDate: "",
      endDate: "",
      aboutJob: "",
    },
    validationSchema: Yup.object({
      position: Yup.string()
        .min(2, "მინიმუმ 2 სიმბოლო")
        .required("სავალდებულო"),
      employer: Yup.string()
        .min(2, "მინიმუმ 2 სიმბოლო")
        .required("სავალდებულო"),
      startDate: Yup.string().required("სავალდებულო"),
      endDate: Yup.string().required("სავალდებულო"),
      aboutJob: Yup.string().required("სავალდებულო"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  useEffect(() => {
    if (
      Object.keys(formik.errors).length === 0 &&
      formik.values.aboutJob !== "" &&
      formik.values.employer !== "" &&
      formik.values.endDate !== "" &&
      formik.values.position !== "" &&
      formik.values.startDate !== ""
    ) {
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
    <styled.Form onSubmit={formik.handleSubmit}>
      <styled.Label
        color={formik.errors.position && formik.touched.position && "red"}
      >
        თანამდებობა
        <styled.Input
          name="position"
          value={formik.values.position}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          width={"100%"}
          placeholder="დველოპერი, დიზაინერი, ა.შ"
          type={"text"}
          border={
            formik.errors.position && formik.touched.position && "1px solid red"
          }
        />
        <styled.Requirements
          color={formik.errors.position && formik.touched.position && "red"}
        >
          {formik.errors.position && formik.touched.position
            ? formik.errors.position
            : "მინიმუმ 2 სიმბოლო,"}
        </styled.Requirements>
      </styled.Label>
      <styled.Label
        color={formik.errors.employer && formik.touched.employer && "red"}
      >
        დამსაქმებელი
        <styled.Input
          name="employer"
          value={formik.values.employer}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          width={"100%"}
          placeholder="დამსაქმებელი"
          type={"text"}
          border={
            formik.errors.employer && formik.touched.employer && "1px solid red"
          }
        />
        <styled.Requirements
          color={formik.errors.employer && formik.touched.employer && "red"}
        >
          {formik.errors.employer && formik.touched.employer
            ? formik.errors.employer
            : "მინიმუმ 2 სიმბოლო,"}
        </styled.Requirements>
      </styled.Label>
      <styled.DateContainer>
        <styled.Label
          color={formik.errors.startDate && formik.touched.startDate && "red"}
        >
          დაწყების თარიღი
          <styled.Input
            name="startDate"
            value={formik.values.startDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            width={"371px"}
            type={"date"}
            border={
              formik.errors.startDate &&
              formik.touched.startDate &&
              "1px solid red"
            }
          />
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
            width={"371px"}
            type={"date"}
            border={
              formik.errors.endDate && formik.touched.endDate && "1px solid red"
            }
          />
        </styled.Label>
      </styled.DateContainer>
      <styled.Label
        color={formik.errors.aboutJob && formik.touched.aboutJob && "red"}
      >
        აღწერა
        <styled.Textarea
          name="aboutJob"
          value={formik.values.aboutJob}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          error={
            formik.errors.aboutJob && formik.touched.aboutJob && "1px solid red"
          }
        />
      </styled.Label>
      <styled.Hr />
    </styled.Form>
  );
};

export default ExperienceFormComponent;
