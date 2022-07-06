import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit,AfterViewInit {
  @ViewChild('addBut')addButton!:ElementRef;
  constructor() { }

  ngOnInit(): void {
   
  }

  ngAfterViewInit(){
 // Creates an Observable that emits events of a specific type coming from the given event target.
 fromEvent(this.addButton.nativeElement,'click').subscribe((res)=>{
  console.log(res);
})
  }

}
