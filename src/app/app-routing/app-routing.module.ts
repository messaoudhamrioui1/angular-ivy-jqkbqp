import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { HelloComponent } from '../hello.component';

export const appRouteList: Routes = [
  {
    path: 'chat',
    component: HelloComponent,
  },
  {
    path: '**',
    redirectTo: 'landing',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRouteList)],
})
export class AppRoutingModule {}
