import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { WebComponent } from './services/web/web.component';
import { MobileComponent } from './services/mobile/mobile.component';
import { DesignComponent } from './services/design/design.component';


const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"contact", component: ContactComponent},
  {path:"services", component: ServicesComponent, children:[
    {path:"", redirectTo:"web", pathMatch:"full"},
    {path:"web", component: WebComponent},
    {path:"web/:serv", component: WebComponent},
    {path:"mobile", component: MobileComponent},
    {path:"design", component: DesignComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
