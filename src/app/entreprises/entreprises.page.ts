import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.page.html',
  styleUrls: ['./entreprises.page.scss'],
})
export class EntreprisesPage implements OnInit {

  constructor(private http:HttpClient) { }

  API_URL = "http://localhost:3000/entreprises";

  entreprises: any;

  delete( id ){
    this.http.delete( this.API_URL+'/'+id ).subscribe( (response) => {
      console.log(response);
      this.getEntreprises();
    })
  }

  getEntreprises(){
    this.http.get( this.API_URL ).subscribe( (data) => {
      console.log(data);
      this.entreprises = data;
      this.entreprises.reverse();
    });
  }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getEntreprises();
  }
}
