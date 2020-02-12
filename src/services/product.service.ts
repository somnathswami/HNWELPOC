import { Injectable } from '@angular/core';

import { Product } from '../app/productEntities/product.entities';
import { Criteria } from 'src/app/productEntities/criteria.entities';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            { id: 'p01', name: 'name 1', price: 100, photo: 'thumb1.png', criteria:{id:1,criteria:"crt1"} },
            { id: 'p02', name: 'name 2', price: 200, photo: 'thumb2.png',criteria:{id:2,criteria:"crt1"} },
            { id: 'p03', name: 'name 3', price: 300, photo: 'thumb4.png',criteria:{id:3,criteria:"crt1"} }
        ];
    }

    findAll(): Product[] {
        return this.products;
    }
    findByCriteria(crtID): Product[]{
        return this.products.filter(product=> product.criteria.id == parseInt(crtID) );

    }
    addNewProduct(data): Product[]{
    //  let criteria = JSON.parse(data.criteria);
        this.products.push({ id: data.id, name: data.name, price: Number(data.price) || 0, photo: 'thumb3.jpg', criteria: {id:data.criteria.id, criteria:data.criteria.criteria}});
        return this.products;

    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}