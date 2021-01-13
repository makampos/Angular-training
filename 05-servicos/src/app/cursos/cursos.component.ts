import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  cursosService: CursosService;

   //Injeção de dependência da classe de serviço
  constructor(_cursosService: CursosService) {
    this.cursosService = _cursosService;
   }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    CursosService.criouNovoCurso.subscribe(
     curso => this.cursos.push(curso)
   );
  }

}
