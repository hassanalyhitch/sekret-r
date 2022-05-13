import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


import { LoginScreenComponent } from './login-screen/login-screen.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { DesktopNavComponent } from './desktop-nav/desktop-nav.component';
import { MasterNavComponent } from './main-dash/insurance/master-nav/master-nav.component';
import { DetailComponentComponent } from './main-dash/insurance/detail-component/detail-component.component';
import { DetailPlaceholderComponent } from './main-dash/insurance/detail-placeholder/detail-placeholder.component';
import { FolderComponent } from './main-dash/insurance/master-nav/folder/folder.component';
import { InsuranceComponent } from './main-dash/insurance/insurance.component';
import { InboxComponent } from './main-dash/inbox/inbox.component';
import { BrokerComponent } from './main-dash/broker/broker.component';
import { ProfileComponent } from './main-dash/profile/profile.component';
import { SettingsComponent } from './main-dash/settings/settings.component';
import { RouterModule, Routes } from '@angular/router';
import { InboxMasterNavComponent } from './main-dash/inbox/inbox-master-nav/inbox-master-nav.component';
import { ChatComponent } from './main-dash/inbox/chat/chat.component';
import { InsuranceBottomsheetComponent } from './main-dash/insurance/insurance-bottomsheet/insurance-bottomsheet.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { FileComponent } from './main-dash/insurance/file/file.component';
import { FileviewComponent } from './main-dash/insurance/fileview/fileview.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { ChangeFoldernameComponent } from './main-dash/insurance/change-foldername/change-foldername.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'insurance', pathMatch: 'full' },
  {
    path: 'insurance',
    component: InsuranceComponent,
    children: [
      { path: 'folder', component: DetailComponentComponent },
      // { path: '', redirectTo: 'insurance'}
    ],
  },
  {
    path: 'inbox',
    component: InboxComponent,
    children: [{ path: 'chat', component: ChatComponent }],
  },
  { path: 'broker', component: BrokerComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    LoginScreenComponent,
    MainDashComponent,
    DesktopNavComponent,
    MasterNavComponent,
    DetailComponentComponent,
    DetailPlaceholderComponent,
    FolderComponent,
    InsuranceComponent,
    InboxComponent,
    BrokerComponent,
    ProfileComponent,
    SettingsComponent,
    InboxMasterNavComponent,
    ChatComponent,
    InsuranceBottomsheetComponent,
    MobileNavComponent,
    FileComponent,
    FileviewComponent,
    ChangeFoldernameComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
