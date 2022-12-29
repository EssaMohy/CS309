import { Rating, Typography, Stack } from "@mui/material";
import { useState } from "react";
import './review.css';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"

};



function Rev() {



  return (

    <div className="zezo">



      <div style={styles.container}>
        <Stack spacing={2}>
          <Rating style={{ fontSize: 20 }} />
        </Stack>
        <textarea
          placeholder="What's your experience?"
          style={styles.textarea}
        />

        <button
          style={styles.button}
        >
          Submit
        </button>
        <section class="review" id="review">

          <h1 class="heading"> customer's <span>review</span> </h1>

          <div class="box-container">

            <div class="box">{/* NUMBER OF THE STARS OF THE USER */}
              <div class="stars" style={{ color: "gold" }}>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>{/* THE REVIEW OF THE USER */}
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti asperiores laboriosam praesentium enim maiores? Ad repellat voluptates alias facere repudiandae dolor accusamus enim ut odit, aliquam nesciunt eaque nulla dignissimos.</p>
              <div class="user">
                {/*THE PROFILE PAGE PHOTO OF THE USER */} <img src="images/pic-1.png" alt="" />
                <div class="user-info">
                  {/* THE NAME OF THE USER*/} <h3>user</h3>
                  <span>customer</span>
                </div>
              </div>
              <span class="fas fa-quote-right"></span>
            </div>

            <div class="box">{/* NUMBER OF THE STARS OF THE USER */}
              <div class="stars" style={{ color: "gold" }}>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>{/* THE REVIEW OF THE USER */}
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti asperiores laboriosam praesentium enim maiores? Ad repellat voluptates alias facere repudiandae dolor accusamus enim ut odit, aliquam nesciunt eaque nulla dignissimos.</p>
              <div class="user">
                {/*THE PROFILE PAGE PHOTO OF THE USER */} <img src="images/pic-1.png" alt="" />
                <div class="user-info">
                  {/* THE NAME OF THE USER*/} <h3>user</h3>
                  <span>customer</span>
                </div>
              </div>
              <span class="fas fa-quote-right"></span>
            </div>

            <div class="box">{/* NUMBER OF THE STARS OF THE USER */}
              <div class="stars" style={{ color: "gold" }}>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>{/* THE REVIEW OF THE USER */}
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti asperiores laboriosam praesentium enim maiores? Ad repellat voluptates alias facere repudiandae dolor accusamus enim ut odit, aliquam nesciunt eaque nulla dignissimos.</p>
              <div class="user">
                {/*THE PROFILE PAGE PHOTO OF THE USER */} <img src="images/pic-1.png" alt="" />
                <div class="user-info">
                  {/* THE NAME OF THE USER*/} <h3>user</h3>
                  <span>customer</span>
                </div>
              </div>
              <span class="fas fa-quote-right"></span>
            </div>




          </div>
        </section>
      </div>
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
    cursor: "pointer"
  }


};




export default Rev;