import { Component, OnInit } from '@angular/core';
import { CursosService} from './cursos.service'
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal : string;
  cursos: string[];
  constructor(private CursosService: CursosService) { 
    this.nomePortal = 'htts://mg7traning.gg'
    this.cursos = this.CursosService.getCursos();
  }

  ngOnInit() {
  }

}
