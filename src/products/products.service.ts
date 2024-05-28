import { Injectable } from '@nestjs/common';
import { AppService } from '../app.service'
@Injectable()
export class ProductsService {
    constructor(private readonly appService: AppService){}

    getProducts(request: object): string {
        return this.appService.getHello() + ' cars bikes'
    }

    getAllProuducts(): string[] {
        return ['cars', 'bikes', 'planes']
    }

    saveProduct(product: {}) {
        //save product to data base
        console.log('product saved')
        const productSaved = {
            id: '1',
            ...product
        }
        return productSaved
    }
}
