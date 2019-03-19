import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl } from "@angular/forms";
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.css']
})
export class DodajComponent implements OnInit {

  constructor(
    private _dataService: ApiDataService,
  ) { }

  compForm = new FormGroup({
    name: new FormControl(''),
    floor: new FormControl(''),
 })

  ngOnInit() {
  }
  async addCompany() {

  var formdata=this.compForm.value
    var data = await this._dataService.add(formdata, "addCompany").toPromise()
    if (data) {
       alert("uspešno dodano")
     
    }




 }

}
