import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url ='http://localhost:3000/contact/'

  constructor(private http:HttpClient) { }


  create(contact:any){
   return  this.http.post(this.url+'create',contact)
  }
  myCntactList(id:any){
   return  this.http.get(this.url+'myContactList/' + id)
  }
  byId(id:any){
    return this.http.get(this.url+'byid/' + id )
  }
  deleteContact(id:any){
    return this.http.delete(this.url+ 'byid/' + id)
  }
  updateContact(id:any,data:any){
  return  this.http.put(this.url+'update/' + id   ,data)
  }
}
