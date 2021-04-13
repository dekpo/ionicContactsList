import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {

  constructor(
    private http: HttpClient, 
    private router: Router,
    private activeRoute: ActivatedRoute) { }
  
  API_URL = 'http://localhost:3000';

  id = this.activeRoute.snapshot.paramMap.get('id');

  txtHeader = 'Add a new contact';
  txtButton = 'Add Contact';

  firstname = '';
  lastname = '';
  email = '';
  company = '';
  phone = '';
  message = '';

  company_id = '';
  companies: any;

  onSubmit(formData){
    const headers = new HttpHeaders()
    .set('Content-Type','application/x-www-form-urlencoded');
    const body = new URLSearchParams( formData ).toString();

    if (this.id) {
      // methode pour mettre à jour
    this.http.put(this.API_URL+'/contacts/'+this.id, body, { headers } ).subscribe( (response) => {
      if ( response['errors'] ) {
          alert( response['message'] );
          console.log( response );
          } else {
        this.router.navigateByUrl('/home');
       }
      });
    } else {
      // methode post pour ajouter
    this.http.post(this.API_URL+'/contacts', body, { headers } ).subscribe( (response) => {
      if ( response['errors'] ) {
          alert( response['message'] );
          console.log( response );
          } else {
        this.router.navigateByUrl('/home');
       }
      });
    }

  }

  ngOnInit() {

    // récup des entreprises dispos dans la bdd
    this.http.get(this.API_URL+'/entreprises').subscribe( (data) => {
      console.log('Data Entreprises', data );
      this.companies = data;
      this.companies.reverse();
    });

    // récup des champs d'un contact pour update
    console.log('Contact _id: ', this.id );
    if (this.id) {
      this.txtHeader = 'Update contact '+this.id;
      this.txtButton = 'Update Contact';
      this.http.get(this.API_URL+'/contacts/'+this.id).subscribe( (data) => {
        console.log('Data from API: ', data );
        this.firstname = data[0]['firstname'];
        this.lastname = data[0]['lastname'];
        this.email = data[0]['email'];
        this.phone = data[0]['phone'];
        this.company = data[0]['company'];
        this.company_id = data[0]['company_id'];
        this.message = data[0]['message'];
      })
    }


  }

}
