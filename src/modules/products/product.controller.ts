import { Controller, Get } from "@nestjs/common";

@Controller('products')
export class ProductController {
  constructor() {}

  @Get('/create')
  create() {
    return 'Criar produto.';
  }
}