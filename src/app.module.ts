import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/user.module';
import { ProductModule } from './modules/products/product.module';


@Module({
  imports: [UserModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
