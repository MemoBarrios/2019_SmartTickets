import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IDepartamento } from '../interfaces/IDepartamento';

@Injectable()
export class DepartamentosService {

  private apiURL = this.baseUrl + "/Departamentos";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getDepartamentos(): Observable<IDepartamento[]> {
    return this.http.get<IDepartamento[]>(this.apiURL + "/GetDepartamentos");
  }
}
