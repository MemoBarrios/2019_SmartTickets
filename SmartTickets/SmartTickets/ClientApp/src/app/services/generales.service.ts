import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISucursal } from '../interfaces/ISucursal';
import { Observable } from 'rxjs';

@Injectable()
export class GeneralesService {

  private apiURL = this.baseUrl + "/Generales";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  getSucursalesActivas(compania: number, sucursal: string): Observable<ISucursal[]> {
    return this.http.get<ISucursal[]>(this.apiURL + "/GetSucursales/" + compania + "/" + sucursal);
  }

}
