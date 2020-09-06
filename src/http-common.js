import axios from 'axios';

import dotenv from 'dotenv';
dotenv.config();

const BASE_URL = `${process.env.BASE_EXTERNAL_URL}` || `${process.env.BASE_LOCAL_URL}`;

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json'
  },
});
