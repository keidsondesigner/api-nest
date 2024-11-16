import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ProductModule } from './modules/products/product.module';


@Module({
  imports: [AuthModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
