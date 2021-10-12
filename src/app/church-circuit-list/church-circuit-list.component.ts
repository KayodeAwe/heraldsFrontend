import { Component, Input, OnInit,EventEmitter } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Church } from '../interfaces/church';

@Component({
  selector: 'church-circuit-list',
  templateUrl: './church-circuit-list.component.html',
  styleUrls: ['./church-circuit-list.component.css'],
  inputs : ['countriesData','circuitsData', 'SwitchDivStyle'],
  outputs : ['state_filter', 'country_filter', 'chosenCircuitEmitter','UnhideForm']
})
export class ChurchCircuitListComponent implements OnInit {

  public state_filter = new EventEmitter();
  public country_filter = new EventEmitter();
  public chosenCircuitEmitter = new EventEmitter();
  public UnhideForm = new EventEmitter();

  p: number = 1;

  unhideValue : boolean;
  SwitchDivStyle : boolean;
  countriesData : any;
  StatesCategories$:any;
  circuitsData:any;
  selectedCircuitData : any;
  listOfStates : [];

  selectedCircuit:Church;

  constructor(private fb: FormBuilder) { }

  CountryForm = this.fb.group({
    countryChoice :  '',
    state:''
  })

  ngOnInit(): void {

  }

  changeState(){
      if (this.CountryForm.value.countryChoice){
        this.StatesCategories$ = this.countriesData.filter(res =>{
          return res.name.toLocaleLowerCase().match(this.CountryForm.value.countryChoice.toLocaleLowerCase())}),
            this.country_filter.emit(this.CountryForm.value.countryChoice),
            this.listOfStates = this.StatesCategories$[0].states;
          console.log("the states", this.listOfStates)
      }else{
        this.country_filter.emit(this.CountryForm.value.countryChoice)
        this.listOfStates = [];
      }
  }

  state_filterCircuit(){
    this.state_filter.emit(this.CountryForm.value.state);
  }

  onSelect(circuit : Church){
    this.selectedCircuit = circuit;
    //console.table(this.selectedCircuit);
    this.chosenCircuitEmitter.emit(this.selectedCircuit);
  }

  UnhideAddCircuitForm(){
    this.unhideValue = true;
    this.UnhideForm.emit(this.unhideValue)
  }

  /**

  filterCircuit(){
    this.selectedCircuitData = this.circuitsData.filter(res =>{
      return res.state.toLocaleLowerCase().match(this.CountryForm.value.state.toLocaleLowerCase()),
      console.log("filtered", this.selectedCircuitData.nameOfCentre)
    })
  }*/

}
