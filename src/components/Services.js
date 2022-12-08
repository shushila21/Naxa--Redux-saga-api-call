import "./services.css";
import Navbar from "./Navbar";
import { callApi } from "../redux/serviceAction";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef } from "react";
import { textAlign } from "@mui/system";

function Services() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.serviceData);
  console.log("console", data);

  useEffect(() => {
    dispatch(callApi());
  }, []);

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  };
  return (
    <div>
      <div className="main">
        <Navbar />
        <div className="banner-caption">
          <div className="container">
            <div className="caption-content caption-dark">
              <h2 style={{textAlign:"left", color:"orange", fontSize:"22px", fontWeight:700}}>SERVICES</h2>
              <h3 style={{fontSize:"20px", fontWeight: "700", textAlign:"left", marginTop:"20px"}}>
                At <span style={{ color: "#124af4" }}>NAXA</span>, we work on{" "}
                <span style={{ color: "#124af4" }}>ideas</span>; ideas that can
                provide{" "}
                <span style={{ color: "#124af4" }}>simple solutions</span> to{" "}
                <span style={{ color: "#124af4" }}>complex problems</span>.
              </h3>
              <p style={{fontSize:"20px", marginTop:"35px", textAlign:"left"}}>
                We work as a team to generate, explore, build and validate
                ideas. We also contextualize innovations around the world to
                find the best fitting solutions to local problems.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
      <div className="card">
        <div className="items">
          <div className="list-item" role="button">
            <a  onClick={handleClick}>Software &amp; Apps Development</a>
          </div>
          <div className="list-item" role="button">
            <a>GIS Mapping &amp; Analysis</a>
          </div>
          <div className="list-item" role="button">
            <a onClick={handleClick}>Data Collection &amp; Visualization</a>
          </div>

          <div className="list-item" role="button">
            <a onClick={handleClick}>Frontier Technologies (Drones, VR..)</a>
          </div>
          <div className="list-item" role="button">
            <a onClick={handleClick}>
              Training &amp; Capacity building (GIS and Web GIS)
            </a>
          </div>
          <div className="list-item" role="button">
            <a onClick={handleClick}>ICT &amp; Digital Development Research</a>
          </div>
          <div className="list-item" role="button">
            <a onClick={handleClick}>Creative Graphic Design</a>
          </div>
        </div>
      </div>
      </div>

      <div className="container" ref={ref}>
        {data.map((item) => (
          <div className="content" key={item.service_order} >
            <img src={item.photo} className="image" alt="" /> 
            <div className="desc">
          <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NS43MzYiIGhlaWdodD0iNzEuMTY2IiB2aWV3Qm94PSIwIDAgNzUuNzM2IDcxLjE2NiI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzczOGRmZjt9LmJ7ZmlsbDojMDAxYWNiO30uY3tmaWxsOiMwNWY7fS5ke2ZpbGw6I2EwYWVmZjt9LmV7ZmlsbDojZmZkYzFjO30uZntmaWxsOiNmZmFiMDA7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJhIiBkPSJNNDEuOTcsODAuMkgyNS4xNWw4LjE3MywyMi43MjFoMTYuODJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcuOTMxIC0zMS45MTgpIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik00MCw4Mmw4LjE4OSw3LjE1NUw0NS42MTcsODJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjEuMDY2IC0zMi4yOTgpIi8+PHJlY3QgY2xhc3M9ImMiIHdpZHRoPSIyMi4wMTkiIGhlaWdodD0iMjguNDAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDIxLjMwMSkiLz48cGF0aCBjbGFzcz0iYyIgZD0iTTQwLDQwLjMsODQuOTY4LDE5VjkwTDQwLDY4LjdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjEuMDY2IC0xOSkiLz48cmVjdCBjbGFzcz0iZCIgd2lkdGg9IjkiIGhlaWdodD0iNzEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU2Ljg2MyAwLjE2NikiLz48cGF0aCBjbGFzcz0iZSIgZD0iTTEwMCw1MlY3MC45MzRsOS40NjctMy4xNTZWNTUuMTU2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMzLjczMSAtMjUuOTY2KSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNODcuMzMxLDIzLjI2bC0yLjUsNjMuMDksMi41LDEuMTkxaDBWMjMuMjZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzAuNTI5IC0xOS44OTkpIi8+PHBhdGggY2xhc3M9ImYiIGQ9Ik0xMDAsNTJWNzAuOTM0bDIuMDc1LS42OTRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzMuNzMxIC0yNS45NjYpIi8+PC9zdmc+"
              alt="" className="img-fluid mt-5"
            /> 
            <div className="title mt-5" >{item.title}</div>
            <div className="para-first">{item.description1}</div>
            <div className="para-second" >{item.description2}</div>
            </div>
            </div>
        ))}
      </div>

      <div className="container">
        
      </div>
    </div>
  );
}

export default Services;
