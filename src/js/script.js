'use strict';

(function (){
    const product = {};

    Object.defineProperty(product, 'name', {
        get() {
            return this._name;
        },
        set(value) {
            if (typeof value !== 'string' || value.trim() === '')
                throw new Error ('name should be string and shouldn`t be empty')
            this._name = value;

        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(product, 'price', {
        get() {
            return this._price;
        },
        set(value) {
            if (typeof value !== 'number' || value <= 0) throw new Error
            ('price should be more than 0')

            this._price = value;

        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(product, 'quantity', {
        value: 1,
        writable: true,
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(product, 'totalValue', {
        get() {
            return this.price * this.quantity;
        },
        enumerable: true,
        configurable: false
    });

    product.name = 'kiwi';
    product.price = 10;
    product.quantity = 3;

    console.log(product)
})()

