import Axios from "../setup/axios";

export const getAllTours = () => {
  const request = Axios.get(`tours`);
  return request
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
