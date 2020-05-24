import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChatService {
  private url = 'http://localhost:7001';  
  private socket;
  constructor(public http:HttpClient){}

  getData(){
    return this.http.get('http://localhost:7001/count');
  }
  sendMessage(type,message){
    this.socket.emit('chat', message);    
  }
  
  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('chat', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  
}