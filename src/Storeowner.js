import React from 'react'
import "./Shopowner.css"
import { Button } from "@material-ui/core";

function Shopowner() {
    return (
      <div className="shopowner">
        <div className="shopowner__continer">
          <div className="shopowner__text">
            <h4>
               Requseted for the <span>pen </span> form
              your Shop
            </h4>
          </div>
          <div className="shopowner__buttons">
            <Button variant="outlined">INstock</Button>
            <Button variant="outlined">OutofStock</Button>
          </div>
        </div>
        <div className="shopowner__continer">
          <div className="shopowner__text">
            <h4>Requseted for the Pen form your Shop</h4>
          </div>
          <div className="shopowner__buttons">
            <Button variant="outlined">INstock</Button>
            <Button variant="outlined" className="shopowner__button">
              Out of Stock
            </Button>
          </div>
        </div>
      </div>
    );
}

export default Shopowner
