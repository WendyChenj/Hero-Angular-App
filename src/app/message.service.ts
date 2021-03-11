import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: String[] = [];

  add(message: String) {
    this.messages.push(message);
    console.log(this.messages);
  }

  clear() {
    this.messages = [];
    console.log(this.messages);
  }
}
