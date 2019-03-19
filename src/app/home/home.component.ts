import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sub
  id
  data
  times
  constructor(
    private _dataService: ApiDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData()
  
  }
  async getData(){
    if(this.route.params){
      this.sub = this.route.params.subscribe(params => {
        if(params['id']){
          
           this.id = params['id'];
        }else{
          this.id="all"
          
        }
       
    })
    }
    this.data =await this._dataService.get("data",{ params: {"id":this.id} }).toPromise()
    console.log(this.data)
    this.times = Array(parseInt(this.data[0].st)).fill().map((x,i)=>i);
  }
}
