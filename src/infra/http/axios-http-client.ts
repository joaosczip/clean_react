import axios, { AxiosResponse } from "axios";
import { HttpPostClient } from "../../data/protocols/http/http-post-client";

export class AxiosHttpClient implements HttpPostClient {
  async post(params: HttpPostClient.Params): Promise<any> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.post(params.url, params.body, {
        headers: params.headers,
      });
    } catch (error) {
      axiosResponse = error.response;
    }
    return axiosResponse;
  }
}
