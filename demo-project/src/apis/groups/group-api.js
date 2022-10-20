import axiosClient from "../axiosClient";

const groupApi = {
    getAllGroups() {
        const getAllGroupsUrl = `groups`;
        return axiosClient.get(getAllGroupsUrl);
    }
}

export default groupApi;