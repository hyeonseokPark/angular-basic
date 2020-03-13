import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  helloTitle = "This is HelloServece Title";
  constructor() { }
  
  getTitle(){
    return this.helloTitle;
  }
  setTitle(title){
    return this.helloTitle;
  }
}
