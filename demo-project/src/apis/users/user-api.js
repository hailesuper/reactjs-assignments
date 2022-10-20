import axiosClient from "../axiosClient";

const userApi = {
    getById(id) {
        const userUrl = "users/" + id;
        return axiosClient.get(userUrl)
    }
}