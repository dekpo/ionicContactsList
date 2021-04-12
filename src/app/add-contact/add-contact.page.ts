import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  firstname = '';
  lastname = '';
  email = '';
  company = '';
  phone = '';
  message = '';

  onSubmit(formData){
    const headers = new HttpHeaders()
    .set('Content-Type','application/x-www-form-urlencoded');
    const body = new URLSearchParams( formData ).toString();

    this.http.post('http://localhost:3000/contacts', body, { headers } ).subscribe( (response) => {

    if ( response['errors'] ) {
        alert( response['message'] );
        console.log( response );
        } else {
      this.router.navigateByUrl('/home');
     }

    });
  }

  ngOnInit() {
  }

}
