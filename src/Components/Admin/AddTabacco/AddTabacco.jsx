import { Button, TextField } from "@mui/material";
import "./AddTabacco.css";
import React, { useContext, useState } from "react";
import { tabaccoContext } from "../../../Context/TabaccoContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initObj = {
  title: "",
  type: "",
  description: "",
  price: 0,
  image: "",
};

const AddTabacco = () => {
  const { addTabacco } = useContext(tabaccoContext);
  const [inpValues, setInpValues] = useState(initObj);

  const alertToastify = () => {
    toast.error("Заполните все поля!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
    console.log(obj);
  };

  const clearInput = () => {
    setInpValues(initObj);
  };

  const handleSave = (e) => {
    if (
      inpValues.title.trim() === "" ||
      inpValues.type.trim() === "" ||
      inpValues.description.trim() === "" ||
      inpValues.price.toString().trim() === "" ||
      inpValues.image.trim() === ""
    ) {
      alertToastify();
      return;
    }
    e.preventDefault();
    addTabacco(inpValues);
    clearInput();
  };

  return (
    <div className="mainContainer__addTabacco">
      <form className="inp" onSubmit={(e) => handleSave(e)}>
        <div className="container__addTabacco">
          <TextField
            id="outlined-basic"
            label="Название"
            variant="outlined"
            value={inpValues.title}
            name="title"
            onChange={(e) => handleChange(e)}
            className="inp1"
          />
          <TextField
            id="outlined-basic"
            label="Тип"
            variant="outlined"
            value={inpValues.type}
            name="type"
            onChange={(e) => handleChange(e)}
            className="inp2"
          />
          <TextField
            id="outlined-basic"
            label="Описание"
            variant="outlined"
            value={inpValues.description}
            name="description"
            onChange={(e) => handleChange(e)}
            className="inp3"
          />
          <TextField
            id="outlined-basic"
            type="number"
            label="Цена"
            variant="outlined"
            value={inpValues.price}
            name="price"
            onChange={(e) => handleChange(e)}
            className="inp4"
          />
          <TextField
            id="outlined-basic"
            label="Изображение"
            variant="outlined"
            value={inpValues.image}
            name="image"
            onChange={(e) => handleChange(e)}
            className="inp5"
          />
          <div>
            <button
              onClick={handleSave}
              type="button"
              variant="contained"
              className="btnSave"
              style={{ marginBottom: "30px" }}
            >
              Add
            </button>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTabacco;
