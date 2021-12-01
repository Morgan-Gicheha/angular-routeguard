import { SetComponent } from './set/set.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/login.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
	{ path: "login", component: LoginComponent },
	{ path: "", component: DashboardComponent, canActivate: [LoginGuard] },
	{ path: "set", component: SetComponent },
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}