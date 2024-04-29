import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  subTitle: string = 'Contador con estado de session';
  
  users?: string[] = ['Juan', 'Pedro', 'Andres', 'Maria'];
  
  visible: boolean = false;
  
  counter: number = 0;
  
  title: string = 'Hola mundo Angular !';

  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;
  }

  setVisible(): void {
    this.visible = this.visible? false: true;
    console.log('Hemos hecho clic en setVisible');
  }
  
  setCounter(counter: number): void {
    this.counter = counter;
  };
}
