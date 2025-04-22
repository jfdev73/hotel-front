import { ApplicationConfig } from '@angular/core';
import {provideRouter, withHashLocation} from '@angular/router';

import { routes } from './app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi} from "@angular/common/http";
import {interceptorService} from "./router/interceptors/interceptor.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideHttpClient(withInterceptors([interceptorService])),
    /*provideHttpClient(withInterceptorsFromDi()),*/
   /* {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }*/
  ]
};
