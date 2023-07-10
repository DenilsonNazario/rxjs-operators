import { Component } from '@angular/core';
import { forkJoin, of, throwError, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.scss']
})
export class ForkjoinComponent {

  constructor(private service: ApiService){}

  ngOnInit(){
    // this.operatorForkJoin();
    this.getUser();
  }

  operatorForkJoin(){

    const http$ = forkJoin(
      {
        apilocal: ajax.getJSON('http://localhost:3000/users'),
        apiExterna: ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1')
      }
    );

    const httpMult$ = forkJoin({
      first: of(1,2,3),
      seconds: timer(1000),
      pro: Promise.resolve(10),
      // error: throwError('error'), //Caso ocorra um erro, nao temos os demais retornos
    });

    http$.subscribe(res => console.log(res));
    httpMult$.subscribe(res => console.log(res));

  }

  getUser(){
    this.service.getUserForkJoin().subscribe(res => console.log(res))
  }

}
