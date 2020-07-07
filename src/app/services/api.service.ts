import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private url =
    'https://api.tzstats.com/tables/op?columns=row_id,time,type,sender,volume&receiver=tz1gfArv665EUkSg2ojMBzcbfwuPxAvqPvjo&type=transaction&limit=10';
  //'https://api.tzstats.com/tables/op?columns=row_id,time,type,sender,volume&receiver=tz1gfArv665EUkSg2ojMBzcbfwuPxAvqPvjo&type=transaction&limit=10&cursor.lte=18990092';
  constructor(private httpClient: HttpClient) {}

  loadOperations() {
    return this.httpClient.get(this.url);
  }
}
