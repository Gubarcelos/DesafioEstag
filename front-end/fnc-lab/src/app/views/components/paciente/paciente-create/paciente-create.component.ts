import { Paciente } from 'src/app/models/paciente';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-paciente-create',
  templateUrl: './paciente-create.component.html',
  styleUrls: ['./paciente-create.component.css']
})
export class PacienteCreateComponent implements OnInit {

  paciente: Paciente = {
    id:'',
    nome: 'Gustavo',
    cpf: '422.374.228-00',
    email: 'gustavo@123.com'

  }

  constructor(
    private router:Router,
    private service : PacienteService) { }

  ngOnInit(): void {
  }

  cancel():void{
    this.router.navigate(['pacientes'])
  }

  create():void{
    this.service.create(this.paciente).subscribe((resposta) => {
      this.router.navigate(['pacientes'])

    })
  }

}
