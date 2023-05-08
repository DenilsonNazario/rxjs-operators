import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {

  ngOnInit (){
    this.initSubject();
  }

  initSubject() {
    const subject = new Subject<number>();
    const subjectBehavior = new BehaviorSubject(0);


    subject.subscribe({
      next: (v) => console.log(v)
    });

    subjectBehavior.subscribe({
      next: (v) => console.log(v)
    });

    subject.next(10);
    subjectBehavior.next(12);

  }
}
