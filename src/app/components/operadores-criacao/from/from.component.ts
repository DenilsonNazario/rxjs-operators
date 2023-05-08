import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent {

  ngOnInit(){
    this.operatorFrom();
  }

  operatorFrom(){
    const arr = from([1,2,3,4]);
    const promise = from(new Promise(resolve => resolve('Hello Works!')));
    const str = from('Ola mundo');


    arr.subscribe(res => console.log(res));
    promise.subscribe(res => console.log(res));
    str.subscribe(res => console.log(res));

  }
}
