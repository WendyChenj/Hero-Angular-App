import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: String[] = [];

  constructor(public messageService: MessageService) {}

  // only run once after constructing
  ngOnInit() {
    this.getMessages();
  }

  getMessages(): void {
    this.messages = this.messageService.messages;
  }

  clearMessages(): void {
    this.messageService.clear();
  }
}