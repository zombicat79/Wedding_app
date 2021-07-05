import axios from 'axios';

class AuthService {
    constructor() {
        this.auth = axios.create({
            baseURL: 'http://localhost:5000/auth',
            withCredentials: true
        });
    }

    login(username, password, language) {
        const pr = this.auth.post('login', { username, password, language })
            .then((response) => response.data);
        return pr;
    }
};

const authService = new AuthService();

export default authService;