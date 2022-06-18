import { Component, OnInit, VERSION } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  newMessage: string;
  messageList: any[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getNewMessage().subscribe((message: string) => {
      if (message) {
        const msg = message.split('said');
        msg.push(new Date().toLocaleString());
        this.messageList.push(msg);
      }
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
 hashCode(str) { 
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
} 

 intToRGB(i){
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
}
  name = 'Angular ' + VERSION.major;
}
