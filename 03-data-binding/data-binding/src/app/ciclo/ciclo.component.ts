import { 
  AfterContentChecked, 
  AfterContentInit,
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  DoCheck, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges,OnInit,
 DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {


  @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
   }
 
   ngOnChanges(){
     this.log('ngOnChanges');
   }


  ngOnInit(){

    this.log('ngOninit');
  }

  ngDoCheck(){
    this.log('ngDoCheck');
  }

  ngAfterContentInit(){
    this.log('AfterContentInit');
  }
  
  
  ngAfterContentChecked(){
    this.log('AfterContentChecked');
  }

  ngAfterViewInit(){
    this.log('AfterViewInit');
  }

  ngAfterViewChecked(){
    this.log('AfterViewChecked');
  }

  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}