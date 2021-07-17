import axios from 'axios';

class UserService {
    constructor() {
        this.user = axios.create({
            baseURL: "http://localhost:5000/user",
            withCredentials: true
        })
    }

    addToCart(userId, product) {
        const pr = this.user.put(`${userId}/addToCart`, { product })
            .then((response) => response.data);
        return pr;
    }

    incrementLogin(userId) {
        const pr = this.user.put(`${userId}/incrementLogin`)
            .then((response) => response.data);
        return pr;
    }
}

const userService = new UserService();

export default userService;