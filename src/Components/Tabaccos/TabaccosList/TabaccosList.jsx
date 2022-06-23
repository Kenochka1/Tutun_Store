import React, { useContext, useEffect, useState } from "react";
import { tabaccoContext } from "../../../Context/TabaccoContext";
import { Box, Button } from "@mui/material";
import { NavLink, useSearchParams } from "react-router-dom";
import Filter from "../../Filter/Filter";
import { cartContext } from "../../../Context/CartContext";
import ReactPaginate from "react-paginate";
import "./TabaccosList.css";

const TabaccosList = () => {
  const { getTabaccos, tabaccos, deleteTabacco } = useContext(tabaccoContext);

  const { addTabaccoToCart } = useContext(cartContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [type, setType] = useState(searchParams.get("type") || "all");

  const paramsWithType = () => {
    return {
      type: type,
      q: searchParams.get("q"),
    };
  };

  const paramsNoType = () => {
    return {
      q: searchParams.get("q") || "",
    };
  };

  useEffect(() => {
    if (searchParams.get("type")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, []);

  useEffect(() => {
    getTabaccos();
    if (type === "all") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [type, searchParams]);

  // ! Paginate======================
  const [pageNumber, setPageNumber] = useState(0);
  const tabaccosLimit = 6;
  const tabaccosVisited = pageNumber * tabaccosLimit;

  const pageCount = Math.ceil(tabaccos.length / tabaccosLimit);

  let sliceTwoIndex = tabaccosVisited + tabaccosLimit;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="mainCont__tabaccoList">
        <div className="filter" data-aos="fade-right">
          <Filter type={type} setType={setType} />
        </div>
        <div className="container__tabaccosList">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              // mt: 5,
            }}
          >
            {tabaccos
              ? tabaccos.slice(tabaccosVisited, sliceTwoIndex).map((item) => (
                  <div data-aos="zoom-in-up">
                    <div
                      className="card1 text-center m-4"
                      style={{ width: "18rem", height: "250px" }}
                    >
                      <div class="hover-effect-btn">
                        <img
                          src={item.image}
                          height="220"
                          width="290"
                          className="card-img-top"
                          alt={item.title}
                        />
                        <h6 className="title2">{item.type}</h6>
                        <h5 className="title">{item.title} </h5>

                        <div class="overlay"></div>
                        <div class="button">
                          <NavLink to={`/details/${item.id}`}>
                            <button className="topicListLook">More </button>
                          </NavLink>

                          <Button onClick={(e) => addTabaccoToCart(item)}>
                            <h4 id="cart">🛒</h4>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </Box>
          <div className="container__filter_list" data-aos="flip-right">
            <ReactPaginate
              previousLabel={"⮜"}
              nextLabel={"⮞"}
              pageCount={pageCount}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
              onPageChange={changePage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TabaccosList;
