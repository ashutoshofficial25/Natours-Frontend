import Axios from "../setup/axios";

export function signup(name, email, password, passwordConfirm) {
  const request = Axios.post("users/signup", {
    name,
    email,
    password,
    passwordConfirm,
  });
  return request
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
}

export function login(email, password) {
  const request = Axios.post(
    `users/login`,
    {
      email,
      password,
    }
    // { withCredentials: true }
  );
  return request
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
}

export function logout() {
  const request = Axios.post(`users/logout`);
}

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

export const getTour = (id) => {
  const request = Axios.get(`tours/${id}`);
  return request
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
