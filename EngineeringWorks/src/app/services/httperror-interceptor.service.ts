import { AlertifyService } from 'src/app/services/alertify.service';
import {HttpErrorResponse, HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, concatMap, retryWhen } from 'rxjs/operators';
import { of, throwError, Observable } from 'rxjs';
import { ErrorCode } from '../Enums/enums';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptorService implements HttpInterceptor{
constructor(private alertify : AlertifyService){};
  intercept (request: HttpRequest<any>, next : HttpHandler){
    console.log("HTTP request started");
    return next.handle(request)
    .pipe(
      retryWhen(error => this.retryRequest(error, 10)),
      catchError((error : HttpErrorResponse) => {
        const errorMessage = this.setError(error);
          console.log(error);
          this.alertify.error(errorMessage);
          return throwError(errorMessage);

      })
    )};
//retry request in case of error
    retryRequest(error: Observable<unknown>, retryCount: number) : Observable <unknown>{
      return error.pipe (
        concatMap(
          (checkErr : HttpErrorResponse, count: number)=>  {
            if(count <= retryCount){
              switch(checkErr.status){

                case ErrorCode.ServerDown :
                  return of(checkErr);

                // case ErrorCode.Unauthorized :
                //   return of(checkErr);
              }

            }
          }
        ))
    }
    setError(error: HttpErrorResponse): string{
      let errorMessage = "Unknown error occured";
      if(error.error instanceof ErrorEvent){
        //client side error
        errorMessage = error.error.message;
      }else{
        //serverside error
        if (error.status !== 0){
        errorMessage = error.error.errorMessage;
      }
      }
      return errorMessage;
    }
  }
