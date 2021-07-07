import axios from 'axios';

class ProductService {
    constructor() {
        this.product = axios.create({
            baseURL: "http://localhost:5000/product",
            withCredentials: true
        })
    }

    getAll() {
        const pr = this.product.get('all')
            .then((response) => response.data);
        return pr;
    }
}

const productService = new ProductService();

export default productService;