import { Component, OnInit } from '@angular/core';
import { ChurchCircuitServiceService } from '../services/church-circuit-service.service';
import { Church } from '../interfaces/church';
import { FormBuilder, Validators} from '@angular/forms';
import { CountriesDataServiceService } from '../services/countries-data-service.service';

@Component({
  selector: 'app-church-circuit',
  templateUrl: './church-circuit.component.html',
  styleUrls: ['./church-circuit.component.css']
})
export class ChurchCircuitComponent implements OnInit {

  Circuits : Church[];
  errorInfo = [];
  largeSize = false;
  WrongImgFormat = false;
  perfectImg = false;
  CircuitsEmpty = false;

  toggleList = true;

  chosenCircuit : Church;

  public errorMsg;
  public CountryCategories$ :Array<any>;
  public StatesCategories$ : Array<any>;
  public listOfStates: Array<any>;

  hide = false;

  constructor(private fb: FormBuilder, private _churchCircuitService : ChurchCircuitServiceService, private _countriesDataService : CountriesDataServiceService) { }

  today: number = Date.now();

  imageSrc : string;
  unsuccessful = false;

file: any;

upload(event:any){
  this.perfectImg = false;
  this.largeSize = false;
  this.WrongImgFormat = false;
  this.imageSrc = null;
  if(event.target.files && event.target.files[0]){
    this.file = event.target.files[0];
    var fileSize = this.file.size;
    var fileType = this.file.type;
    //console.log("Image Size in bytes", fileSize)
    console.log("File type", fileType)

    if (fileSize >= 204800){
      console.log("File Size too Large")
      this.largeSize = true;
    }else if( fileType != ('image/jpeg'||
                            'image/jpg'||
                            'image/png')){
      console.log("Ensure the image is format jpg, jpeg or png");
      this.WrongImgFormat = true;
    } else {
      this.perfectImg = true;
      console.log(this.file);
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result.toString();
      };
      reader.readAsDataURL(this.file);
    }

  }

}

