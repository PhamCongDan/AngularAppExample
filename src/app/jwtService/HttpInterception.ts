import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class jwtService implements HttpInterceptor {
  constructor(){

  }

  // set header request
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestOption: any = {}
    // ...
    // if(this.auth.getToken()) {
    //   requestOption.setHeaders = {
    //     Authorization: `Bearer ${this.auth.getToken()}`
    //   }
    requestOption.setHeaders = {
      Authorization: 'abcxyz'
    }
    request = request.clone(requestOption)
    return next.handle(request)
  }

}