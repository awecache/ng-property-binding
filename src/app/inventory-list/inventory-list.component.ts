import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../models/Item.model';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css'],
})
export class InventoryListComponent implements OnInit {
  @Input() items: Item[] = [];
  @Output() addItem = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onAdd(id: string) {
    this.addItem.next(id);
  }
}