newAudio(){
  this.hidenewCircuit = false;
}

  // posting new Church Circuit
  hidenewCircuit : boolean = true ;

  onSubmitAddCircuit( ){

    if (this.newCircuitForm.valid && this.file) {
      this.unsuccessful = false;
     //alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.newCircuitForm.value);


    const formdata = new FormData()

    formdata.append("img", this.file)
    formdata.append("nameOfCentre", this.newCircuitForm.value.nameOfCentre)
    formdata.append("country", this.newCircuitForm.value.country)
    formdata.append("state", this.newCircuitForm.value.state)
    formdata.append("city", this.newCircuitForm.value.city)
    formdata.append("street", this.newCircuitForm.value.street)
    formdata.append("address", this.newCircuitForm.value.address)
    formdata.append("pastorInCharge", this.newCircuitForm.value.pastorInCharge)
    formdata.append("centerPhoneNumber", this.newCircuitForm.value.centerPhoneNumber)
    formdata.append("facebookLink", this.newCircuitForm.value.facebookLink)
    formdata.append("instagramLink", this.newCircuitForm.value.instagramLink)
    formdata.append("twitterLink", this.newCircuitForm.value.twitterLink)


    //console.log("large file size", this._churchCircuitService.errorHandler)

    this._churchCircuitService.addCircuit(formdata)
          .subscribe(resNewAudio => {
            this.Circuits.push(resNewAudio),
            error => {this.errorMsg = error,
                      alert("Form not submitted!")},
            this. hidenewCircuit = true;
            //this.selectedAudio = resNewAudio;
          });

    this.newCircuitForm.reset();
    this.file = null;
    this.imageSrc = null;
    this.perfectImg = false;
    this.largeSize = false;
    this.toggleList = true;
    this. hidenewCircuit = true;
    }
    else{
      this.unsuccessful = true;
    }


  }

  changeState(){
    console.log("country Value", this.newCircuitForm.value.country);


      this.StatesCategories$ = this.CountryCategories$.filter(res =>{

      return res.name.toLocaleLowerCase().match(this.newCircuitForm.value.country.toLocaleLowerCase())})

        this.listOfStates = this.StatesCategories$[0].states;
        console.log("the states", this.listOfStates)
  }

  onStateSearched(keyword:string){
    let searchState = [];
    if(keyword == ""){
      this.ngOnInit();
    } else {
      this._churchCircuitService.getFiles().subscribe(files =>{
        searchState = files.reverse(),
        this.Circuits = searchState.filter(res =>{
          return res.state.toLocaleLowerCase().match(keyword.toLocaleLowerCase())
        }),
        console.log("Circuit Array length", this.Circuits.length)
        if(this.Circuits.length > 0){
          console.log("circuit Dey")
          this.CircuitsEmpty = false;
        }else{
          console.log("Circuit no dey")
          this.CircuitsEmpty = true;
        }
      });
    }
  }

  onCountrySearched(keyword:string){
    this.CircuitsEmpty = false;
    let searchCountry = [];
    if(keyword == ""){
      this.ngOnInit();
    } else {
      this._churchCircuitService.getFiles().subscribe(files => {
        searchCountry = files.reverse(),
        this.Circuits = searchCountry.filter(res => {
          return res.country.toLocaleLowerCase().match(keyword.toLocaleLowerCase())
        }),
        console.log("Circuit Array length", this.Circuits.length)
        if(this.Circuits.length > 0){
          console.log("circuit Dey")
          this.CircuitsEmpty = false;
        }else{
          console.log("Circuit no dey")
          this.CircuitsEmpty = true;
        }
      })
    }

  }

  onchosenCircuitEmitter(choiceCircuit : Church){
      this.chosenCircuit = choiceCircuit;
      console.log("I don Enter Center")
      console.table(this.chosenCircuit)
      this.toggleList = false;
  }

  onSwitchOnList(SwitchInput:boolean){
    this.toggleList = SwitchInput;
  }

  onUhideForm(value:boolean){
    this.hidenewCircuit = !value;
  }

  onupdateCircuitEvent(updatedCircuit : any){
    this._churchCircuitService.updateCircuit(updatedCircuit)
    .subscribe(resUpdatedAudio => {
      updatedCircuit = resUpdatedAudio,
                this.toggleList = true,
                this.ngOnInit()
      //this.selectedAudio = resNewAudio;
    });
  }

  ondeleteCircuitEvent(deleteCircuit : any){
    let CircuitArray =  this.Circuits;
    this._churchCircuitService.deleteCircuit(deleteCircuit)
    .subscribe(resDeletedAudio => {
      for (let i = 0 ; i < CircuitArray.length ; i++)
      {
        if(CircuitArray[i]._id === deleteCircuit._id)
        {
          CircuitArray.splice(i,1);
        }
      }
    })

    this.toggleList = true;
  }


  /**
  if (typeof emptyArray != "undefined"
  && emptyArray != null
  && emptyArray.length != null
  && emptyArray.length > 0)
  */

/**
  onSearched(messageName:string){
    let searchUser = [];
    if (messageName == ""){
      this.ngOnInit();
    } else{
      this.audioService_.getFiles().subscribe(files =>{
        searchUser = files;
        this.All_song = searchUser.filter(res =>{
          return res.name.toLocaleLowerCase().match(messageName.toLocaleLowerCase())
        })
      })
    }
  }
*/



  newCircuitForm = this.fb.group({
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




  ngOnInit(): void {
    this._churchCircuitService.getFiles().subscribe(files =>{
      this.Circuits = files.reverse()
    });

    console.log("circuit Dey")
    this.CircuitsEmpty = false;

    this._countriesDataService.getCountry().subscribe(data => {this.CountryCategories$ = data["data"],
    error => this.errorMsg = error,
    console.log("check it out", this.CountryCategories$["data"])
    });

  }


  public pageContent = {
    header:{
      title: 'CHURCH CIRCUITS',
      subtitle: 'Study to shew thyself approved unto God, a workman that needeth not to be ashamed',
      logOutbtn: '',
      img_src: "testheader-bg-overlay-ChurchCircuit",
      audiobtn: '',
      videobtn: ''
    },
    subfooter:{
      title: 'ONLINE SERVICE TIMES',
      subtitle: 'Join us online during the service times listed below.',
      worshipService_main: 'SUNDAY',
      worshipService_span: ':  8:30AM - 10:00AM',
      weeklyService_main: 'WEDNESDAY',
      weeklyService_span: ':  5:30PM - 7:00PM',
      heraldsLiveLink: 'heralds/media/live',
      mixlrLink: '../../assets/img/Mixlr_logo_link.svg',
      facebookLiveLink: '../../assets/img/facebook_link.svg',
      youtubeLink: '../../assets/img/youtube_icon.svg',
      pastorImg_link: '../../assets/img/Online_Service_times_B.png'
    }
  };
}
