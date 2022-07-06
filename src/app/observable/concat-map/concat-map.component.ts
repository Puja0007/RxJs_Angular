import { Component, OnInit } from '@angular/core';
import { from, concatMap, of } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source = from(["Puja","Adi","Anirban"]);
    //map+mergeAll
   // source.pipe(map(res=>this.getData(res)),concatAll()).subscribe(res=>console.log(res));
   // mergeMap
   source.pipe(concatMap(res=>this.getData(res))).subscribe(res=>console.log(res));

  }
  // mergeMap
 
  getData(data:string){
    return of(data+" "+"Uploaded");
  }
  }


