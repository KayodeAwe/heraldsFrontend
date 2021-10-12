import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { CountriesDataServiceService } from '../services/countries-data-service.service';
import {  CountryStates } from '../interfaces/country-states';

@Component({
  selector: 'app-satelite-community',
  templateUrl: './satelite-community.component.html',
  styleUrls: ['./satelite-community.component.css']
})
export class SateliteCommunityComponent implements OnInit {

  constructor(private fb: FormBuilder, private _countriesDataService : CountriesDataServiceService) { }

  public errorMsg;

  public CountryCategories$ :Array<any>;
  public StatesCategories$ : Array<any>;
  public listOfStates: Array<any>;

  ngOnInit(): void {
    this._countriesDataService.getCountry().subscribe(data => {this.CountryCategories$ = data["data"],
      error => this.errorMsg = error,
      console.log("check it out", this.CountryCategories$["data"])
    });
  }

  changeState(){
    console.log("country Value", this.sateliteCommunityForm.value.country);


      this.StatesCategories$ = this.CountryCategories$.filter(res =>{

      return res.name.toLocaleLowerCase().match(this.sateliteCommunityForm.value.country.toLocaleLowerCase())})

        this.listOfStates = this.StatesCategories$[0].states;
      console.log("the states", this.listOfStates)
  }


  sateliteCommunityForm = this.fb.group({
    country : ['', [Validators.required]],
    state : ['', [Validators.required]],
    city  : ['', [Validators.required]],
    Residential_address : ['', [Validators.required, Validators.minLength(5)]],
    surname : ['', [Validators.required]],
    firstname : ['', [Validators.required]],
    middlename : '',
    gender : ['', [Validators.required]],
    phoneNumber: ['' ,[Validators.required]],
    dateOfBath : ['', [Validators.required]],
    email : ['', [Validators.required]],
    marital_status : ['', [Validators.required]],
    occupation : ['', [Validators.required]],
    nameOfNextOfKin : ['', [Validators.required]],
    PhoneNumberOfNextOfKin : ['', [Validators.required]],
  })


  onSubmit(){

  }

  public pageContent = {
    header:{
      title: 'SATELITE COMMUNITY',
      subtitle: 'Welcome, to a warm Family',
      logOutbtn: '',
      img_src: "testheader-bg-overlay-sateliteCommunity",
      audiobtn: '',
      videobtn: ''
    }
  };

}
