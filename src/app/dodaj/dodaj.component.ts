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
 
  idvar
  message;
  constructor(
    private _dataService: ApiDataService,
  ) { }

  compForm = new FormGroup({
    name: new FormControl(''),
    floor: new FormControl(''),
    room: new FormControl(""),
    select: new FormControl("")
    
 })

  ngOnInit() {
    this.getData()
  }
  async addCompany() {

  var formdata=this.compForm.value
    var data = await this._dataService.add(formdata, "addCompany").toPromise()
    if (data) {
      this.message="Uspešno dodano"
     this.getData()
    }
 }
 async getData(){
  this.data =await this._dataService.get("dataedit").toPromise()
console.log(this.data)

 }
 edit(item){
   this.editvar=true

   this.idvar=item.id
   this.compForm.controls["name"].setValue(
    item.name
  );
  this.compForm.controls["floor"].setValue(
    item.floor
  );
  this.compForm.controls["room"].setValue(
    item.room
  );
 }

 async urediCompany() {

  
  var formdata=this.compForm.value

    var data = await this._dataService.add({
      "name":this.compForm.value.name,
      "floor":this.compForm.value.floor,
      "room":this.compForm.value.room,
      "id":this.idvar
    }, "editCompany").toPromise()
    if (data) {
       alert("uspešno spremenjeno")
       this.editvar=false
       this.getData()
    }
 }
 async deleteCompany(item) {
    var data = await this._dataService.add({
      "id":item.id
    }, "deleteCompany").toPromise()
    if (data) {
       
       this.getData()
    }
 }

}
