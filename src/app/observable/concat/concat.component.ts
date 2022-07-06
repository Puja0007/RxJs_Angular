import { Component, OnInit } from '@angular/core';
import { concat, interval, map, merge, take } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const sourceAngular = interval(2000).pipe(take(5),
    map(res=>("Angular"+" "+ res))
    )
    const sourceReact = interval(1000).pipe(take(3),
    map(res=>("React"+" "+ res))
    )
   //mentain order
    const concatData = concat(sourceAngular,sourceReact);
    concatData.subscribe((res)=>{
      console.log(res);
    })
// doesnot mentain any order
    const mergeData = concat(sourceAngular,sourceReact);
    mergeData.subscribe((res)=>{
      console.log(res);
    })
  }

}
