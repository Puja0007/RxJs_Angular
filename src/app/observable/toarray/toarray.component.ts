import { Component, OnInit } from '@angular/core';
import { from, of, toArray } from 'rxjs';

@Component({
  selector: 'app-toarray',
  templateUrl: './toarray.component.html',
  styleUrls: ['./toarray.component.css']
})
export class ToarrayComponent implements OnInit {
ofData:any;
  constructor() { }

  ngOnInit(): void {
this.ofData = of("puja","anirban","adi");
this.ofData.pipe(toArray()).subscribe((res:any)=>{
console.log(res);
})
  }

}
