import { Component, OnInit } from '@angular/core';
import { from, Subscription, take, takeLast, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {
obsData!:Subscription;
  constructor() { }

  ngOnInit(): void {
    const nameArr = ["Puja","ani","akash","Adi","Billo","Kourab"];
    const sourceName = from(nameArr);
    // take only first 4 elements
    this.obsData = sourceName.pipe(take(4)).subscribe((res)=>{
      console.log(res);
    })
// take only last 4 elements
    this.obsData = sourceName.pipe(takeLast(4)).subscribe((res)=>{
      console.log(res);
    })

  }

}
