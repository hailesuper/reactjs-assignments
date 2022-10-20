import Api from './Api';

const url = "/groups";

const getAllGroups = (pagination) => {
    return Api.get(`${url}`, { params: pagination });
};

const existsByGroupName = (groupName) => {
    return Api.get(`${url}/name/${groupName}`);
};

const createGroup = (groupName) => {
    const body = {
        name: groupName
    }
    return Api.post(url, body);
}


const updateGroupById = (id, name, totalMember) => {
    const body = {
        name,
        totalMember
    }
    return Api.put(`${url}/${id}`, body);
};

const getGroupById = (groupId) => {

    return Api.get(`${url}/${groupId}`);
};

const deleteGroupById = (id) => {
    return Api.delete(`${url}/${id}`);
};

const deleteGroupByIds = (ids) => {
    return Api.delete(`${url}/${ids.toString()}`);
};
// export
const groupApi = { getAllGroups, createGroup, existsByGroupName, getGroupById, updateGroupById,
    deleteGroupById, deleteGroupByIds}
export default groupApi;