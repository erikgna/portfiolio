export interface LoginInterface{
    email: string;
    password: string;
}

export interface RegisterInterface{
    fullName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

export interface UserInterface{
    token: string;
    refreshToken: string;
    email: string;
    password: string;
}