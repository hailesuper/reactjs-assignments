const isRememberMe = () => {
    if (localStorage.getItem("isRememberMe") !== null && localStorage.getItem("isRememberMe") !== undefined) {
        // convert string to boolean and return result
        return JSON.parse(localStorage.getItem("isRememberMe"));
    }
    return true;
}

const setRememberMe = (isRememberMe) => {
    localStorage.setItem("isRememberMe", isRememberMe);
}

const setItem = (key, value) => {
    if (isRememberMe()) {
        localStorage.setItem(key, value);
    } else {
        sessionStorage.setItem(key, value);
    }
}

const getItem = (key) => {
    if (isRememberMe()) {
        return localStorage.getItem(key);
    }
    return sessionStorage.getItem(key);
}

const removeItem = (key) => {
    if (isRememberMe()) {
        localStorage.removeItem(key);
    } else {
        sessionStorage.removeItem(key);
    }
}

const setToken = (token) => {
    setItem("token", token);
};

const removeToken = () => {
    removeItem("token");
};

const getToken = () => {
    return getItem("token");
}

const isAuth = () => {
    return getToken() !== null && getToken() !== undefined;
}

const setUserInfo = (username, email, firstName, lastName, role, status) => {
    setItem("username", username);
    setItem("email", email);
    setItem("firstName", firstName);
    setItem("lastName", lastName);
    setItem("role", role);
    setItem("status", status);
    setItem("avatarUrl", status);

}

const getUserInfoToJson = () => {
    return {
        "username": getItem("username"),
        "email": getItem("email"),
        "firstName": getItem("firstName"),
        "lastName": getItem("lastName"),
        "role": getItem("role"),
        "status": getItem("status"),
        "avatarUrl": getItem("avatarUrl")

    };
}

const removeUserInfo = () => {
    removeItem("username");
    removeItem("email");
    removeItem("firstName");
    removeItem("lastName");
    removeItem("role");
    removeItem("status");
};

// export
const storage = {
    isRememberMe,
    setRememberMe,
    setToken,
    getToken,
    removeToken,
    isAuth,
    setUserInfo,
    getUserInfoToJson,
    removeUserInfo
};
export default storage;
// const setToken = token => {
//     localStorage.setItem("token", token);
// }
//
// const getToken = () => (
//     localStorage.getItem("token")
// )
//
// const setUserInfo = (username, email, firstName, lastName, role, status) => {
//     localStorage.setItem("username", username);
//     localStorage.setItem("email", email);
//     localStorage.setItem("firstName", firstName);
//     localStorage.setItem("lastName", lastName);
//     localStorage.setItem("role", role);
//     localStorage.setItem("status", status);
// }
//
// const getUserInfoToJson = () => {
//     return {
//         "username": localStorage.getItem("username"),
//         "email": localStorage.getItem("email"),
//         "firstName": localStorage.getItem("firstName"),
//         "lastName": localStorage.getItem("lastName"),
//         "role": localStorage.getItem("role"),
//         "status": localStorage.getItem("status"),
//     }
// }
//
// const storage = {setToken, getToken, setUserInfo, getUserInfoToJson};
// export default storage;