import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareModule } from '../share/share.module';

@Injectable({
  providedIn: ShareModule
})
export class MockService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get('http://localhost:8080/assets/data/movies.json');
  }

  login(input: string){
    console.log(input);
    return this.http.get(`../../assets/data/${input}.json`);
  }
}
