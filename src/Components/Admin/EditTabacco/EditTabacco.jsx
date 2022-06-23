import { TextField } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { tabaccoContext } from "../../../Context/TabaccoContext";
import "./EditTabacco.css";

const EditTabacco = () => {
  const { tabaccosDetails, getTabaccosDetails, editTabacco } =
    useContext(tabaccoContext);

  let { id } = useParams();
  console.log(id, "id");
  const navigate = useNavigate();

  useEffect(() => {
    getTabaccosDetails(id);
  }, []);

  const [inpValues, setInpValues] = useState(tabaccosDetails);
  console.log(tabaccosDetails, "det");

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };

  const handleSave = (e) => {
    e.preventDefault();
    editTabacco(id, inpValues);
    navigate("/list");
  };
  console.log(inpValues);

  return (
    <>
      <div className="container-service-inputs">
        <form onSubmit={(e) => handleSave(e)}>
          <div className="fields">
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={inpValues.title}
              name="title"
              onChange={(e) => handleChange(e)}
              className="field1"
            />

            <TextField
              id="outlined-basic"
              label="Type"
              variant="outlined"
              value={inpValues.type}
              name="type"
              onChange={(e) => handleChange(e)}
              className="field2"
            />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              value={inpValues.description}
              name="description"
              onChange={(e) => handleChange(e)}
              className="field3"
            />
            <TextField
              id="outlined-basic"
              label="Price"
              variant="outlined"
              value={inpValues.price}
              name="price"
              onChange={(e) => handleChange(e)}
              className="field4"
            />
            <TextField
              id="outlined-basic"
              label="Image"
              variant="outlined"
              value={inpValues.image}
              name="image"
              onChange={(e) => handleChange(e)}
              className="field5"
            />

            <button type="submit" variant="contained" className="btnSave">
              Edit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditTabacco;
