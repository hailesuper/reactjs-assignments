import Api from './Api';

const url = "/users";

const existsByEmail = (email) => {
    return Api.get(`${url}/email/${email}`);
};

const getUserProfile = () => {
    return Api.get(`${url}/profile`);
};

const existsByUsername = (username) => {
    return Api.get(`${url}/userName/${username}`);
};

const create = (username, email, password, firstname, lastname) => {
    const body = {
        userName: username,
        email,
        password,
        firstName: firstname,
        lastName: lastname
    }
    return Api.post(url, body);
};

const createUserWithObject = (data) => {
    const body = {
        ...data,
        userName: data.username
    }
    return Api.post(url, body);
};

const resendEmailToActiveAccount = (email) => {
    const requestParams = {
        email
    }

    return Api.get(`${url}/userRegistrationConfirmRequest`, { params: requestParams });
};

// export
const userApi = { existsByEmail, existsByUsername, create,
    createUserWithObject, resendEmailToActiveAccount, getUserProfile }
export default userApi;