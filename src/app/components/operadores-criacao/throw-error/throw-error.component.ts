import { Component } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.scss']
})
export class ThrowErrorComponent {

  ngOnInit(){
    this.operatorThrowError();
  }
  operatorThrowError(){
    const err = throwError({
      status: 401,
      message: 'Unauthorized'
    });

    err.subscribe(res => {

    },
    (error) => {
      console.log('ERRO: ', error);
    },
    ()=> {
      console.log('complete');
    })
  }
}
