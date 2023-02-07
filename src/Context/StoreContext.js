import { createContext, useEffect, useState } from "react";

const initStore = {
    name: "",
    surname: "",
    email: "",
    phone_number: "",
    experiences: [],
    educations: [],
    image: "",
    about_me: "",
    file:''
};

const getInitialState = () =>{
    const store= localStorage.getItem('store')
    return store? JSON.parse(store) : initStore
}


export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const [store, setstore] = useState(getInitialState);

useEffect(()=>{
    localStorage.setItem('store',JSON.stringify(store))
},[store])


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
        file:info?.file
      };
      localStorage.setItem("store", JSON.stringify(newStore));
      return newStore;
    });
  }
  return (
    <StoreContext.Provider value={{ setPersonalInfo, store }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider