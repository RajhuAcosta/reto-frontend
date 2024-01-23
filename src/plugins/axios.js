import axios from "axios";

const accessKey = "yGte3KolFHHQZDSq8QnOEUk9jTmzF2OXy3d4FiXS4YY";

export const extractImgCountry = (nameCountry) => {
  //   let img;
  axios
    .get(
      `https://api.unsplash.com/photos/random?query=${nameCountry}&client_id=${accessKey}`
    )
    .then(({ data }) => console.log(data))
    .catch((error) => console.log(error));
  //   return img;
};
