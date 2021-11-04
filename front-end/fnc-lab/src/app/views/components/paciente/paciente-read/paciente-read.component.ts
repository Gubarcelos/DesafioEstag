import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-paciente-read',
  templateUrl: './paciente-read.component.html',
  styleUrls: ['./paciente-read.component.css']
})
export class PacienteReadComponent implements AfterViewInit {

  pacientes:Paciente[]=[];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email'];
  dataSource = new MatTableDataSource<Paciente>(this.pacientes);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service : PacienteService){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe((resposta)=>{
      this.pacientes = resposta;
      console.log(this.pacientes)
    })
  }
}