import { Component } from '@angular/core';
import { from, map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  constructor(private service: ApiService){}

  ngOnInit(){
    this.operatorMap();
  }

  operatorMap(){
    const arr$ = from([
      {name: 'Denilson',age: 30},
      {name: 'Leo',age: 25},
      {name: 'Amanda',age: 40}
    ]);

    const arrNumbers$ = from([1,2,3,4,5]);

    const arrNumbersMap$ = arrNumbers$.pipe(
      map(val => val * 2)
    )
    
    const arrMap$ = arr$.pipe(
      map(({name}) => name)
    )

    arrMap$.subscribe(console.log);
    arrNumbersMap$.subscribe(console.log);

    this.service.getUserHttp().subscribe(console.log);
  
  }

}
