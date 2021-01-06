import { Injectable } from '@angular/core';

@Injectable()
// @Injectable({
//   providedIn: 'root'
// })
export class CursosService {

  constructor() { }
   getCursos(){
    return  ['Java', 'Ext JS', 'Angular'];
  }
}
