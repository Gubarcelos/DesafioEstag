import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';

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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private router:Router){}
  Novo(){
    this.router.navigate(["pacientes/create"])

  }
  
  }
