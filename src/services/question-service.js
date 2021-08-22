import axios from 'axios';

class QuestionService {
    constructor() {
        this.question = axios.create({
            baseURL: "http://localhost:5000/question",
            withCredentials: true
        })
    }

    getAll() {
        const pr = this.question.get('/getAll')
            .then((response) => response.data);
        return pr;
    }
}

const questionService = new QuestionService;

export default questionService;