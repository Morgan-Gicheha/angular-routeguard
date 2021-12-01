import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginGuard } from './auth/login.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SetComponent } from './set/set.component';

@NgModule({
	declarations: [AppComponent, LoginComponent, DashboardComponent, SetComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [LoginGuard],
	bootstrap: [AppComponent],
})
export class AppModule {}
