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
  educations: [],
  image: "",
  about_me: "",
  file: "",
};

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

  const updateExpeiencesInfo = (info, index) => {
    setstore((prev)=>{
    const newStore = store.experiences.map((obj) => {
      if (obj.id === index) {
        return {
          ...obj,
          position: info?.position,
          employer: info?.employer,
          start_date: info?.start_date,
          due_date:info?.due_date,
          description: info?.description,
        };
      }
      return obj; 
    });
   return {...prev,experiences:newStore}
  })
  localStorage.setItem('store',store)
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

  const setPersonalInfo = (info) => {
    setstore((prev) => {
      const newStore = {
        ...prev,
        name: info?.name,
        surname: info?.surname,
        email: info?.email,
        image: info?.image,
        phone_number: info?.phone_number,
        about_me: info?.about_me,
        file: info?.file,
      };
      localStorage.setItem("store", JSON.stringify(newStore));
      return newStore;
    });
  };
  return (
    <StoreContext.Provider
      value={{
        setPersonalInfo,
        store,
        setExperienceInfo,
        updateExpeiencesInfo,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
