import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  Users(){
    return [
      { name:'John', age:30, email:'john@test.com'},
      { name:'Justin', age:35, email:'justin@test.com'},
      { name:'Smith', age:40, email:'smith@test.com'}
    ]
  }
}
