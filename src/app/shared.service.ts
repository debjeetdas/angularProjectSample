import { AppComponent } from './app.component';
import {Injectable, Component} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GeneralService } from './general.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import * as _ from 'lodash';

@Injectable()
export class SharedService {

    // Variable Decalarations
    public sampleVar = 'Test';
    public loc = location.href;
    public locSplit = this.loc.split('/');
    public fbaseUrl = this.locSplit[0] + '//' + this.locSplit[2];
    private newBaseUrl = this.fbaseUrl;

    // Observable string sources
    private userName = new Subject<string>();
    private loadSubject = new Subject<any>();


    // Observable string streams
    userName$ = this.userName.asObservable();
    public loadSubject$ = this.loadSubject.asObservable();


    /** Show Loading Feature */
    showLoading (param: boolean) {
      if ( param === true ) {
        this.loadSubject.next(true);
      } else {
        this.loadSubject.next(false);
      }
    }

    getSharedDataSample() {
        return this.sampleVar;
    }
    userNameSend() {
        this.userName.next();
    }
}
