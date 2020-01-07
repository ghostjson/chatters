export class Message {
    sender: string;
    time: string;
    message: string;

    constructor(sender: string, time:string, message:string){
        this.sender = sender;
        this.time = time;
        this.message = message;
    }
}