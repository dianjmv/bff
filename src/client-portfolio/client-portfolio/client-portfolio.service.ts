import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class ClientPortfolioService {
  private readonly clientPortfolioUrl =
    'http://localhost:8000/api/client-portfolio';

  constructor(private httpService: HttpService) {}

  getClientPortfolio(customerCode: string): Observable<AxiosResponse<any>> {
    return this.httpService.get(
      `${this.clientPortfolioUrl}?customerCode=${customerCode}`,
    );
  }
}
