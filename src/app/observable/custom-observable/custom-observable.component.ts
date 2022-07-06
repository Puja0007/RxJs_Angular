import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit {
observableData:any;
  constructor() { }

  ngOnInit(): void {
    this.observableData = Observable.create((res:any)=>{
     res.next("Puja");
     res.next("anirban");
     //res.error("error");
     res.complete("finish");
     res.next("adi");
     
    })
    this.observableData.subscribe((res:any)=>{
      console.log(res);
    },
    (err:any)=>{
      console.log(err);
    },
    (complete:any)=>{
      
    }
    )
  }

}
