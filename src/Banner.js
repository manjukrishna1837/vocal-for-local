/** @format */

import React, { useState } from "react";
import { Button } from "@material-ui/core";
function Banner() {
  return (
    <div className="banner">
      <div className="banner__one">
        <Button className="banner__category">
          <div className="banner_imagecontiner__one">
            <img
              src="https://img.icons8.com/doodle/48/000000/electrical.png"
              alt="electrical"
            />
            <h5>Electrical</h5>
          </div>
        </Button>
        <Button className="banner__category">
          <div className="banner_imagecontiner__one">
            <img
              src="https://img.icons8.com/ultraviolet/48/000000/electronics.png"
              alt="electronics"
            />
            <h5>Electronics</h5>
          </div>
        </Button>
        <Button className="banner__category">
          <div className="banner_imagecontiner__one">
            <img
              src="https://img.icons8.com/color/48/000000/grocery-bag.png"
              alt="groceries"
            />
            <h5>Groceries</h5>
          </div>
        </Button>{" "}
        <Button className="banner__category">
          <div className="banner_imagecontiner__one">
            <img
              src="https://img.icons8.com/office/48/000000/5-star-hotel.png"
              alt="hotel"
            />
            <h5>Restaurant</h5>
          </div>
        </Button>
        <Button className="banner__category">
          <div className="banner_imagecontiner__one">
            <img
              src="https://img.icons8.com/color/48/000000/furniture.png"
              alt="furniture"
            />
            <h5>Furnitures</h5>
          </div>
        </Button>
        <Button className="banner__category">
          <div className="banner_imagecontiner__one">
            <img
              src="https://img.icons8.com/fluent/48/000000/clothes.png"
              alt="clothes"
            />
            <h5>Clothes</h5>
          </div>
        </Button>
      </div>
      <div className="banner__two">
        <Button className="banner__category">
          <div className="banner_imagecontiner__two">
            <img
              src="https://img.icons8.com/color/48/000000/android.png"
              alt="mobile"
            />
            <h5>Electronic devices</h5>
          </div>
        </Button>
        <Button className="banner__category">
          <div className="banner_imagecontiner__two">
            <img
              src="https://img.icons8.com/flat_round/48/000000/biscuits.png"
              alt="bakery"
            />
            <h5>Bakery</h5>
          </div>
        </Button>
        <Button className="banner__category">
          <div className="banner_imagecontiner__two">
            <img
              src="https://img.icons8.com/office/48/000000/spring.png"
              alt="flower"
            />
            <h5>Flower shop</h5>
          </div>
        </Button>
        <Button className="banner__category">
          <div className="banner_imagecontiner__two">
          <img src="https://img.icons8.com/fluent/48/000000/stationery.png" alt="stationery"/>
            <h5>Stationery</h5>
          </div>
        </Button>
        <Button className="banner__category">
          <div className="banner_imagecontiner__two">
          <img src="https://img.icons8.com/plasticine/48/000000/jake.png" alt="pet shop"/>
            <h5>Pet Essentials</h5>
          </div>
        </Button>
      </div>
  
    </div>
  );
}

export default Banner;
