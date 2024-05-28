import { ProductsService } from './products.service'
import { request } from 'http';
import { Response } from 'express';
import { Get, Query, Header, Controller, Post, Body, Res,Req, HttpStatus, Param, Logger, UseInterceptors, UploadedFile } from '@nestjs/common';


@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService){}

    @Post()
    getProducts(@Res() response:Response, @Body() body: []): Response {
        console.log(body)
        if ( body['pName'] && body['pType']) {
            const productSaved= this.productsService.saveProduct(body)    
            return response.status(HttpStatus.OK).send(JSON.stringify(productSaved))
        } else {
            response.status(HttpStatus.BAD_REQUEST).send("This is a Bad request");
        }
    }

    @Get('/allproducts')
    getAllProducts() : string[] {
        return this.productsService.getAllProuducts()
    }

    @Get('/name/:name')
    getProductById(@Param('name') pName:string) : string {
        return 'Hello ' + pName
    }
}
