import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";
const Item = ({ menuItems }) => {
  return (
    <section>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {menuItems.map((items) => {
          return (
            <div className="col">
              <div className="card h-100 border-0 shadow-lg rounded">
                <img src={items.img} className=" w-75 mx-auto pt-4" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{items.name}</h5>
                  <p className="card-text gray">{items.desc}</p>
                  <h4>{items.price}</h4>
                  <Link to={`/food/${items.id}`}>Go</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Item;
