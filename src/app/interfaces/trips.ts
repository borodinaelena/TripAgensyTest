export interface ITrip {
    id: string,
    title: string,
    imageUrl: string,
    fromDate: string,
    toDate: string,
    location: string,
    price: number
}

export interface IMyTrip{
    title: string,
    id: string,
    imageUrl: string,
    fromDate: string,
    toDate: string,
    location: string,
    price: number,
    avgRating: number,
    description: string,
    like: boolean
}