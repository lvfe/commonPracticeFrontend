import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import exportingInit from 'highcharts/modules/exporting';
import treemap from 'highcharts/modules/treemap';
import { ChatService } from './chat.service';
import * as socket from 'socket.io-client';



exportingInit(Highcharts)
treemap(Highcharts);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'highchartlib';
  
  message;
  connection;
  messages = [];
  constructor(public chatService: ChatService) {

  }
  sendMessage() {
    this.message = "testhello"
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      console.log(12, message);
      this.messages.push(message);
      console.log(12, this.messages);
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}