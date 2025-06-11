import { Controller, Get, Query, Param, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProduct(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    return `products  limit = ${limit} offset= ${offset} brand ${brand}`;
  }

  @Get(':productId')
  getProducts(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Post()
  create() {
    return {
      message: 'Accion de crear',
    };
  }
}
