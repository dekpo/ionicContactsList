import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-entreprise',
  templateUrl: './add-entreprise.page.html',
  styleUrls: ['./add-entreprise.page.scss'],
})
export class AddEntreprisePage implements OnInit {

  constructor(private http: HttpClient, 
    private router: Router,
    private activeRoute: ActivatedRoute) { }

    API_URL = 'http://localhost:3000';

  id = this.activeRoute.snapshot.paramMap.get('id');

  txtHeader = 'Add a new entreprise';
  txtButton = 'Add Entreprise';

  name = '';
  type = '';
  address = '';
  site_url = '';
  description = '';

  onSubmit(formData){
    const headers = new HttpHeaders()
    .set('Content-Type','application/x-www-form-urlencoded');
    const body = new URLSearchParams( formData ).toString();

    if (this.id){

      this.http.put(this.API_URL+'/entreprises/'+this.id, body, { headers } ).subscribe( (response) => {
        if ( response['errors'] ) {
            alert( response['message'] );
            console.log( response );
            } else {
          this.router.navigateByUrl('/entreprises');
         }
        });


    } else {

      this.http.post(this.API_URL+'/entreprises', body, { headers } ).subscribe( (response) => {
        if ( response['errors'] ) {
            alert( response['message'] );
            console.log( response );
            } else {
          this.router.navigateByUrl('/entreprises');
         }
        });


    }

  }


  ngOnInit() {
    console.log('Entreprise _id: ', this.id );
    if (this.id) {
      this.txtHeader = 'Update entreprise '+this.id;
      this.txtButton = 'Update Entreprise';
      this.http.get(this.API_URL+'/entreprises/'+this.id).subscribe( (data) => {
        console.log('Data from API: ', data );
        this.name = data[0]['name'];
        this.type = data[0]['type'];
        this.address = data[0]['address'];
        this.site_url = data[0]['site_url'];
        this.description = data[0]['description'];
      })
    }
  }

}
