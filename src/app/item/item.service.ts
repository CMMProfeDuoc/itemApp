import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  public items : any[] = [
    {
      id:'1',
      name:'pelota',
      tipo:'juegete',
      price:3000,
      disponible:true,
      imageURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/1930s_soccer_ball_-_Skagit_County_Historical_Museum.jpg/1200px-1930s_soccer_ball_-_Skagit_County_Historical_Museum.jpg'
    },
    {
      id:'2',
      name:'taza',
      tipo:'taza',
      price:2000,
      disponible:true,
      imageURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/248px-A_small_cup_of_coffee.JPG'
    },
    {
      id:'3',
      name:'lapiz',
      disponible:true,
    },
    {
      id:'4',
      name:'goma',
      disponible:false,
    },
    {
      id:'5',
      name:'poli station',
      disponible:true,
    }
  ];

  constructor() { }

  getAllItems () {
    return [...this.items];
  }

  getItem (itemID:string) {
    return {
      ...this.items.find( item => {
        return item.id === itemID;
      })
    };
  }

}
