export interface PostInterface{
    id?: number;
    imageURL?: string;
    image?: File;
    title: string;
    description: string;
    likes?: number;
    dislikes?: number;
}