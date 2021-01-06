import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://mg7.com'
  cursoAngular: boolean = true;

  urlImagem: string = 'https://i.picsum.photos/id/446/200/300.jpg?hmac=VaF-vrs-svfPoYxxsTKI08lxXNlPBzqyj97M82eX8mc'
  
  getValor(){
    return 1;
  }

  getCurtirAngular(){
    return true;
  }

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 15;

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}
