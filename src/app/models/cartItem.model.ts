export interface CartItem {
  id: string;
  quantity: number;
}

export interface RenderedCartItem extends CartItem {
  description: string;
  quantity: number;
  imageUrl: string;
}
