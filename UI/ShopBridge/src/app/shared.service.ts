import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:50666/api/";
readonly PhotoUrl = "http://localhost:50666/Photos/";

  constructor(private http:HttpClient) { }

  getItemList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/item');
  }

  addItem(val:any){
    return this.http.post(this.APIUrl+'/item',val);
  }

  updateItem(val:any){
    return this.http.put(this.APIUrl+'/item',val);
  }

  deleteItem(val:any){
    return this.http.delete(this.APIUrl+'/item/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/item/SaveFile',val);
  }

  getAllItemNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/item/GetAllItem');
  }
}
