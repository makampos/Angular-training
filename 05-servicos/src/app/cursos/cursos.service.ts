import { Injectable,EventEmitter } from '@angular/core'

 
@Injectable()
export class CursosService {
    // escutar evento
    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();
    

    private cursos: string[] = ['Angular 2', 'Java', '.NET'];
    constructor(){
        console.log('CursosService');
    }

    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string){
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}