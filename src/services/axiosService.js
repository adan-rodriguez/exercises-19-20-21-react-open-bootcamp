import AxiosRequestConfigDefault from "../utils/config/axios.config";

export function getRandomChuckNorrisJoke() {
  return AxiosRequestConfigDefault.get("/");
}
