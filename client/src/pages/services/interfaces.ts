export interface Article {
    id: number,
    title: string, 
    price:number,
    imageUrl: string,
}

export interface CartItem extends Article {
    quantity: number
}