import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CartItem, RenderedCartItem } from '../models/cartItem.model';
import { Item } from '../models/Item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() items: Item[] = [];
  @Input() cart: CartItem[] = [];
  @Output() removeItem = new EventEmitter<string>();

  renderedCart: RenderedCartItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.renderedCart = this.cart.map((item) => ({
      ...item,
      imageUrl: this.items.find((el) => el.id === item.id)?.imageUrl || '',
      description:
        this.items.find((el) => el.id === item.id)?.description || '',
    }));
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.renderedCart = this.cart.map((item) => ({
      ...item,
      imageUrl: this.items.find((el) => el.id === item.id)?.imageUrl || '',
      description:
        this.items.find((el) => el.id === item.id)?.description || '',
    }));
  }

  onRemove(id: string) {
    this.removeItem.next(id);
  }
}
