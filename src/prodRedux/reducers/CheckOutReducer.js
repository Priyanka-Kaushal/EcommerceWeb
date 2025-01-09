import {
    EMAIL,
    NAME,
    LASTNAME,
    ADRESS,
    AREA,
    POSTALCODE,
    SAVE_INFO,
  } from "../action/ActionType";

  
  const initialState = {
    email: localStorage.getItem("email") || "",
    name: localStorage.getItem("name") || "",
    lastName: localStorage.getItem("lastName") || "",
    address: localStorage.getItem("address") || "",
    area: localStorage.getItem("area") || "",
    postalCode: localStorage.getItem("postalCode") || "",
    saveInfo: localStorage.getItem("saveInfo") === "true", 
  };

  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case EMAIL:
        localStorage.setItem("email", action.payload);
        return { ...state, email: action.payload };
  
  
      case NAME:
        localStorage.setItem("name", action.payload);
        return { ...state, name: action.payload };
  
      case LASTNAME:
        localStorage.setItem("lastName", action.payload);
        return { ...state, lastName: action.payload };
  
      case ADRESS:
        localStorage.setItem("address", action.payload);
        return { ...state, address: action.payload };
  
      case AREA:
        localStorage.setItem("area", action.payload);
        return { ...state, area: action.payload };
  
      case POSTALCODE:
        localStorage.setItem("postalCode", action.payload);
        return { ...state, postalCode: action.payload };
  
      case SAVE_INFO:
        localStorage.setItem("saveInfo", action.payload);
        return { ...state, saveInfo: action.payload };
  
      default:
        return state;
    }
  };
  
  export default userReducer;