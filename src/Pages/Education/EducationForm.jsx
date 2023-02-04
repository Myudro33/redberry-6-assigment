import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import getDegrees from "./getDegrees";
import * as styled from "../Experience/ExperienceStyled";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import {
  Button,
  MoreOptionsButton,
} from "../../Components/GlobalStyledComponents";
import { Link } from "react-router-dom";

const EducationForm = () => {
    const [degrees, setdegrees] = useState();
    const [selectedDegree, setselectedDegree] = useState("");
    const [moreOptions, setmoreOptions] = useState([{}]);
    useEffect(() => {
      getDegrees(setdegrees);
    }, []);
  return (
    <styled.LeftContainer>
    <Navbar page={"3/3"} title="განათლება" />
    <styled.Form>
      {moreOptions.map((item, index) => (
        <div key={index}>
          <styled.Label>
            სასწავლებელი
            <styled.Input
              type={"text"}
              width="100%"
              placeholder="სასწავლებელი"
            />
            <styled.Requirements>მინიმუმ 2 სიმბოლო</styled.Requirements>
          </styled.Label>
          <styled.DateContainer>
            <styled.Label>
              ხარისხი
              <FormControl sx={{ my: 1, minWidth: "371px" }} size="medium">
                <InputLabel
                  id="demo-select-large"
                  sx={{ width: "150px", backgroundColor: "#F9F9F9" }}
                >
                  აირჩიეთ ხარისხი
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="Age"
                  sx={{ height: "48px" }}
                  value={selectedDegree}
                  onChange={(e) => setselectedDegree(e.target.value)}
                >
                  {degrees?.map((degree) => (
                    <MenuItem key={degree.id} value={degree.title}>
                      {degree.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </styled.Label>
            <styled.Label>
              დამთავრების თარიღი
              <styled.Input type={"date"} width="371px" />
            </styled.Label>
          </styled.DateContainer>
          <styled.Label>
            აღწერა
            <styled.Textarea
              style={{ height: "179px" }}
              placeholder="განათლების აღწერა"
            />
          </styled.Label>
          <styled.Hr />
        </div>
      ))}
      <MoreOptionsButton
        onClick={() => setmoreOptions([...moreOptions, {}])}
      >
        სხვა სასწავლებლის დამატება
      </MoreOptionsButton>
      <styled.NavigationContainer style={{ marginTop: "150px" }}>
        <Link to={"/experience"}>
          <Button width="113px">უკან</Button>
        </Link>
        <Link to={"/resume"}>
          <Button width="151px">დასრულება</Button>
        </Link>
      </styled.NavigationContainer>
    </styled.Form>
  </styled.LeftContainer>
  )
}

export default EducationForm