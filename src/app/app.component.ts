import { Component, ViewChild, AfterViewInit } from '@angular/core';
// import { PopuponeditComponent } from './popuponedit/popuponedit.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';
import { applicantModel } from './Model/Applicant';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { PopuponeditComponent } from './popuponedit/popuponedit.component';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet, 
    ReactiveFormsModule,
    MatDialogModule,
    // PopuponeditComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  applicantForm: FormGroup = new FormGroup({});

  applicantObj: applicantModel = new applicantModel();

  applicantList: applicantModel[] = []; // Once Page Load, Read the Data

  constructor(
    private dialog: MatDialog
  ) {
    this.createForm()
    const oldData = localStorage.getItem("ApplicantData"); // trying to read the local storage data
    if (oldData != null) { // if there is some data, only then parse it otherwise show empty []
      const parseData = JSON.parse(oldData);
      this.applicantList = parseData;
    }
  }

  createForm() {
    debugger
    this.applicantForm = new FormGroup({
      applicantid: new FormControl(this.applicantObj.applicantid),
      firstName: new FormControl(this.applicantObj.firstName, [Validators.required]),
      lastName: new FormControl(this.applicantObj.lastName),
      emailId: new FormControl(this.applicantObj.emailId, [Validators.required]),
      phoneNumber: new FormControl(this.applicantObj.phoneNumber, [Validators.required, Validators.minLength(10)]),
      address: new FormControl(this.applicantObj.address),
      pinCode: new FormControl(this.applicantObj.pinCode),
      city: new FormControl(this.applicantObj.city),
      state: new FormControl(this.applicantObj.state),
      country: new FormControl(this.applicantObj.country),
      adharNo: new FormControl(this.applicantObj.adharNo),
      panCard: new FormControl(this.applicantObj.panCard),
      employmentStatus: new FormControl(this.applicantObj.employmentStatus),
    })
  }

  reset() {
    this.applicantObj = new applicantModel();
    this.createForm()
  }

  onSave() {
    debugger;
    const oldData = localStorage.getItem("ApplicantData");
    if (oldData != null) {
      const parseData = JSON.parse(oldData);
      this.applicantForm.controls['applicantid'].setValue(parseData.length + 1)
      this.applicantList.push(this.applicantForm.value)
    } else {
      this.applicantList.push(this.applicantForm.value)
    }
    localStorage.setItem("ApplicantData", JSON.stringify(this.applicantList)) // saving the data into local storage
    this.reset()
  }

  addNew(item: applicantModel) {
    this.dialog.open(PopuponeditComponent, {
      width: "90%",
      height: "650px"
    })

    this.applicantObj = item;
    this.createForm() // to initialize the form with the value we have

  }

  onEdit(item: applicantModel) {
    this.applicantObj = item;
    this.createForm() // to initialize the form with the value we have

  }

  onUpdate() {
    debugger
    const record = this.applicantList.find(item => item.applicantid == this.applicantForm.controls['applicantid'].value)
    if (record != undefined) {
      // record.applicantId = this.applicantForm.controls['applicantid'].value
      record.firstName = this.applicantForm.controls['firstName'].value
      record.lastName = this.applicantForm.controls['lastName'].value
      record.emailId = this.applicantForm.controls['emailId'].value
      record.phoneNumber = this.applicantForm.controls['phoneNumber'].value
      record.address = this.applicantForm.controls['address'].value
      record.pinCode = this.applicantForm.controls['pinCode'].value
      record.city = this.applicantForm.controls['city'].value
      record.state = this.applicantForm.controls['state'].value
      record.country = this.applicantForm.controls['country'].value
      record.adharNo = this.applicantForm.controls['adharNo'].value
      record.panCard = this.applicantForm.controls['panCard'].value
      record.employmentStatus = this.applicantForm.controls['employmentStatus'].value
    }
    localStorage.setItem("ApplicantData", JSON.stringify(this.applicantList))
    this.reset()
  }

  // @ViewChild(PopuponeditComponent) Popupcomponent?: PopuponeditComponent
  onDelete(id: number) {
    const isDelete = confirm(" Do you want to delete for sure? ")
    if (isDelete) {
      const index = this.applicantList.findIndex(i => i.applicantid == id)
      this.applicantList.splice(index, 1)
      localStorage.setItem("ApplicantData", JSON.stringify(this.applicantList))
    }
  }
}
