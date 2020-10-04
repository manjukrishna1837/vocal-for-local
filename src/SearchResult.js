/** @format */

import React from "react";
import StarIcon from "@material-ui/icons/Star";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import { Button, Card } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  phone
}) {
  const histroy = useHistory();

  return (
    <Card className="searchResult" onClick={() => histroy.push("/desc")}>
      <img src={img} alt="" />
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <h3>{title}</h3>
          <p>{description}</p>
          <h5>
            <LocationOnIcon className="icon__style" /> {location}
          </h5>
          <h5 className="phone">
            <PhoneIcon className="icon__style" /> {phone}
          </h5>
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResults__price">
            <h2>{price}</h2>
          </div>
        </div>
      </div>
    </Card>
  );
}
