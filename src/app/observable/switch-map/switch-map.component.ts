import { Component, OnInit } from '@angular/core';
import { from, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source = from(["Puja","Adi","Anirban"]);
    //map+switchAll
   // source.pipe(map(res=>this.getData(res)),switchAll()).subscribe(res=>console.log(res));
   // mergeMap
   source.pipe(switchMap(res=>this.getData(res))).subscribe(res=>console.log(res));

  }
  // switchMap
 
  getData(data:string){
    return of(data+" "+"Uploaded");
  }
  }


