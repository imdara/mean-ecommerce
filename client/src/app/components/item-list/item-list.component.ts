import { Component, OnInit, Output } from '@angular/core';
import { GetItemsService } from 'src/app/services/get-items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  constructor(private getItems: GetItemsService) {}

  items: any[] = [];

  ngOnInit(): void {
    this.getItems
      .fetchItems()
      .then((res) => (this.items = res))
      .catch((err) => console.log(err));
  }
}
