import { DataResponse } from "@typings/db";
import axios from "axios";

const fetcher = (url: string) =>
  axios
    .get(url, {
      withCredentials: true,
    })
    .then((response: DataResponse) => response.data.data);

export default fetcher;
