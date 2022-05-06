import { Component } from '@angular/core';
import { AuthServices } from './services/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appTienda';
  userLogget = this.auth.obternerUserLogin();
  
  constructor(private auth:AuthServices){}

  obtenerUsario(){
    this.auth.obternerUserLogin().subscribe(res=>{
      console.log(res?.email);
    })
  }
}
