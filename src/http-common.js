import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: process.env.BASE_LOCAL_URL || process.env.BASE_EXTERNAL_URL,
  headers: {
    'Content-type': 'application/json'
  },
});
