import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { exhaustMap, fromEvent, pipe } from 'rxjs';

@Component({
  selector: 'app-exhust-map',
  templateUrl: './exhust-map.component.html',
  styleUrls: ['./exhust-map.component.css']
})
export class ExhustMapComponent implements OnInit, AfterViewInit {
@ViewChild('btn') btn!:ElementRef;
num:number=0;
  constructor() { }

  ngOnInit(): void {

   
  }
  ngAfterViewInit(){
    // fromEvent(this.btn.nativeElement, 'click').pipe(exhaustMap(() => this.onSave(this.num++))).subscribe((res)=>{
    //   console.log(res);
    // })
  }
onSave(changes:number){
  console.log(changes);
}
}
