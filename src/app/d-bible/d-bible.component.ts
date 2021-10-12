import { Component, OnInit } from '@angular/core';
import { BibleServiceService } from '../services/bible-service.service';

@Component({
  selector: 'd-bible',
  templateUrl: './d-bible.component.html',
  styleUrls: ['./d-bible.component.css']
})
export class DBibleComponent implements OnInit {

  constructor(private _bibleService : BibleServiceService) { }

  sortedVersions : any;
  versionHTML: any;
  versions : any;

  All_Array : Array<any>;
  split_string = [];


  ngOnInit(): void {
    this._bibleService.getBibleVersions().then((bibleVersionList) => {
      this.sortedVersions = this.sortVersionsByLanguage(bibleVersionList);
      for (let languageGroup in this.sortedVersions) {
          const language = languageGroup;
          this.versionHTML += ','+language;
          //this.All_Array = this.versionHTML.push(this.versionHTML);
          this.versions = this.sortedVersions[languageGroup];
          console.log(this.versions)
          console.log("languageGroup",language);
      }
      //this.All_Array = this.versions
      //console.log(this.versionHTML[0]
      this.split_string = this.versionHTML.split(",");
      this.split_string.shift();

      console.log("versionHTML", this.versionHTML);
      console.log("Created Array", this.split_string)
      //console.log(this.All_Array['Akukem'])
      console.log('Sorted Versions', this.sortedVersions)
    });
  }



  sortVersionsByLanguage(bibleVersionList) {
    let sortedVersions = {};
    for (const version of bibleVersionList) {
            if (!sortedVersions[version.language]) {
                        sortedVersions[version.language] = [];
            }
        sortedVersions[version.language].push(version);
    }
    for (const version in sortedVersions) {
            sortedVersions[version].sort((a, b) => {
                    const nameA = a.abbreviation.toUpperCase();
                    const nameB = b.abbreviation.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                return 0;
            });
    }
    return sortedVersions;
}


}
