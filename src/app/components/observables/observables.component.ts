import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  ngOnInit(){
    this.initObservable();
  }

  initObservable(){
    const observable = new Observable((subscriber) =>{
      subscriber.next(10);
      subscriber.next('Denilson');
      subscriber.next(true);
      subscriber.next({age: 30});
      subscriber.complete();
    })
    // MODO COMUM
    // observable.subscribe(res => {
    //   console.log(res);
    // },
    // (error) =>{
    //   console.log(error);
    // },
    // () => {
    //   console.log('Finish')
    // })

    const observer = {
      next: (x: any) => console.log('next value: ' + x),
      error: (err: any) => console.error('observer error ' + err),
      complete: ()=> console.log('observer Complete!')
    }

    const it = interval(1000);

    const subscripton = observable.subscribe(observer);
    const subscripton2 = it.subscribe(console.log);


    setTimeout(()=> {
      subscripton2.unsubscribe();
    }, 3000)

  
  }

}
