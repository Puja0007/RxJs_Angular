import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-from-of',
  templateUrl: './from-of.component.html',
  styleUrls: ['./from-of.component.css']
})
export class FromOfComponent implements OnInit {
ofData:any;
fromData:any;
  constructor() { }

  ngOnInit(): void {
    // of() converts the arguments to an observable sequence.
this.ofData = of("Puja","Adi","Anirban","Billo");
this.ofData.subscribe((res:any)=>{
  console.log(res);
})

// Turn an array, promise, or iterable into an observable.
this.fromData = from([1,2,3,4]);
this.fromData.subscribe((res:any)=>{
  console.log(res)
})
  }

}
