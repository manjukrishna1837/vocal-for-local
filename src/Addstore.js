/** @format */

import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Addshop() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetdescription, settweetdescription] = useState("");
  const [tweetLocation, settweetLocation] = useState("");
  const [tweetphone, settweetphone] = useState();
  //vadda boss
  const histroy = useHistory();

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetbox_div">
          <div className="tweetbox_title">
            <h3>ADD SHOP</h3>
          </div>
          <div className="tweetBox__input">
            <input
              onChange={(e) => setTweetMessage(e.target.value)}
              value={tweetMessage}
              placeholder="Add Shop name"
              type="text"
            ></input>
            <h3>
              Add Shop image
              <input type="file" className="image__input"></input>
            </h3>
            <textarea
              placeholder="Add Shop description"
              onChange={(e) => settweetdescription(e.target.value)}
              value={tweetdescription}
              rows="4"
              cols="50"
            />
            <input
              onChange={(e) => settweetLocation(e.target.value)}
              value={tweetLocation}
              placeholder="Add Shop Location"
              type="text"
            ></input>
            <input
              type="tel"
              onChange={(e) => settweetphone(e.target.value)}
              value={tweetphone}
              placeholder="Add shop phone Number"
            ></input>
            <Button
              onClick={() => histroy.push("/added")}
              type="submit"
              className="tweetBox_tweetButton"
            >
              Add shop
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Addshop;
