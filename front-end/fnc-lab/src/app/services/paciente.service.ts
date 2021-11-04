import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente';



@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  baseUrl: String = environment.baseUrl;

  constructor(private http:HttpClient){ }

  findAll():Observable<Paciente[]>{
    const url =this.baseUrl + "/pacientes";
    return this.http.get<Paciente[]>(url);
  }

  create(paciente:Paciente):Observable<Paciente>{
    const url =this.baseUrl + "/pacientes";
    return this.http.post<Paciente>(url,paciente);
  }
}
