export interface IPost{
    id?: number;
    image?: File | string;
    title: string;
    description: string;
    likes?: number;
    dislikes?: number;
    createdAt?: string;
}