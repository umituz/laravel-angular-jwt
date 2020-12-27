import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../../services/client.service";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email: null
  };

  constructor(
    private Client: ClientService,
    private notify: SnotifyService
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.Client.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
  }

  handleResponse(res) {
    console.log(res);
    this.form.email = null;
  }
}
