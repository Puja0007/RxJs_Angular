import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';


@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit,OnDestroy {
  intervalData: any;
  timerData:any;
  constructor() { }

  ngOnInit(): void {
    //Emits incremental numbers periodically in time.
    this.intervalData = interval(2000);
    const data= this.intervalData.subscribe((res:any)=>{
      console.log("Interval"+ ""+res);
    })

    // Used to emit a notification after a delay.
    //timer(due: number | Date, scheduler?: SchedulerLike):
  this.timerData = timer(1000,2000);
  const data2 = this.timerData.subscribe((res:any)=>{
    console.log("Timer"+ ""+res)
  })

  }

  ngOnDestroy(){
this.intervalData.unsubscribe();
this.timerData.unsubscribe();
  }

}
