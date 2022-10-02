import { axiosapi } from "../api/axiosapi";

export const getEntity = async (url) => {
    try {
        const response = await axiosapi.getAPI(url);
        return response.data;
    } catch (error) {

    }
}

export const saveEntity = async (url, data) => {
    try {
        const response = await axiosapi.postAPI(url, data);
        return response.data;
    } catch (error) {

    }
}

export const updateEntity = async (url, data) => {
    try {
        const response = await axiosapi.putAPI(url, data);
        return response.data;
    } catch (error) {

    }
}

export const deleteEntity = async (url) => {
    try {
        const response = await axiosapi.deleteAPI(url);
        return response.data;
    } catch (error) {

    }
}