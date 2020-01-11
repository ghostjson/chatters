export class Contact{
    public firstName : string;
    public lastName : string;
    public username : string;
    public phone : number;

    constructor(firstName : string, lastName : string , username : string, phone : number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.phone = phone;
    }
}