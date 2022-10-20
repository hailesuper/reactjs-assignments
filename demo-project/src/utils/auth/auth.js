import {getToken} from "../storage/storage.utils";

export const isLogin = () => {
    if (getToken()) return true;
}

