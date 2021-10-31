export interface Barbers {
    id: number,
    avatar_url: string,
    name: string,
    stars: number,
    services: {name: string, price: number}
}

export interface Services {
    id: number,
    name: string,
    price: number
}