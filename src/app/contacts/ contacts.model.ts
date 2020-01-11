export class Contact{
    public firstName : string;
    public lastName : string;
    public username : string;
    public phone : number;
    public profilePic : string;

    constructor(firstName : string, lastName : string , username : string, phone : number, profilePic: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.phone = phone;
        this.profilePic = profilePic;

    }
}