import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BodyComponent } from './Components/body/body.component';
import { AsideComponent } from './Components/aside/aside.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { TestimonioComponent } from './components/testimonio/testimonio.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

const routes: Routes =[
  {path: 'body', component: BodyComponent},
  {path: 'aside', component: AsideComponent},
  {path: 'contacto', component: ContactosComponent},
  {path: 'servicio', component: ServicioComponent},
  {path: 'testimonio', component: TestimonioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    BodyComponent,
    AsideComponent,
    ContactosComponent,
    ServicioComponent,
    TestimonioComponent
  ],
  imports: [
    BrowserModule,
    YouTubePlayerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
