import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgregarArticuloComponent } from './component/agregar-articulo/agregar-articulo.component';
import { ErrorComponent } from './component/error/error.component';
import { HomeComponent } from './component/home/home.component';
import { InventarioComponent } from './component/inventario/inventario.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';

import { AuthsGuard } from './guard/auths.guard';



const appRouters:Routes=[

  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  
  {path:'invetario',component:InventarioComponent},
  {path:'agregar',component:AgregarArticuloComponent,
    canActivate:[AuthsGuard]
  },
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'**',component:ErrorComponent}//debe de estar siempre de ultimo en la lista de rutas
];


@NgModule({
  declarations: [
    AppComponent,
    
    AgregarArticuloComponent,
    ErrorComponent,
    HomeComponent,
    InventarioComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

    AppRoutingModule,
    RouterModule.forRoot(appRouters),
    FormsModule,
    HttpClientModule,

    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
