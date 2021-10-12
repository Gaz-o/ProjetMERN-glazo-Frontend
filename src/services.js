import axios from "axios";

const baseURL = "http://localhost:5000";

const base = axios.create({
  baseURL,
});
const Service = {
  /*
        On peut définir des méthodes générales qui vont nous permettre de créer des requêtes simples...
    */
  // GET method
  // Le backend recevra un GET au path défini '/${path}'
  //    v--------------------------^
  get(path) {
    return base.get(path);
  },
  // POST method
  // Le backend recevra un POST au path défini '/${path}' et récupérera le body (via req.body)
  //     |-------------------------^^^^                                    ^^^^
  //   vvvv     v------------------------------------------------------------|
  post(path, body) {
    return base.post(path, body);
  },
  // PUT method
  // Le backend recevra un PUT au path défini '/${path}' et récupérera le body (via req.body)
  //    v--------------------------^                                        ^
  //    v     v-------------------------------------------------------------^
  put(path, body) {
    return base.put(path, body);
  },
  // DELETE method
  // Le backend recevra un DELETE au path défini '/${path}' (router.delete) et récupérera le body (via req.body)
  //    v----------------------------------^                                                  ^
  //    v       v-----------------------------------------------------------------------------^
  delete(path, body) {
    return base.delete(path, body);
  },
  /*
        ... et de définir des services spécifiques !
    */
  getInfos() {
    const token = localStorage.getItem("jwt");
    const headers = {
      Authorization: "Bearer " + token,
    };
    return base.get("/user/info", { headers: headers });
  },
  postLogout() {
    localStorage.removeItem("jwt");
    return base.get("/user/logout");
  },
  deleteProfil(body) {
    let path = "/user/delete";
    console.log(body, "body");
    localStorage.removeItem("jwt");
    return base.delete(path, { data: body });
  },
};

export default Service;
// Rien à voir, circulez
// Vraiment rien à voir, promis.
// Bon ...
if (process.env.NODE_ENV === "development") {
  // Intercepte chaque requête du frontend pour faire un joli log
  base.interceptors.request.use(
    (request) => {
      let { baseURL, method, url } = request;
      console.log(
        `SENDING [${method.toUpperCase()}] FROM FRONTEND : ${baseURL}${url}`
      );
      return request;
    },
    (err) => err
  );

  // Intercepte chaque réponse du backend pour faire un joli log
  base.interceptors.response.use(
    (response) => {
      let { config, data, status, statusText } = response;
      let { method } = config;
      console.log("");
      console.log("\\\\\\\\");
      console.log(
        `RECEIVED [${method.toUpperCase()}] RESPONSE FROM BACKEND : ${
          config.baseURL
        }${config.url}`
      );
      console.log(
        `Data of type : ${typeof data} | status ${status} ${statusText}`
      );
      console.log("\\\\\\\\");
      console.log("");
      return response;
    },
    (err) => {
        let { config, data, status, statusText } = err.response;
      let { method } = config;
      console.log("");
      console.log("\\\\\\\\");
      console.log(
        `RECEIVED [${method.toUpperCase()}] RESPONSE FROM BACKEND : ${
          config.baseURL
        }${config.url}`
      );
      console.log(
        `Data of type : ${typeof data} | status ${status} ${statusText}`
      );
      console.log("\\\\\\\\");
      console.log("");
      return err.response;
    }
  );
}
