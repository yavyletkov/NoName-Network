import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": 'f30d1f69-987f-4126-a37c-bee89a18b776'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
});

export const UsersAPI = {
    getUsers (pageSize, pageNumber) {
        return instance.get(`/users?count=${pageSize}&page=${pageNumber}`)
            .then(response => {
                return response.data
            })
    },
    follow (id) {
        return instance.post(`/follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    unFollow (id) {
        return instance.delete(`/follow/${id}`)
            .then(response => {
                return response.data
            })
    },
};

