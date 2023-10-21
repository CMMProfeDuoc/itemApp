import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  items !: any[];

  constructor(
    private itemService : ItemService,
    private router : Router,
  ) { }

  ngOnInit() {
    this.items = this.itemService.getAllItems();
  }
  

}
