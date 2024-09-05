import { Args, Query, Resolver } from '@nestjs/graphql';
import { ClientPortfolioService } from './client-portfolio.service';
import { ClientPortfolio } from './client-portfolio.model';

@Resolver(() => ClientPortfolio)
export class ClientPortfolioResolver {
  constructor(private readonly clientPortfolioService: ClientPortfolioService) {}

  @Query(() => ClientPortfolio)
  async getClientPortfolio(@Args('customerCode') customerCode: string): Promise<ClientPortfolio> {
    const response = await this.clientPortfolioService.getClientPortfolio(customerCode).toPromise();
    return response.data;
  }
}
