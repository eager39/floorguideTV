import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sub;
  id;

  constructor(
    private _dataService: ApiDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.route.params){
      this.sub = this.route.params.subscribe(params => {
        if(params['id']){
           this.id = params['id'];
        }else{
          this.id="all"
        }
       
    })
    }
  }

}
