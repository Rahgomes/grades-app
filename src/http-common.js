import axios from 'axios';

import dotenv from 'dotenv';
dotenv.config();

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: "https://api-grades-estudantes.herokuapp.com/grade",
  headers: {
    'Content-type': 'application/json'
  },
});
