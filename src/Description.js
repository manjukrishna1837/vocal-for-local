import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export default function Desc() {
  let groc=["Rs.50","Rs.50","Rs.250","Rs.50","Rs.250","Rs.40"];
  return (
    <div style={{ marginLeft: "10%", height: "100vh" }}>
      <div class="wrapper">
        <div class="no-data float">
          <i class="fa fa-caret-left fa-md arrow"></i>
          <ul style={{ marginLeft: "-35%" }}>
            <li style={{color:"#32CD32"}}>
              <div
                style={{
                  marginTop: "-30px",
                  marginLeft: "20px",
                  fontSize: "18px",
                  fontWeight:"550"
                }}
              >
                Instock
              </div>
            </li>
          </ul>
        </div>
      </div>
      <h1>Margin-free Store</h1>
      <div style={{ marginTop: "10px" }}>
        <img
          src="https://img.icons8.com/fluent/20/000000/star.png"
          alt="star"
        />
        <div
          style={{ marginTop: "-22px", marginLeft: "25px", fontSize: "14px" }}
        >
          5.0(49)
        </div>
        <div
          style={{ marginTop: "-20px", marginLeft: "105px", fontSize: "14px" }}
        >
          Mangalore, Karnataka, India
        </div>
      </div>
      <Grid container spacing={0} style={{ marginTop: "20px" }}>
        <Grid item md={6}>
          <img
            height="245px"
            width="97%"
            style={{
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px"
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            alt="image1"
          />
        </Grid>
        <Grid item md={3}>
          <Grid container spacing={0}>
            <Grid item md={12}>
              <img
                height="115px"
                width="96%"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                alt="image1"
              />
            </Grid>
            <Grid item md={12}>
              <img
                height="125px"
                width="96%"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                alt="image1"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3}>
          <Grid container spacing={0}>
            <Grid item md={12}>
              <img
                height="115px"
                width="96%"
                style={{ borderTopRightRadius: "15px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                alt="image1"
              />
            </Grid>
            <Grid item md={12}>
              <img
                height="125px"
                width="96%"
                style={{ borderBottomRightRadius: "15px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                alt="image1"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <h2 style={{ marginTop: "20px" }}>Great quality products at affordable price</h2>
      <h3 style={{ fontWeight: "400" }}>
      </h3>
      <hr style={{ marginTop: "15px" }}></hr>
      <div style={{ marginTop: "15px" }}>
        <Grid container style={{ marginBottom: "2.5%" }}>
          <Grid item lg={6}>
            <div style={{ marginTop: "5%" }}>
              <img
                style={{ position: "absolute", marginTop: "2px" }}
                src="https://img.icons8.com/android/20/ffb6c1/phone.png"
                alt="phone"
              />
              <div style={{ marginLeft: "25px" }}>
                Phone Number: 87128274830
              </div>
            </div>
            <div style={{ marginTop: "7%" }}>
              <img
                style={{ position: "absolute", marginTop: "2px" }}
                src="https://img.icons8.com/fluent/20/000000/address.png"
                alt="phone"
              />
              <div style={{ marginLeft: "25px", marginBottom: "10%" }}>
                Address: Madanthyar, Belthangadi, Dakshina Kannada
              </div>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: "6%", marginBottom: "20%" }}
            >
              Interested
            </Button>
          </Grid>
        </Grid>
      </div>
      <hr style={{ marginTop: "-3%" }}></hr>

      <Grid container style={{ marginTop: "20px", marginBottom: "20%" }}>
        <ul style={{ height: "100%" }}>
          {["Rice", "Wheat", "Dry Chilly", "Barley", "Oil","Maida"].map((item, index) => {
            return (
              <div className="note">
                <h1>{item}</h1>
                <p>{groc[index]}</p>
              </div>
            );
          })}
        </ul>
      </Grid>
    </div>
  );
}
