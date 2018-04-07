import { SharedService } from '../shared.service';
import { LoginComponent } from '../login/login.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeneralService } from '../general.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit, OnDestroy {
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
    // this.ss.messageSourceHasNewMessage$.subscribe(message => this.message = message);
    this.showPageLoading = true;
    this.ss.loadSubject$
      .subscribe( res => {
        if ( res === true ) {
          this.showPageLoading = true;
        } else {
          this.showPageLoading = false;
        }
      });
  }
  ngOnDestroy() {
    this.loadSubscription.unsubscribe();
  }

}
