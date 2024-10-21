import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { ProductModule } from './products/product.module';


@Module({
  imports: [UserModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
