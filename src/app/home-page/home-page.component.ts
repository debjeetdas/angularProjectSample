import { ShowLoadingComponent } from './../show-loading/show-loading.component';
import { SharedService } from './../shared.service';
import { GeneralService } from './../general.service';
import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  /** Start : Declarations */
  errorLoading: any;
  sampleResp: any;
  /** End : Declarations */

  constructor(
    private generalService: GeneralService,
    private ss: SharedService
  ) { }

  ngOnInit() {
    this.ss.showLoading(true);
    this.generalService.getRequest('https://reqres.in/api/users?page=2')
      .subscribe(
        res => {
          this.sampleResp = res;
        },
        e => {
          this.errorLoading = e;
        },
        () => {
          this.ss.showLoading(false);
        }
      );
  }
}
