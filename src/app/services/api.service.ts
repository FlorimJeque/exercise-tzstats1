import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  loadOperations(row_id: number): Observable<any> {
    let url = `https://api.tzstats.com/tables/op?columns=row_id,time,type,sender,volume&receiver=tz1gfArv665EUkSg2ojMBzcbfwuPxAvqPvjo&type=transaction&limit=10&cursor.lte=${row_id}`;
    return this.httpClient.get(url);
  }
}
