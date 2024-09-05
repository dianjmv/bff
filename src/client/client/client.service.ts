import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ClientService {
  private readonly clientUrl = 'http://localhost:8080/client';

  constructor(private httpService: HttpService) {}

  getClient(clientId: string): Observable<AxiosResponse<any>> {
    return this.httpService.get(`${this.clientUrl}?clientId=${clientId}`);
  }
}
