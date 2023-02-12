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
  response: "",
};
const getInitialState = () => {
  const store = localStorage.getItem("store");
  return store ? JSON.parse(store) : initStore;
};

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const [store, setstore] = useState(getInitialState);
  const [imageAsFile, setimageAsFile] = useState();

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
        image: store?.image,
        phone_number: info?.phone_number,
        about_me: info?.about_me,
        file: info?.file,
      };
      localStorage.setItem("store", JSON.stringify(newStore));
      return newStore;
    });
  };

  function urltoFile(url, filename, mimeType) {
    return fetch(url)
      .then(function (res) {
        return res.arrayBuffer();
      })
      .then(function (buf) {
        return new File([buf], filename, { type: mimeType });
      });
  }

  const getFileFromBase64 = async () => {
    if (store.image !== "") {
      const newFile = await urltoFile(store.image, "CV image", "image/png");
      setimageAsFile(newFile);
    }
  };
  useEffect(() => {
    getFileFromBase64();
  }, [store]);

  const getDegreeFromId = (id) => {
    if (id === 1) {
      return "საშუალო სკოლის დიპლომი";
    } else if (id === 2) {
      return "ზოგადსაგანმანათლებლო დიპლომი";
    } else if (id === 3) {
      return "ბაკალავრი";
    } else if (id === 4) {
      return "მაგისტრი";
    } else if (id === 5) {
      return "დოქტორი";
    } else if (id === 6) {
      return "ასოცირებული ხარისხი";
    } else if (id === 7) {
      return "სტუდენტი";
    } else if (id === 8) {
      return "კოლეჯი(ხარისიხს გარეშე)";
    } else if (id === 9) {
      return "სხვა";
    } else {
      return "";
    }
  };
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
  const submitForm = async () => {
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const data = {
      name: store.name,
      surname: store.surname,
      email: store.email,
      phone_number: store.phone_number,
      experiences: store.experiences,
      educations: store.educations,
      image: imageAsFile,
      about_me: store.about_me,
    };
    const response = await axios
      .post("https://resume.redberryinternship.ge/api/cvs", data, config)
      .then((resp) => setstore({ ...store, response: resp.data }))
      .catch((error) => console.log(error));
  };

  const getImageBase64 = (e, setfile, formik) => {
    if (e.target.files[0].size < 1000000) {
      const objectUrl = URL.createObjectURL(
        new Blob([e.target.files[0]], { type: "image/png" })
      );
      setfile(objectUrl);
      formik.initialValues.file = objectUrl;
      setstore({ ...store, file: objectUrl });
      const selectedFile = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setstore({ ...store, image: reader.result.toString() });
      };
      reader.readAsDataURL(selectedFile);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      alert("ფოტო უნდა იყოს 1მბ-ზე ნაკლები");
    }
  };
  return (
    <StoreContext.Provider
      value={{
        setPersonalInfo,
        store,
        setstore,
        setExperienceInfo,
        updateExpeiencesInfo,
        setEducationsInfo,
        updateEducationsInfo,
        clearLocalStorage,
        getDegreeId,
        submitForm,
        getDegreeFromId,
        getImageBase64,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
