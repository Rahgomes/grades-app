import axios from 'axios';

import dotenv from 'dotenv';
dotenv.config();

const BASE_URL = "http://localhost:3001/" || "https://api-grades-estudantes.herokuapp.com";

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json'
  },
});
