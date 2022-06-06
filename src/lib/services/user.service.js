import { axiosInstance } from "lib/services/axios.service";

export default class UserService {
  constructor() {
    this.apiURL = "/users";
  }

  async getAll(query) {
    let response = await axiosInstance().get(this.apiURL);

    return response;
  }

  async getById(id) {
    let response = await axiosInstance().get(this.apiURL);

    return response;
  }

  async updateById(id, data) {
    let response = await axiosInstance().post(this.apiURL + "/" + id, data);

    return response;
  }

  async deleteById(id) {
    let response = await axiosInstance().delete(this.apiURL + "/" + id);

    return response;
  }

  async create(data) {
    let response = await axiosInstance().post(this.apiURL, data);

    return response;
  }
}
