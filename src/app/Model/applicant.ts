export class applicantModel {
    applicantid : number;
    firstName: string;
    lastName: string;
    emailId: string;
    phoneNumber: string;
    address: string;
    pinCode : string;
    city: string;
    state: string;
    country: string;
    adharNo: string;
    panCard: string;
    employmentStatus: string;
    // ["","Employed", "Self Employed", "Student", "Unemployed"];

    constructor() {
        this.applicantid = 1;
        this.firstName = "";
        this.lastName = "";
        this.emailId = "";
        this.phoneNumber = "";
        this.address = "";
        this.pinCode = "";
        this.city = "";
        this.state = "";
        this.country = "";
        this.adharNo = "";
        this.panCard = "";
        this.employmentStatus = "";

    }
} 
