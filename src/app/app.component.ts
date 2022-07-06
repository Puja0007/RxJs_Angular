
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concat, concatMap, from, map , pluck, tap,take} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-Observable';
  data:any;
 
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    
    this.data = this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos').pipe(concatMap((res:any)=>from(res)),pluck('title'),take(5));
    this.data.subscribe((res:any)=> console.log(res));
  }
}
