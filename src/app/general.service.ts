import { Injectable, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GeneralService {
  public loc = location.href;
  public locSplit = this.loc.split('/');
  public fbaseUrl = this.locSplit[0] + '//' + this.locSplit[2];
  public domain = this.locSplit[2];
  private newBaseUrl = this.loc;

  private filterApply = new Subject<string>();
  filterChange$ = this.filterApply.asObservable();
  filterInfo;
  filters;
  constructor(private http: Http) {
  }

  returnHref() {
    return this.loc;
  }

  validValue(data) {
    if (data === undefined || data == null || data === '') {
      return false;
    } else {
      return true;
    }
  }

  /** Start : Header Declaration */

  private getHeaders() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    // headers.append('Access-Control-Allow-Origin','http://localhost');
    return headers;
  }
  private postHeaders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  /** End : Header Declaration */


  /**  --------------------Services for Acquiring Data ------------------  */

  /** Sample Post Request */
  postRequest(surl, data) {
    const postUrl = `${this.newBaseUrl}surl`;
    const postData$ = this.http
      .post(postUrl, data, { headers: this.postHeaders() })
      .map(mapAppList)
      .catch(handleError);
    return postData$;
  }

  /** Sample Get Request */
  getRequest(surl) {
    let getUrl = '';
    if (surl.includes('http')) {
      getUrl = surl;
    } else {
      getUrl = `${this.newBaseUrl}` + surl;
    }
    const getData$ = this.http
      .get(getUrl, { headers: this.getHeaders() })
      .map(mapAppList)
      .catch(handleError);
    return getData$;
  }
}

function mapDataResponse(response: Response) {
  return response.json().data;
}
function mapAppList(response: Response) {
  return response.json();
}


// this could also be a private method of the component class
function handleError(error: any) {
  const errorMsg = error.message || `Yikes! There was a problem with our hyperdrive device and we couldn't retrieve your data!`;
  // throw an application level error
  return Observable.throw(errorMsg);
}

