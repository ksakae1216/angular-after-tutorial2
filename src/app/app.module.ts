import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from '../libs/user-list/user-list.component';
import { UserListItemComponent } from '../libs/user-list-item/user-list-item.component';
import { UserListFilterComponent } from '../libs/user-list-filter/user-list-filter.component';
import { UserDetailPageComponent } from '../libs/user-detail-page/user-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListItemComponent,
    UserListFilterComponent,
    UserDetailPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
