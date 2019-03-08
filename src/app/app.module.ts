import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MainHttpInterceptor} from './http/main-http-interceptor';
import {SandboxModule} from './sandbox/sandbox.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SandboxModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainHttpInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
