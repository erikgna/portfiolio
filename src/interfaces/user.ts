export interface UserInterface{
    id?: number;
    name?: string;
    email: string;
    password: string;
    confirmPassword?: string;
    accessToken?: string;
}