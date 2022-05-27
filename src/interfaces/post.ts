export interface IPost{
    id?: number;
    imageURL?: string;
    image?: File;
    title: string;
    description: string;
    likes?: number;
    dislikes?: number;
}