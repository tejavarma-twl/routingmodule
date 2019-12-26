import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {
  webServices = {
    'custom':{link:'custom',value:'Custom application development',description:'Custom application development,Custom application development,Custom application development,Custom application development'},
    'ecom':{link:'ecom',value:'Ecommerce application development',description:'ecom application development,Custom application development,Custom application development,Custom application development'},
    'social':{link:'social',value:'Social Network application development',description:'social application development,Custom application development,Custom application development,Custom application development'},
    'port':{link:'port',value:'Portfolio application development',description:'port application development,Custom application development,Custom application development,Custom application development'},
    'cms':{link:'cms',value:'Content Management system development',description:'cms application development,Custom application development,Custom application development,Custom application development'}
  }
  webServiceList = [];
  description = ""
  constructor(private activatedRoute: ActivatedRoute) { }

  // var a  = val => return val*val;
  // console.log(a(3));
  ngOnInit() {
    this.webServiceList = Object.values(this.webServices);
    // console.log(this.activatedRoute.params);
    this.activatedRoute.params.subscribe(p => {
      // console.log(p);
      // console.log(Object.keys(p).length);
      if(Object.keys(p).length===0){
        this.description = this.webServices['custom']['description'];
      }else{
        this.description = this.webServices[p.serv]['description'];
      }
    });
  }

}
