import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {
  counter: number = 0;

  @Input() title!: string;

  @Output() counterEmmit: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;
    console.log('creando componente');
  }


  setCounter() :void{
    this.counter++;
    sessionStorage.setItem('counter', this.counter.toString());
    this.counterEmmit.emit(this.counter);
  }
}
