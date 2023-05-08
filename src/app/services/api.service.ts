import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concat, forkJoin, interval, map, merge, zip } from 'rxjs';
import { Api } from '../enum/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUserForkJoin(): Observable<any>{

    const http$ = forkJoin(
      {
        apiLocal: this.http.get(Api.URL_LOCAL),
        apiExterna: this.http.get(Api.URL_EXTERNA),
      }
    );

    return http$;
  }

  getUsersZip(): Observable<any>{
    const apiLocal$ = this.http.get(Api.URL_LOCAL);
    const apiExterna$ = this.http.get(Api.URL_EXTERNA);
    const result$ = zip(apiLocal$, apiExterna$);

    return result$;
  }

  getUsersMerge(): Observable<any> {
    const it$ = interval(1000);
    const apiLocal$ = this.http.get(Api.URL_LOCAL);
    const apiExterna$ = this.http.get(Api.URL_EXTERNA);
    const result$ = merge(it$,apiLocal$, apiExterna$);

    return result$;
  }

  getUsersConcat(): Observable<any> {
    const it$ = interval(1000);
    const apiLocal$ = this.http.get(Api.URL_LOCAL);
    const apiExterna$ = this.http.get(Api.URL_EXTERNA);
    const result$ = concat(it$,apiLocal$, apiExterna$);

    return result$;
  }

  getUserHttp(){
    const http$ = this.http.get(Api.URL_EXTERNA).pipe(
      map((data: any) => data.title)
    )
    return http$;
  }

  getUserSwitchMap(){
    return this.http.get('http://localhost:3000/user')
  }

  getUserSwitchMapSerach(cpf: string){
    return this.http.get(`${Api.URL_LOCAL}?cpf=${cpf}`)
  }
}
