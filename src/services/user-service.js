import axios from 'axios';

class UserService {
    constructor() {
        this.user = axios.create({
            baseURL: "http://localhost:5000/user",
            withCredentials: true
        })
    }

    modifyCart(userId, cartState) {
        const pr = this.user.put(`${userId}/modifyCart`, { cartState })
            .then((response) => response.data);
        return pr;
    }

    incrementLogin(userId) {
        const pr = this.user.put(`${userId}/incrementLogin`)
            .then((response) => response.data);
        return pr;
    }

    updateUser(userId, property, value) {
        const pr = this.user.put(`${userId}/updateUser`, { property, value })
            .then((response) => response.data);
        return pr;
    }
}

const userService = new UserService();

export default userService;