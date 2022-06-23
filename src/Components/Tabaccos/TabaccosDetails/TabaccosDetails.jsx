import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { tabaccoContext } from "../../../Context/TabaccoContext";
import "./TabaccosDetails.css";

const TabaccosDetails = () => {
  const { tabaccosDetails, getTabaccosDetails, deleteTabaccos } =
    useContext(tabaccoContext);
  let { id } = useParams();
  useEffect(() => {
    getTabaccosDetails(id);
  }, []);
  return (
    <>
      <>
        <div className="container__tabaccosDetails">
          <div className="container__tabacco__left">
            <p className="topicDetailsPT1" data-aos="fade-right">
              {tabaccosDetails.type}
            </p>
            <h3 className="topicDetailsH3" data-aos="fade-right">
              {tabaccosDetails.title}
            </h3>
            <p className="topicDetailsPT2" data-aos="fade-right">
              {tabaccosDetails.description}
            </p>
            <p className="topicDetailsPT3" data-aos="fade-up-right">
              Price: {tabaccosDetails.price}
            </p>
            <div className="topicDetailsButtons">
              <NavLink to={`/edit/${id}`}>
                <button className="btnCrud" data-aos="fade-up" id="edit">
                  Edit
                </button>
              </NavLink>
              <NavLink to="/list">
                <button
                  className="btnCrud"
                  data-aos="fade-up"
                  id="del"
                  onClick={() => deleteTabaccos(id)}
                >
                  Delete
                </button>
              </NavLink>
            </div>
          </div>
          <div className="container__tabacco__right" data-aos="fade-left">
            <img id="imgCards" src={tabaccosDetails.image} alt="img" />
          </div>
        </div>
      </>
    </>
  );
};

export default TabaccosDetails;
