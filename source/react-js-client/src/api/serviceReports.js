import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:7185",
});

// export default axios.create({
//   baseURL: "http://localhost:8080",
// });
