import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Prioridad } from '../../../../../Models/prioridad.enum';
import { GeneralesService } from 'src/app/services/generales.service';
import { ISucursal } from 'src/app/interfaces/ISucursal';
import { error } from '@angular/compiler/src/util';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { IDepartamento } from 'src/app/interfaces/IDepartamento';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ICategoria } from 'src/app/interfaces/ICategoria';
import { ISubcategoria } from 'src/app/interfaces/ISubcategoria';
import { TicketsService } from 'src/app/services/tickets.service';
import { IIncidente } from 'src/app/interfaces/IIncidente';

@Component({
    selector: 'app-captura',
    templateUrl: './captura.component.html',
    styleUrls: ['./captura.component.css']
})
/** captura component*/
export class CapturaComponent {
    /** captura ctor */
  constructor(private formBuilder: FormBuilder, private generalesService: GeneralesService, private departamentosService: DepartamentosService, private categoriasService: CategoriasService, private ticketsService: TicketsService ) {

  }

  ngOnInit() {
    for (let item in Prioridad) {
      if (isNaN(Number(item))) {
        this.prioridades.push({text: item, value: Prioridad[item] });
      }
    }
    this.consultaSucursalesActivas(2, "000");
    this.consultaDepartamentos();
    this.categoria.disable();
    this.subcategoria.disable();
  }

  get titulo() {
    return this.capturaTicketForm.get('titulo');
  }

  get descripcion() {
    return this.capturaTicketForm.get('descripcion');
  }

  get departamento() {
    return this.capturaTicketForm.get('departamento');
  }

  get categoria() {
    return this.capturaTicketForm.get('categoria');
  }

  get subcategoria() {
    return this.capturaTicketForm.get('subcategoria');
  }

  files: any = [];
  prioridades: any[] = [];
  dtSucursales: ISucursal[];
  dtDepartamentos: IDepartamento[];
  dtCategorias: ICategoria[];
  dtSubcategorias: ISubcategoria[];
  dtIncidente: IIncidente;
  
  capturaTicketForm = this.formBuilder.group({
    compania: [2],
    tipo_Ticket: ['I'],
    titulo: ['', [Validators.required]],
    departamento: ['', [Validators.required]],
    sucursal: ['', [Validators.required]],
    categoria: ['', [Validators.required]],
    subcategoria: [''],
    descripcion: ['', [Validators.required, Validators.minLength(20)]],
    prioridad: [Prioridad.Baja],
    ip: [''],
    adjuntos: [''],
    id_Usuario: [1],
    id_Estatus: [2],
    id_Fecha: new Date().toLocaleString(),
    fecha_Cierre: new Date().toLocaleString()
  });

  refrescar() {
    this.capturaTicketForm.patchValue({
      compania: 2,
      titulo: '',
      departamento: '',
      sucursal: '',
      categoria: '',
      subcategoria: '',
      descripcion: '',
      prioridad: Prioridad.Baja,
      ip: '',
      adjuntos: ''
    });
  }

  guardaCaptura() {
    console.log(this.capturaTicketForm.value);

    const ticket: IIncidente = Object.assign({}, this.capturaTicketForm.value);

    console.log(ticket);

    //if (this.capturaTicketForm.valid) {
      this.ticketsService.AltaIncidente(ticket)
        .subscribe(IncidenteDesdeWS => {
        this.dtIncidente = IncidenteDesdeWS
          console.log(this.dtIncidente);
        }, error => console.error(error));
    ////}
    
  }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }  
  }

  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

  consultaSucursalesActivas(compania: number, sucursal: string) {
      this.generalesService.getSucursalesActivas(compania, sucursal)
      .subscribe(sucursalesDesdeWS => { this.dtSucursales = sucursalesDesdeWS }, error => console.error(error));
  }

  consultaDepartamentos() {
    this.departamentosService.getDepartamentos()
      .subscribe(departamentosDesdeWS => { this.dtDepartamentos = departamentosDesdeWS}, error => console.error(error));
  }

  consultaCategoriasXDep() {

    let dep: string = this.departamento.value;

    if (dep != '' && dep != undefined) {
      this.categoriasService.getCategoriasXDep(dep)
        .subscribe(categoriasDesdeWS => {
        this.dtCategorias = categoriasDesdeWS
          if (this.dtCategorias.length > 0) {
            this.categoria.enable();
          }
          else {
            this.categoria.disable();
          }
        }, error => console.error(error));      
    }
  }

  consultaSubcategoriasXCat() {
    let catego: string = this.categoria.value;

    if (catego != '' && catego != undefined) {
      this.categoriasService.getSubcategoriasXCat(catego)
        .subscribe(subcategoriasDesdeWS => {
          this.dtSubcategorias = subcategoriasDesdeWS
          if (this.dtSubcategorias.length > 0) {
            this.subcategoria.enable();
          }
          else {
            this.subcategoria.disable();
          }
        }, error => console.error(error));
    }

  }
}
