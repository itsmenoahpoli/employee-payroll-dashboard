import { axiosInstance } from "lib/services/axios.service";

export default class AuthService {
  constructor() {
    this.apiURL = "/auth";
  }

  async login(credentials) {
    let resposne = await axiosInstance().post(
      this.apiURL + "/login",
      credentials
    );

    return resposne;
  }
}
