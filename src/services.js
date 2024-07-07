/* eslint-disable no-unreachable */
// import axios from "axios";

export const store_scheduled_intervention = async () => {
    try {
        // const response = await axios.post("/");
        // return response.data;
        return []
    } catch (error) {
        return handle_error(error);
    }
}

export const new_medical_cover = async () => {
    try {
        // const response = await axios.post("/medical-cover");
        return [];
        // return response.data;
    } catch (error) {
        return handle_error(error);
    }
}

const handle_error = (error) => {
    if (error.response) {
        throw new Error(error.response.data.detail || error.response.data.message || error.response.data);
    } else if (error.request) {
        throw new Error(error.request);
    } else {
        throw new Error(error.message);
    }
};
