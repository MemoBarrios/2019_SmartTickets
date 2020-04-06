import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IIncidente } from '../interfaces/IIncidente';
import { Observable } from 'rxjs';

@Injectable()
export class TicketsService {

  private apiURL = this.baseUrl + "/Tickets";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  AltaIncidente(incidente: IIncidente): Observable<IIncidente> {
    return this.http.post<IIncidente>(this.apiURL + "/AltaIncidente", incidente);
  }
}
