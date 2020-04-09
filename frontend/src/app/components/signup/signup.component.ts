import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public errors = {
    name: null,
    email: null,
    password: null
  };

  public
  form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  };

  constructor(private Client: ClientService) {
  }

  onSubmit() {
    this.Client.signup(this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.errors = error.error.errors;
  }

  ngOnInit()
    :
    void {
  }

}
