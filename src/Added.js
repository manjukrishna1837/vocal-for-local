import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Added() {
  const histroy = useHistory();

  return (
    <div className="shopowner">
      <div className="shopowner__continer">
        <div className="shopowner__text">
          <h4>
            Your Shop successfuly Added to with us and customer Can see your
            shop now
          </h4>
        </div>
        <div className="shopowner__buttons">
          <Button onClick={() => histroy.push("/")} variant="outlined">
            HOME{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Added;
