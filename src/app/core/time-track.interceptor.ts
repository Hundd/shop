import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

@Injectable()
export class TimeTrackInterceptor implements HttpInterceptor {
  constructor(private api: ApiService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes(this.api.products) || req.method !== 'GET') {
      return next.handle(req);
    }

    const label = req.url;
    console.time(label);

    return next.handle(req).pipe(
      filter(event => event instanceof HttpResponse),
      tap(() => {
        console.timeEnd(label);
      })
    );
  }
}
