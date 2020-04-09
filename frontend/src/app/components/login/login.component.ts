import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Client: ClientService) {
  }

  public error = null;

  public form = {
    email: null,
    password: null
  };

  onSubmit() {
    this.Client.login(this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.error = error.error.error;
  }

  ngOnInit(): void {
  }

}
