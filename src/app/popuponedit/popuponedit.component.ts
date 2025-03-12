import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { applicantModel } from '../Model/Applicant';


@Component({
  selector: 'app-popuponedit',
  imports: [ReactiveFormsModule],
  templateUrl: './popuponedit.component.html',
  styleUrl: './popuponedit.component.css'
})
export class PopuponeditComponent {

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

    this.applicantForm = new FormGroup({
      applicantid: new FormControl(this.applicantObj.applicantid),
      firstName: new FormControl(this.applicantObj.firstName, [Validators.required]),
      lastName: new FormControl(this.applicantObj.lastName, [Validators.required]),
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

  reset(){
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

  // addApplicant() {
  //   // this.applicantObj = item;
  //   this.createForm() // to initialize the form with the value we have

  // }

  // addApplicant(item: applicantModel) {
  //   this.dialog.open(PopuponeditComponent, {
  //     width: "100%",
  //     height: "900px"
  //   })
  //   this.applicantObj = item;
  //   this.createForm() // to initialize the form with the value we have

  // }

  // onEdit(item: applicantModel) {
  //   this.dialog.open(PopuponeditComponent, {
  //     width: "90%",
  //     height: "900px"
  //   })
  //   this.applicantObj = item;
  //   this.createForm() // to initialize the form with the value we have

  // }

//   onDelete(id: number) {
//     const isDelete = confirm(" Do you want to delete for sure? ")
//     if (isDelete) {
//       const index = this.applicantList.findIndex(i => i.applicantid == id)
//       this.applicantList.splice(index, 1)
//       localStorage.setItem("ApplicantData", JSON.stringify(this.applicantList))
//     }
//   }
}
