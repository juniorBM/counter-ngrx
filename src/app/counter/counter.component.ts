import { decrement, increment } from './../ngrx';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  public counter$: Observable<any> = new Observable<any>;

  constructor(private store: Store<{ counter: number }>) {

  }

  ngOnInit(): void {

    this.counter$ = this.store.pipe(
      select('counter')
    );
  }

  decrement() {
    timer(2000).subscribe(() => {
      this.store.dispatch(decrement({payload: 3}));
    })
  }

  increment() {
    timer(2000).subscribe(() => {
      this.store.dispatch(increment({payload: 3}));
    })

  }
}
