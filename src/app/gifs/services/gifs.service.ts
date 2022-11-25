import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  //constructor() { }
  private apiKey: string = 'SA4udh7WzI6NN2wNRAbpzcCjVXpGaWgG';
  private _historial: string[]= [];

  get historial(){
    return [...this._historial];
  }

  buscarGifs(query: string = ''){
    
    query = query.trim().toLowerCase();
    //this._historial.unshift(query);

    if(!this._historial.includes(query)){
        this._historial.unshift(query);
        this._historial = this._historial.splice(0,10);
    }
    

    console.log(this._historial);
  }

}
