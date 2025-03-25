import axios from "axios";
import { useEffect } from "react";

const Photos = () => {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        console.log(response.data);
        //   console.log("object");
      })
      .catch((error) => {
        console.error(error);
      });
    //   .catch(error);
    // .then((response)={
    //     const res = response.data
    // })
  }, []);

  return
};

export default Photos;
