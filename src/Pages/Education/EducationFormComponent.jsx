import React, { useContext, useEffect, useState } from "react";
import getDegrees from "./getDegrees";
import * as styled from "../Experience/ExperienceStyled";
import { useFormik } from "formik";
import * as Yup from "yup";
import { StoreContext } from "../../Context/StoreContext";
import warning from '../../assets/warning.png'
import success from '../../assets/success.png'

const EducationFormComponent = ({ index }) => {
  const [degrees, setdegrees] = useState();
  const { store, updateEducationsInfo} = useContext(StoreContext);
  useEffect(() => {
    getDegrees(setdegrees);
  }, []);
  const formik = useFormik({
    initialValues: {
      institute: store?.educations[index].institute,
      degree_id: store?.educations[index].degree_id,
      due_date: store?.educations[index].due_date,
      description: store?.educations[index].description,
    },
    validationSchema: Yup.object({
      institute: Yup.string()
        .min(2, "მინიმუმ 2 სიმბოლო")
        .required("სავალდებულო"),
      degree_id: Yup.string().required("სავალდებულო"),
      due_date: Yup.string().required("სავალდებულო"),
      description: Yup.string().required("სავალდებულო"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  useEffect(() => {
    updateEducationsInfo(formik.values, index);
  }, [formik.values]);


  return (
    <styled.Form>
      <styled.Label
        color={formik.errors.institute && formik.touched.institute && "red"}
      >
        სასწავლებელი
        <styled.Input
          name="institute"
          value={formik.values.institute}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type={"text"}
          width="100%"
          placeholder="სასწავლებელი"
          border={formik.touched.institute?formik.errors.institute?'1px solid #EF5050':'1px solid #98E37E':'2px solid #bcbcbc'}
        />
          {formik.touched.institute && (
              <styled.ValidationIcon
                src={formik.errors.institute && formik.touched.institute?warning:success}
                alt=""
              />
            )}
        <styled.Requirements
          color={formik.errors.institute && formik.touched.institute && "red"}
        >
          {formik.errors.institute && formik.touched.institute
            ? formik.errors.institute
            : "მინიმუმ 2 სიმბოლო"}
        </styled.Requirements>
      </styled.Label>
      <styled.DateContainer>
        <styled.Label
          color={formik.errors.degree_id && formik.touched.degree_id && "red"}
        >
          ხარისხი
          <styled.Select
            value={formik.values.degree_id}
            name="degree_id"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.degree_id?formik.errors.degree_id?'1px solid #EF5050':'1px solid #98E37E':'2px solid #bcbcbc'}
          >
            <styled.Option selected disabled>აირჩიეთ ხარისხი</styled.Option>
            {degrees?.map((degree) => (
              <styled.Option key={degree.id} value={degree.title}>
                {degree.title}
              </styled.Option>
            ))}
          </styled.Select>
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
            type={"date"}
            width="371px"
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
          style={{ height: "179px" }}
          placeholder="განათლების აღწერა"
          error={formik.touched.description?formik.errors.description?'1px solid #EF5050':'1px solid #98E37E':'2px solid #bcbcbc'}
        />
          {formik.touched.description && (
              <styled.ValidationIcon
                src={formik.errors.description && formik.touched.description?warning:success}
                alt=""
              />
            )}
      </styled.Label>
      <styled.Hr />
    </styled.Form>
  );
};

export default EducationFormComponent;
