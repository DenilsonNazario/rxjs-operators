import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent {

  ngOnInit(){
    this.operatorInterval();
  }


  operatorInterval(){
    const number = interval(1000);
    const subscription = number.subscribe(res => console.log(res));

    setTimeout(() => {
    subscription.unsubscribe();
   }, 5000);
    
  }
}
