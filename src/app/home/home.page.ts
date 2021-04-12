import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http:HttpClient) { }

  API_URL = "http://localhost:3000/contacts";

  contacts: any;

  delete( id ){
    this.http.delete( this.API_URL+'/'+id ).subscribe( (response) => {
      console.log(response);
      this.getContacts();
    })
  }

  getContacts(){
    this.http.get( this.API_URL ).subscribe( (data) => {
      console.log(data);
      this.contacts = data;
      this.contacts.reverse();
    });
  }

  ionViewWillEnter(){
    this.getContacts();
   }

}
