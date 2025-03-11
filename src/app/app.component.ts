import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { applicantModel } from './Model/Applicant';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet, 
    ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  applicantForm: FormGroup = new FormGroup({});
  applicantObj: applicantModel = new applicantModel();

  constructor () {
    this.createForm()
  }

  createForm() {

    this.applicantForm = new FormGroup({
      applicantid: new FormControl(this.applicantObj.applicantId),
      firstName: new FormControl(this.applicantObj.firstName),
      lastName: new FormControl(this.applicantObj.lastName),
      emailId: new FormControl(this.applicantObj.emailId),
      phoneNumber: new FormControl(this.applicantObj.phoneNumber),
      address: new FormControl(this.applicantObj.address),
      pinCode : new FormControl(this.applicantObj.pinCode),
      city: new FormControl(this.applicantObj.city),
      state: new FormControl(this.applicantObj.state),
      country: new FormControl(this.applicantObj.country),
      adharNo: new FormControl(this.applicantObj.adharNo),
      panCard: new FormControl(this.applicantObj.panCard),
      employmentStatus: new FormControl(this.applicantObj.employmentStatus),
    })
  }
}
