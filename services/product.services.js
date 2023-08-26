const { faker } = require('@faker-js/faker');

class ProductService {
    constructor() {
        this.products = [];
        this.generate();
    }

    generate() {
        const randomCategory = [
            'Clothes',
            'Electronics',
            'Furniture',
            'Toys',
            'Others'
        ];

        for (let i = 0; i < 50; i++) {
            const randomNumber = Math.floor(Math.random() * 6);
            const product = {
                id: faker.string.uuid(),
                name: faker.commerce.product(),
                category: randomCategory[randomNumber],
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                image: faker.image.url()   
            }
            this.products.push(product);
        }
    }

    find () {
        return this.products;
    }

    findOne(id) {
        const index = this.products.findIndex(item => id === item.id);
        const product = this.products[index];
        return product;
    }
}

module.exports = ProductService;
