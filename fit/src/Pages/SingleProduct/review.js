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
          <Rating style={{fontSize:20}} />
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