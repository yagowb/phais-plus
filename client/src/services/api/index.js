import axios from "axios";

async function createRegister({ cnpj, email, username, phone }) {
  return await axios.post("http://127.0.0.1:3001/registers", {
    cnpj,
    email,
    username,
    phone,
  });
}

async function authenticate({ cnpj, password }) {
  return await axios.post("http://127.0.0.1:3001/auth/authenticate", {
    cnpj,
    password,
  });
}

export { createRegister, authenticate };
