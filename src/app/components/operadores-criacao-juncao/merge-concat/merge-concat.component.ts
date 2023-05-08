import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-merge-concat',
  templateUrl: './merge-concat.component.html',
  styleUrls: ['./merge-concat.component.scss']
})
export class MergeConcatComponent {
  
  constructor(private service: ApiService){}

  ngOnInit(){
    // this.getUserMerge();
    // this.getUserConcat();
  }

  getUserMerge(){
     this.service.getUsersMerge().subscribe(console.log)
  }

  getUserConcat(){
     this.service.getUsersConcat().subscribe(console.log)
  }
}
