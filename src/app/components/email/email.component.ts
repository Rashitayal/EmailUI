import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailServiceService } from 'src/app/service/email-service.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data = {
    to:"",
    subject:"",
    content:""
  }

  constructor( private email:EmailServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  doSubmitForm(){
      if(this.data.to == '' || this.data.subject == '' || this.data.content == ''){
          console.log("dwedw");
        this._snackBar.open('can not send empty fields', '', {
            duration: 2000
          });
        return;
      }
    this.email.sendEmail(this.data).subscribe(
        response=>{
                console.log(response);
                this._snackBar.open('message sent successfully', '', {
                    duration: 2000
                  });
        },
        error=>{
                console.log(error);
                this._snackBar.open('some error occurred', '', {
                    duration: 2000
                  });
        }
    );
  }

}
