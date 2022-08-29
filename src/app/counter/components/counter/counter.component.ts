import { Component, OnInit } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html' 
})
export class CounterComponent implements OnInit {

    count: boolean = false;
    countUp: boolean = true;
    value: number = 0;
    set: number = 0;
    speed: number = 1000
    step: number = 1
 

    intervalTimer = interval(1000)
    private _pause$ = new Subject<boolean>()

    start(){
     
      this.intervalTimer
      .pipe(
   
        takeUntil(this._pause$)

      )
      .subscribe( () => { 
        if(!this.count){
          this.value = this.set
        }

          this.count = true;
          this.countUp ? this.value += this.step : this.value -= this.step
        
      }
      )
      
    }

    changeUp(upOrDow: boolean){
      this.countUp = upOrDow; 
    }

    pause(){
      this._pause$.next(false)
    }

    reset(){
      this.value = 0;
      this.step = 1;
      this.set = 0;
      this.count = false
    }
    
    changeSet( event: any ){
     
      this.value = parseInt(event.target.value)

    }

    changeStep( event: any ){
 
      this.step = parseInt(event.target.value)

    }

  constructor() { }

  ngOnInit(): void {
  }

}
