export interface IUserInfo {
    name: string,
    age: number
}

export class UserInfo implements IUserInfo {
    public name: string;
    public age: number;
    
    constructor() {
        this.name = 'dummyName';
        this.age = 18;
    }
}