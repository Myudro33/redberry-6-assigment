import React, { useState } from "react";
import * as styled from "./ExperienceStyled";
import Navbar from "../../Components/Navbar";
import {
  Button,
  MoreOptionsButton,
} from "../../Components/GlobalStyledComponents";
import { useFormik } from "formik";
import * as Yup from "yup";
const ExperienceForm = () => {
  const [moreOptions, setmoreOptions] = useState([{}]);
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

  return (
    <styled.LeftContainer>
      <Navbar title={"გამოცდილება"} page="2/3" />
      <styled.Form onSubmit={formik.handleSubmit} >
        {moreOptions.map((item, index) => (
          <div key={index}>
            <styled.Label color={formik.errors.position && formik.touched.position && "red"} >
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
                  formik.errors.position &&
                  formik.touched.position &&
                  "1px solid red"
                }
              />
              <styled.Requirements>მინიმუმ 2 სიმბოლო</styled.Requirements>
            </styled.Label>
            <styled.Label color={formik.errors.employer && formik.touched.employer && "red"} >
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
                  formik.errors.employer &&
                  formik.touched.employer &&
                  "1px solid red"
                }
              />
              <styled.Requirements>მინიმუმ 2 სიმბოლო</styled.Requirements>
            </styled.Label>
            <styled.DateContainer>
            <styled.Label color={formik.errors.startDate && formik.touched.startDate && "red"} >
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
              <styled.Label color={formik.errors.endDate && formik.touched.endDate && "red"} >
                დამთავრების თარიღი
                <styled.Input
                  name="endDate"
                  value={formik.values.endDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  width={"371px"}
                  type={"date"}
                  border={
                    formik.errors.endDate &&
                    formik.touched.endDate &&
                    "1px solid red"
                  }
                />
              </styled.Label>
            </styled.DateContainer>
            <styled.Label color={formik.errors.aboutJob && formik.touched.aboutJob && "red"} >
              აღწერა
              <styled.Textarea
                name="aboutJob"
                value={formik.values.aboutJob}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                error={formik.errors.aboutJob && formik.touched.aboutJob && "1px solid red"}
              />
            </styled.Label>
            <styled.Hr />
          </div>
        ))}
        <MoreOptionsButton onClick={() => setmoreOptions([...moreOptions, {}])}>
          მეტი გამოცდილების დამატება
        </MoreOptionsButton>

        <styled.NavigationContainer>
          <Button width="113px">უკან</Button>
          <Button type="submit" width="151px">
            შემდეგი
          </Button>
        </styled.NavigationContainer>
      </styled.Form>
    </styled.LeftContainer>
  );
};

export default ExperienceForm;
