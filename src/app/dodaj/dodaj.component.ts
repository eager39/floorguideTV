import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl } from "@angular/forms";
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.css']
})
export class DodajComponent implements OnInit {
  data
  editvar=false
  namevar="test";
  floorvar;
  idvar;
  constructor(
    private _dataService: ApiDataService,
  ) { }

  compForm = new FormGroup({
    name: new FormControl(''),
    floor: new FormControl(''),
    
 })

  ngOnInit() {
    this.getData()
  }
  async addCompany() {

  var formdata=this.compForm.value
    var data = await this._dataService.add(formdata, "addCompany").toPromise()
    if (data) {
       alert("uspešno dodano")
     
    }
 }
 async getData(){
  this.data =await this._dataService.get("dataedit").toPromise()


 }
 edit(item){
   this.editvar=true
   this.namevar=item.name
   this.floorvar=item.floor
   this.idvar=item.id
 }

 async urediCompany() {

  
  var formdata=this.compForm.value

    var data = await this._dataService.add({
      "name":this.compForm.value.name,
      "floor":this.compForm.value.floor,
      "id":this.idvar
    }, "editCompany").toPromise()
    if (data) {
       alert("uspešno spremenjeno")
       this.getData()
    }
 }
 async deleteCompany(item) {
    var data = await this._dataService.add({
      "id":item.id
    }, "deleteCompany").toPromise()
    if (data) {
       alert("uspešno izbrisano")
       this.getData()
    }
 }

}
