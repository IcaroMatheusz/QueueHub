import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';
import { UsersModule } from './users/users.module';
import { StatusModule } from './status/status.module';

@Module({
  imports: [TicketsModule, UsersModule, StatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
