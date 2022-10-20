import axiosClient from "../axiosClient";

const logInApi = {
    getLogInUserInfo(username, password) {
        const logInUrl = "login";
        const token = btoa(username + ":" + password);
        return axiosClient.get(logInUrl, {
            'headers': { "Authorization": "Basic " + token}

            // {
            // "Authorization": "Basic " + btoa(username + ":" + password)

            // auth: {
            //     username: username,
            //     password: password
            // }
        })
    },

    getLogInUserInfoByToken(token) {
        const logInUrl = "login";
        return axiosClient.get(logInUrl, {
            'headers': { "Authorization": "Basic " + token}

            // {
            // "Authorization": "Basic " + btoa(username + ":" + password)

            // auth: {
            //     username: username,
            //     password: password
            // }
        })
    }
}

export default logInApi;