import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { FormsModule } from '@angular/forms';
import { ListOfUsersComponent } from './components/list-of-users/list-of-users.component';
import { UsersService } from './services/user-service/user-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserSettingsComponent,
    UserInfoComponent,
    ListOfUsersComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
