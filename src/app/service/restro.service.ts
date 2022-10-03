import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestroService {

  constructor(private http:HttpClient) { }
  url='http://localhost:3000/restaurants';
  getList(){
    return this.http.get(this.url);
  }
  saveRestro(data:any){
  //  console.log(data);
    return this.http.post(this.url,data);
  }
  deleteRestro(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
}
