export interface Barbers {
    id: number;
    avatar_url: string;
    name: string;
    stars: number;
    services: Services[];
    available: Available[];
}

export interface Services {
    id: number;
    name: string;
    price: number;
}

export interface Available {
    date: string;
    hours: string[];
}
