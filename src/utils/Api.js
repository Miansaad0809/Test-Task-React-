import axios from "axios";
let envConfig = "https://jsonplaceholder.typicode.com";

export const Api = async (method, route, population) => {
 const promise = axios({
  method: method,
  url: population ? route : `${envConfig}/${route}`,
 });

 const response = await promise
  .then((resp) => {
   return resp;
  })
  .catch((err) => {
   if (err.response?.status === 404) {
    return err?.response;
   } else if (err.response?.status === 403 || err.response?.status === 401) {
    return err?.response;
   } else {
    return err?.response;
   }
  });

 return response;
};
