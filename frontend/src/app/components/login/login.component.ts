import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Client: ClientService, private Token: TokenService) {
  }

  public error = null;

  public form = {
    email: null,
    password: null
  };

  onSubmit() {
    this.Client.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  /**
   * Handle response
   *
   * @param data
   */
  handleResponse(data) {
    this.Token.handle(data.access_token);
  }

  /**
   * Handle error
   *
   * @param error
   */
  handleError(error) {
    this.error = error.error.error;
  }

  ngOnInit(): void {
  }

}
