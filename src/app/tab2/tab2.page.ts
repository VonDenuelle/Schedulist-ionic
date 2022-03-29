import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) {}

  buttonClick(day : string){
    // add day GET parameter
    let navigationExtras: NavigationExtras = {
      queryParams: {
        day : day
      }
    };
    this.router.navigate(['task'], navigationExtras)
  }
}
