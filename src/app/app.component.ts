import { SharedService } from './shared.service';
import { LoginComponent } from './login/login.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeneralService } from './general.service';
import { Subscription } from 'rxjs/Subscription';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharedService]
})
export class AppComponent implements OnInit, OnDestroy {
  showPageLoading: Boolean;
  title = 'app';
  loadSubscription: Subscription;
  message: string;
  constructor(
    private generalService: GeneralService,
    private ss: SharedService
  ) {

  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.loadSubscription.unsubscribe();
  }
}
