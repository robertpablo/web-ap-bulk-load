import {
  ApplicationRef,
  CUSTOM_ELEMENTS_SCHEMA,
  LOCALE_ID,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule, DecimalPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbActiveModal,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes';
import { AppComponent } from './app.component';
import { SharedPipesModule } from '@ropabajo/shared/pipe';
import { AppState } from './core/lib/store';
import { NgSelectModule } from '@ng-select/ng-select';
import { RpbjPageWrapper } from '@ropabajo/shared/components';

@NgModule({
  imports: [
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production,
    }),
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppComponent,
    SharedPipesModule,
    NgSelectModule,
    NgbPaginationModule,
    RpbjPageWrapper,
  ],
  providers: [
    NgbActiveModal,
    { provide: LOCALE_ID, useValue: 'es-PE' },
    { provide: APP_BASE_HREF, useValue: '/container' },
    DecimalPipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
})
export class AppModule {
  constructor(private appRef: ApplicationRef) {}
  ngDoBootstrap() {
    this.appRef.bootstrap(AppComponent); // Bootstrap the root component manually
  }
}