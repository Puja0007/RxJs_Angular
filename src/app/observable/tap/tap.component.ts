import { Component, OnInit } from '@angular/core';
import { interval, Subscription, tap} from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {
 data!: Subscription;
  constructor() { }

  ngOnInit(): void {
    const arr =["Rplanx","Geotech","Techmojo","Velotio","Microsoft"];
    const source = interval(1000);
    this.data = source.pipe(tap(res=>{
      if(res == 5){
        this.data.unsubscribe();
      }
    })).subscribe((res)=>{
      console.log(arr[res]);
    })

  }

}
