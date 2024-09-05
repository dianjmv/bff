import { Module } from '@nestjs/common';
import { ClientPortfolioResolver } from './client-portfolio/client-portfolio.resolver';
import { ClientPortfolioService } from './client-portfolio/client-portfolio.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ClientPortfolioResolver, ClientPortfolioService],
})
export class ClientPortfolioModule {}
