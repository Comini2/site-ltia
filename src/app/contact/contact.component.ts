import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AcessibilityService } from '../acessibility.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  reactiveForm: FormGroup;
  private awsUrl: any = "https://9d593x2gqa.execute-api.us-west-2.amazonaws.com/prod/sendEmail";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  /***************** Acessibility Scripts ***************/
  aOn = {
    'font-size' : '30px',
    'background-color' : '#88ccda',
    'color' : 'black',
    'padding' : '10px',
    'font-weight' : 'bold'
   };

  getAccessibilityState() {
    return AcessibilityService.accessibilityIsOn;
  }

  /********************************************************/

  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      recaptchaReactive: new FormControl(null, Validators.required),
      name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      subject: new FormControl(null, null)
    });
  }

  onSubmit() {
    var messageJSON = JSON.stringify({
      'name': this.reactiveForm.get('name').value,
      'email': this.reactiveForm.get('email').value,
      'subject': this.reactiveForm.get('subject').value,
      'message': this.reactiveForm.get('message').value
      });

    this.httpClient.post(this.awsUrl, messageJSON, this.httpOptions).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }


}
