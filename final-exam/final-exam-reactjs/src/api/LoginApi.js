import Api from './Api';

const url = "/login";

const login = (username, password) => {
    const requestParams = {
        username,
        password
    }

    return Api.get(`${url}`, { params: requestParams });
};

// export
const loginApi = { login }
export default loginApi;