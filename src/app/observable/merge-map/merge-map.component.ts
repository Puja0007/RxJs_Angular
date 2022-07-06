import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, of,mergeMap} from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source = from(["Puja","Adi","Anirban"]);
    //map+mergeAll
   // source.pipe(map(res=>this.getData(res)),mergeAll()).subscribe(res=>console.log(res));
   // mergeMap
   source.pipe(mergeMap(res=>this.getData(res))).subscribe(res=>console.log(res));

  }
  // mergeMap
 
  getData(data:string){
    return of(data+" "+"Uploaded");
  }
}
