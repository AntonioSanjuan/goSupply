import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { FormsModule } from '@angular/forms';
import { ListOfUsersComponent } from './components/list-of-users/list-of-users.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSettingsComponent,
    UserInfoComponent,
    ListOfUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
