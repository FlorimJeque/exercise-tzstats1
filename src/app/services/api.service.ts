import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private url =
    //  'https://api.tzstats.com/tables/op?columns=row_id,time,type,sender,volume&receiver=tz1gfArv665EUkSg2ojMBzcbfwuPxAvqPvjo&type=transaction&limit=10';
    'https://api.tzstats.com/tables/op?columns=row_id,time,type,sender,volume&receiver=tz1gfArv665EUkSg2ojMBzcbfwuPxAvqPvjo&type=transaction&limit=10&cursor.lte=[latest_row_id]';
  constructor(private httpClient: HttpClient) {}

  loadOperations(row_id: number) {
    this.url = this.url.replace('[latest_row_id]', row_id + '');
    console.log(this.url);
    return this.httpClient.get(this.url);
  }
}