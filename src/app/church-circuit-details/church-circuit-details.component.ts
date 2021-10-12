import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Church } from '../interfaces/church';
import { CountriesDataServiceService } from '../services/countries-data-service.service';

@Component({
  selector: 'church-circuit-details',
  templateUrl: './church-circuit-details.component.html',
  styleUrls: ['./church-circuit-details.component.css'],
  inputs : ['chosenCircuitDetails'],
  outputs : ['SwitchOnList','updateCircuitEvent', 'deleteCircuitEvent']
})
export class ChurchCircuitDetailsComponent implements OnInit {

  chosenCircuitDetails : Church;

  unsuccessful = false;

  public SwitchOnList = new EventEmitter();
  admin_toggle_btn = true;
  public errorMsg;
  public CountryCategories$ :Array<any>;
  public StatesCategories$ : Array<any>;
  public listOfStates: Array<any>;

  private updateCircuitEvent = new EventEmitter();
  private deleteCircuitEvent = new EventEmitter();

  SwitchValue = true;
  hideDetails = true;

  constructor(private fb: FormBuilder, private _countriesDataService : CountriesDataServiceService) { }

  ngOnInit(): void {
    this.hideDetails = true;

    this._countriesDataService.getCountry().subscribe(data => {this.CountryCategories$ = data["data"],
    error => this.errorMsg = error,
    console.log("check it out", this.CountryCategories$["data"])
    });
  }

  toggleListbtn(){
    this.SwitchOnList.emit(this.SwitchValue);
  }

  toggle_admin(){
    this.admin_toggle_btn = false;
    this.newCircuitForm.patchValue({
      _id : this.chosenCircuitDetails._id,
      nameOfCentre : this.chosenCircuitDetails.nameOfCentre,
      city: this.chosenCircuitDetails.city,
      street : this.chosenCircuitDetails.street,
      address : this.chosenCircuitDetails.address,
      img : this.chosenCircuitDetails.img,
      pastorInCharge: this.chosenCircuitDetails.pastorInCharge,
      centerPhoneNumber : this.chosenCircuitDetails.centerPhoneNumber,
      facebookLink : this.chosenCircuitDetails.facebookLink,
      instagramLink: this.chosenCircuitDetails.instagramLink,
      twitterLink : this.chosenCircuitDetails.twitterLink
    })
  }

  newCircuitForm = this.fb.group({
    _id : '',
    nameOfCentre :  ['', [Validators.required]],
    country  :  ['', [Validators.required]],
    //PhoneNumber : ['',Validators.minLength(11)],
    state :  ['', [Validators.required]],
    city :  ['', [Validators.required]],
    street :  ['', [Validators.required]],
    address :  ['', [Validators.required]],
    img :  '',
    pastorInCharge :  ['', [Validators.required]],
    centerPhoneNumber :  ['', [Validators.required]],
    facebookLink :  '',
    instagramLink :  '',
    twitterLink :  '',
  })

  changeState(){
    console.log("country Value", this.newCircuitForm.value.country);


      this.StatesCategories$ = this.CountryCategories$.filter(res =>{

      return res.name.toLocaleLowerCase().match(this.newCircuitForm.value.country.toLocaleLowerCase())})

        this.listOfStates = this.StatesCategories$[0].states;
        console.log("the states", this.listOfStates)
  }


  updateCircuit(){
    if (this.newCircuitForm.valid) {
      this.unsuccessful = false;
      //console.table(this.newCircuitForm.value)
      this.updateCircuitEvent.emit(this.newCircuitForm.value)
    }else{
      this.unsuccessful = true;
    }
  }

  deleteCircuit(){
    this.deleteCircuitEvent.emit(this.newCircuitForm.value)
  }

}
