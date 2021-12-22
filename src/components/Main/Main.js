import React, { useState } from "react";

import items from "../../foods.js";
import image1 from "../../images/adult-blur-blurred-background-687824.png";
import image2 from "../../images/chef-cook-food-33614.png";
import image3 from "../../images/architecture-building-city-2047397.png";
import icon1 from "../../images/Group 204.png";
import icon2 from "../../images/Group 1133.png";
import icon3 from "../../images/Group 245.png";
import Item from "../Item/Item.js";
import Categories from "../Categories/Categories.js";
import "./Main.css";

const Main = () => {
  const [menuItems, setMenuItems] = useState(items);
  const filterItems = (category) => {
    if (category == "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <>
      <main className="container-fluid my-2">
        <div className="d-flex align-items-center justify-content-center">
        <h1>Best food waiting for your Belly</h1>

        </div>
        <section>
          <input
            className="search-field"
            type="text"
            placeholder="Search food item"
          />
          <button
            className="btn btn-danger px-3"
            style={{ borderRadius: "50px", marginBottom: "4px" }}
          >
            Search
          </button>
        </section>
      </main>
      <section className="container my-3">
        <Categories filterItems={filterItems}></Categories>
        <Item menuItems={menuItems}></Item>
      </section>
      <section className="container my-5">
        <h2 className="text-start">Why you choose us</h2>
        <p className="text-start mb-4">
          Barton waited twenty always repair in within we do. An delighted
          offending <br /> curiosity my is dashwood at.Boy prosperous increasing
          surrounded.
        </p>

        {/* cards section  */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card border-0">
              <img src={image1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title d-flex">
                  <img src={icon1} alt="" />
                  <h5 className="mx-3">Fast Delivery</h5>
                </h5>
                <p className="card-text text-start">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img src={image2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title d-flex">
                  <img src={icon2} alt="" />
                  <h5 className="mx-3">A Good auto responder</h5>
                </h5>
                <p className="card-text text-start">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img src={image3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title d-flex">
                  <img src={icon3} alt="" />
                  <h5 className="mx-3">Auto Delivery</h5>
                </h5>
                <p className="card-text text-start">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
