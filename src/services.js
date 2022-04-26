import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL; // api.myamazingwebsite.com

const base = axios.create({ baseURL });

const services = {
  login(body) {
    // email, password
    return base.post("/login", body).then((res) => res.data);
  },
};

export default services;
