import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useLocation } from "react-router-dom";

export const tabaccoContext = createContext();

const API = "http://localhost:8000/tabaccos";

const INIT_STATE = {
  tabaccos: [],
  tabaccosDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TABACCOS":
      return { ...state, tabaccos: action.payload };
    case "GET_TABACCOS_DETAILS":
      return { ...state, tabaccosDetails: action.payload };
    default:
      return state;
  }
};

const TabaccoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();
  console.log(location.search);

  const addTabacco = async (newTabacco) => {
    await axios.post(API, newTabacco);
  };

  const getTabaccos = async () => {
    const { data } = await axios.get(`${API}${location.search}`);
    dispatch({
      type: "GET_TABACCOS",
      payload: data,
    });
  };

  const getTabaccosDetails = async (id) => {
    const { data } = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_TABACCOS_DETAILS",
      payload: data,
    });
  };

  const deleteTabaccos = async (id) => {
    await axios.delete(`${API}/${id}`);
    getTabaccos();
  };

  const editTabacco = async (id, prodObj) => {
    await axios.patch(`${API}/${id}`, prodObj);
    getTabaccos();
  };

  return (
    <tabaccoContext.Provider
      value={{
        tabaccos: state.tabaccos,
        tabaccosDetails: state.tabaccosDetails,
        addTabacco,
        getTabaccos,
        getTabaccosDetails,
        deleteTabaccos,
        editTabacco,
      }}
    >
      {children}
    </tabaccoContext.Provider>
  );
};

export default TabaccoContextProvider;
