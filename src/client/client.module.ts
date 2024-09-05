import { Module } from '@nestjs/common';
import { ClientResolver } from './client/client.resolver';
import { ClientService } from './client/client.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ClientResolver, ClientService],
})
export class ClientModule {}
