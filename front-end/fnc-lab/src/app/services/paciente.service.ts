import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../models/paciente';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  paciente!:Paciente[] 

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/fncLabs/paciente'

  getPacientes(){
    return this.http.get<Paciente[]>(this.Url)
  }
}
