import axios from "axios";
import { createContext, useEffect, useState } from "react";

const initStore = {
  name: "",
  surname: "",
  email: "",
  phone_number: "",
  experiences: [
    {
      id: 0,
      position: "",
      employer: "",
      start_date: "",
      due_date: "",
      description: "",
    },
  ],
  educations: [
    {
      id: 0,
      institute: "",
      due_date: "",
      description: "",
      degree_id: "",
    },
  ],
  image: "",
  about_me: "",
  file: "",
};
const formData = new FormData();

const getInitialState = () => {
  const store = localStorage.getItem("store");
  return store ? JSON.parse(store) : initStore;
};

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const [store, setstore] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(store));
  }, [store]);

  const clearLocalStorage = () => {
    setstore(initStore);
  };
  const updateExpeiencesInfo = (info, index) => {
    setstore((prev) => {
      const newStore = store.experiences.map((obj) => {
        if (obj.id === index) {
          return {
            ...obj,
            position: info?.position,
            employer: info?.employer,
            start_date: info?.start_date,
            due_date: info?.due_date,
            description: info?.description,
          };
        }
        return obj;
      });
      return { ...prev, experiences: newStore };
    });
    localStorage.setItem("store", JSON.stringify(store));
  };

  const updateEducationsInfo = (info, index) => {
    setstore((prev) => {
      const newStore = store.educations.map((obj) => {
        if (obj.id === index) {
          return {
            ...obj,
            institute: info?.institute,
            degree_id: getDegreeId(info?.degree_id),
            due_date: info?.due_date,
            description: info?.description,
          };
        }
        return obj;
      });
      return { ...prev, educations: newStore };
    });
    localStorage.setItem("store", store);
  };

  const setExperienceInfo = () => {
    setstore((prev) => {
      const newStore = {
        ...prev,
        experiences: [
          ...prev.experiences,
          {
            id: store.experiences.length,
            position: "",
            employer: "",
            start_date: "",
            due_date: "",
            description: "",
          },
        ],
      };
      localStorage.setItem("store", JSON.stringify(newStore));
      return newStore;
    });
  };

  const setEducationsInfo = () => {
    setstore((prev) => {
      const newStore = {
        ...prev,
        educations: [
          ...prev.educations,
          {
            id: store.educations.length,
            institute: "",
            degree_id: "",
            due_date: "",
            description: "",
          },
        ],
      };
      localStorage.setItem("store", JSON.stringify(newStore));
      return newStore;
    });
  };

  const setPersonalInfo = (info) => {
    setstore((prev) => {
      const newStore = {
        ...prev,
        name: info?.name,
        surname: info?.surname,
        email: info?.email,
        image: dataURLtoFile(
          "data:image/png;base64,aGVsbG8gd29ybGQ=",
          info?.image
        ),
        phone_number: info?.phone_number,
        about_me: info?.about_me,
        file: info?.file,
      };
      localStorage.setItem("store", JSON.stringify(newStore));
      return newStore;
    });
  };

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  const getDegreeId = (degree) => {
    if (degree === "საშუალო სკოლის დიპლომი") {
      return 1;
    } else if (degree === "ზოგადსაგანმანათლებლო დიპლომი") {
      return 2;
    } else if (degree === "ბაკალავრი") {
      return 3;
    } else if (degree === "მაგისტრი") {
      return 4;
    } else if (degree === "დოქტორი") {
      return 5;
    } else if (degree === "ასოცირებული ხარისხი") {
      return 6;
    } else if (degree === "სტუდენტი") {
      return 7;
    } else if (degree === "კოლეჯი(ხარისიხს გარეშე)") {
      return 8;
    } else if (degree === "სხვა") {
      return 9;
    }
  };
  const submitForm = async() => {
    formData.append("name", store.name);
    formData.append("surname", store.surname);
    formData.append("email", store.email);
    formData.append("phone_number", store.phone_number);
    formData.append("experiences", JSON.stringify(store.experiences));
    formData.append("educations", JSON.stringify(store.educations));
    formData.append("image", store.image);
    formData.append("about_me", store.about_me);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
       const response = await axios.post("https://resume.redberryinternship.ge/api/cvs", formData, config)
      .then((resp) => resp)
      .catch((error) => alert(JSON.stringify(error.response.data.errors)));
      return response
  };

  return (
    <StoreContext.Provider
      value={{
        setPersonalInfo,
        store,
        setExperienceInfo,
        updateExpeiencesInfo,
        setEducationsInfo,
        updateEducationsInfo,
        clearLocalStorage,
        getDegreeId,
        submitForm,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
