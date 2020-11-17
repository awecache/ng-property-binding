import { Component } from '@angular/core';
import { CartItem } from './models/cartItem.model';
import { Item } from './models/Item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shopping-cart';
  items: Item[] = [
    {
      id: '1',
      description: 'apple',
      imageUrl: 'assets/apple.jpg',
    },
    {
      id: '2',
      description: 'apricot',
      imageUrl: 'assets/apricot.jpg',
    },
    {
      id: '3',
      description: 'banana',
      imageUrl: 'assets/banana.jpg',
    },
    {
      id: '4',
      description: 'black current',
      imageUrl: 'assets/black-current.jpg',
    },
  ];

  cart: CartItem[] = [];

  addItemToCart(id: string) {
    const itemIndex = this.cart.findIndex((item) => item.id === id);
    itemIndex != -1
      ? this.cart[itemIndex].quantity++
      : this.cart.push({ id, quantity: 1 });
    this.cart = [...this.cart];
  }

  removeItemFromCart(id: string) {
    const itemIndex = this.cart.findIndex((item) => item.id === id);
    if (this.cart[itemIndex].quantity === 1) {
      console.log('splice');
      this.cart.splice(itemIndex, 1);
    } else {
      this.cart[itemIndex].quantity--;
    }
    this.cart = [...this.cart];
  }
}
