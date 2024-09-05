import { Resolver, Query, Args } from '@nestjs/graphql';
import { ClientService } from './client.service';
import { Client } from './client.model';

@Resolver(() => Client)
export class ClientResolver {
  constructor(private readonly clientService: ClientService) {}

  @Query(() => Client)
  async getClient(@Args('clientId') clientId: string): Promise<Client> {
    const response = await this.clientService.getClient(clientId).toPromise();
    return response.data;
  }
}
