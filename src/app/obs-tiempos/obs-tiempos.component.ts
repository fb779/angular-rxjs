import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { startWith, take } from 'rxjs/operators';

@Component({
  selector: 'app-obs-tiempos',
  templateUrl: './obs-tiempos.component.html',
  styleUrls: ['./obs-tiempos.component.css']
})
export class ObsTiemposComponent implements OnInit {
  inicio = false;
  
  interval$: Observable<number> = interval(1000).pipe(
    startWith(100),
    take(10)
  );

  constructor() { }

  ngOnInit() {
    this.interval$.subscribe(
      (n)=>{console.log(`Valor del contador ${n}`)},
      (err)=>{},
      ()=>{console.log('done')}
    )
  }

}