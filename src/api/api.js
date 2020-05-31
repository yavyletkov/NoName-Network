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

export const ProfileAPI = {
    getProfile (id) {
        return instance.get(`/profile/${id}`)
            .then(response => {
                return response.data
            })
    },
    getUserStatus (id) {
        return instance.get(`/profile/status/${id}`)
            .then(response => {
                return response.data
            })
    },
    updateUserStatus (status) {
        return instance.put(`/profile/status`, {status: status})
            .then(response => {
                return response.data
            })
    },
    updateUserPhoto (file) {
        const formData = new FormData();
        formData.append('image', file);
        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                return response.data
            })
    },
    updateUserInfo (userInfo) {
        return instance.put('/profile', userInfo)
            .then(response => response.data)
    }


};

export const AuthAPI = {
    me () {
        return instance.get(`/auth/me`)
            .then(response => {
                return response.data
            })
    },
    login (email, password, rememberMe) { // перепроверить порядок
        return instance.post(`/auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data
            })
    },
    logout () {
        return instance.delete(`/auth/login`)
            .then(response => {
                return response.data
            })
    }
}

