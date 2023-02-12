import React, { useContext, useEffect, useState } from "react";
import * as styled from "./ExperienceStyled";
import { useFormik } from "formik";
import * as Yup from "yup";
import { StoreContext } from "../../Context/StoreContext";
import warning from '../../assets/warning.png'
import success from '../../assets/success.png'
import { ValidationIcon } from "../../Components/GlobalStyledComponents";

const ExperienceFormComponent = ({index}) => {
  const { store, updateExpeiencesInfo } = useContext(StoreContext);
  const formik = useFormik({
    initialValues: {
      position: store?.experiences[index].position,
      employer: store?.experiences[index].employer,
      start_date: store?.experiences[index].start_date,
      due_date: store?.experiences[index].due_date,
      description: store?.experiences[index].description,
    },
    validationSchema: Yup.object({
      position: Yup.string()
        .min(2, "მინიმუმ 2 სიმბოლო")
        .required("სავალდებულო"),
      employer: Yup.string()
        .min(2, "მინიმუმ 2 სიმბოლო")
        .required("სავალდებულო"),
      start_date: Yup.string().required("სავალდებულო"),
      due_date: Yup.string().required("სავალდებულო"),
      description: Yup.string().required("სავალდებულო"),
    }),
    onSubmit: (values) => {
      
    },
  });
  useEffect(() => {
    updateExpeiencesInfo(formik.values, index);
  }, [formik.values]);
  return (
    <styled.Form  onSubmit={formik.handleSubmit}>
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
          border={formik.touched.position?formik.errors.position?'1px solid #EF5050':'1px solid #98E37E':'2px solid #bcbcbc'}
        />
           {formik.touched.position && (
              <ValidationIcon
              validate={formik.errors.position && formik.touched.position?false:true}
                src={formik.errors.position && formik.touched.position?warning:success}
                alt=""
              />
            )}
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
          border={formik.touched.employer?formik.errors.employer?'1px solid #EF5050':'1px solid #98E37E':'2px solid #bcbcbc'}
        />
          {formik.touched.employer && (
              <ValidationIcon
              validate={formik.errors.employer && formik.touched.employer?false:true}
                src={formik.errors.employer && formik.touched.employer?warning:success}
                alt=""
              />
            )}
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
          color={formik.errors.start_date && formik.touched.start_date && "red"}
        >
          დაწყების თარიღი
          <styled.Input
            name="start_date"
            value={formik.values.start_date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            width={"371px"}
            type={"date"}
            border={formik.touched.start_date?formik.errors.start_date?'1px solid #EF5050':'1px solid #98E37E':'2px solid #bcbcbc'}
          />
        </styled.Label>
        <styled.Label
          color={formik.errors.due_date && formik.touched.due_date && "red"}
        >
          დამთავრების თარიღი
          <styled.Input
            name="due_date"
            value={formik.values.due_date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            width={"371px"}
            type={"date"}
            border={formik.touched.due_date?formik.errors.due_date?'1px solid #EF5050':'1px solid #98E37E':'2px solid #bcbcbc'}
          />
        </styled.Label>
      </styled.DateContainer>
      <styled.Label
        color={formik.errors.description && formik.touched.description && "red"}
      >
        აღწერა
        <styled.Textarea
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          error={formik.touched.description?formik.errors.description?'1px solid #EF5050':'1px solid #98E37E':'2px solid #bcbcbc'}
        />
          {formik.touched.description && (
              <ValidationIcon
              validate={formik.errors.description && formik.touched.description?false:true}
                src={formik.errors.description && formik.touched.description?warning:success}
                alt=""
              />
            )}
      </styled.Label>
      <styled.Hr />
    </styled.Form>
  );
};

export default ExperienceFormComponent;
