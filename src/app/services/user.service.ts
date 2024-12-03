import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url ="http://localhost:3000/user/"

  constructor(private http:HttpClient) { }

login(data:any){
  return this.http.post(this.url+ 'login' , data)
}
signup(data:any){
  return this.http.post(this.url+ 'signup' , data)
}
connected(){
  let token = sessionStorage.getItem('token')
  if (token) {
  return  true
    
  }else{
   return false
  }
}

decodedDataFromToken(){
  let token = sessionStorage.getItem('token');
  if (token) {
    try {
      const data = jwtDecode(token); // jwtDecode decodes the token
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  } else {
    console.warn('No token found in localStorage.');
  }
    
    
    
    
    return
  }

}

