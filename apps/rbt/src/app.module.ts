import { Module } from '@nestjs/common';
import { TavarModule } from './tavar/tavar.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TavarModule, UserModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
