import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICategoria } from '../interfaces/ICategoria';
import { IDepartamento } from '../interfaces/IDepartamento';
import { ISubcategoria } from '../interfaces/ISubcategoria';

@Injectable()
export class CategoriasService {

  private apiURL = this.baseUrl + "/Categorias";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getCategoriasXDep(departamento: string): Observable<ICategoria[]> {
    return this.http.get<ICategoria[]>(this.apiURL + "/GetCategorias/" + departamento);
  }

  getSubcategoriasXCat(categoria: string): Observable<ISubcategoria[]> {
    return this.http.get<ISubcategoria[]>(this.apiURL + "/GetSubcategorias/" + categoria);
  }
}
