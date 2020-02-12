import { Criteria } from './criteria.entities';

export class Product {

    id: string;
    name: string;
    price: number;
    photo: string;
    criteria: Criteria;
}