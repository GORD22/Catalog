import axios from "axios";

export const instance = axios.create({
    baseURL: "http://contest.elecard.ru/frontend_data/"
})