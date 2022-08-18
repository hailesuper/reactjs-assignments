import {axiosClient} from "./axios-client";

class GroupsApi {
    static getGroups = (url) => {
        return axiosClient.get(url);
    }
    static createGroup = (url, data) => {
        return axiosClient.post(url, data);
    }
}

export default GroupsApi;