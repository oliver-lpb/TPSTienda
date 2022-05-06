import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ArticuloModel } from 'src/app/model/articulo.model';
import { AuthServices } from 'src/app/services/auth.services';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.css']
})
export class AgregarArticuloComponent implements OnInit {

  form:FormGroup;
  listTarjeta:ArticuloModel[]=[];
  listVerdura:ArticuloModel[]=[];
  listQueso:ArticuloModel[]=[];
  listHongos:ArticuloModel[]=[];
  listCafe:ArticuloModel[]=[];
  listEnlatado:ArticuloModel[]=[];
  
  userLogget = this.auth.obternerUserLogin();

  constructor(private fb:FormBuilder,
              private dataServices:DataService,
              private toastr:ToastrService,
              private auth:AuthServices) {
                
                this.form = this.fb.group({
                  tipo:['',Validators.required],
                  proveedor:['',[Validators.required]],
                  precio:['',[Validators.required]],
                  cantidad:['',[Validators.required]],
                });

              }
  ngOnInit(): void {
    this.obtenerCarnes();
    this.obtenerVerduras();
    this.obtenerQuesos();
    this.obtenerHongos();
    this.obtenerCafe();
    this.obtenerenlatado();
  }

  obtenerUsario(){
    this.auth.obternerUserLogin().subscribe(res=>{
      console.log(res?.email);
    })
  }

              crearCarne(){
                const carne: ArticuloModel= {
                  tipo: this.form.value.tipo|| null, //null para que se registre de forma vacia
                  Proveedor: this.form.value.proveedor|| null,
                  fechaExpiracion: this.form.value.fechaExpiraccion|| null,
                  precio: this.form.value.precio|| null,
                  cantidad: this.form.value.cantidad || null,
                  fechaCreacion: new Date|| null,
                  fehcaActualizacion: new Date|| null,
                
                }

                
                this.dataServices.guardarCarnes(carne).then(()=>{
                  this.toastr.success('Bien','Tarjeta registrada');
                  this.form.reset();
                },error =>{
                  this.toastr.error('Erro','error')
                  console.log(error);
                })
              }

              obtenerCarnes(){
                this.dataServices.obterCarnes().subscribe(doc=>{
                  this.listTarjeta=[]
                  doc.forEach((element:any)=>{
                    this.listTarjeta.push({
                      id: element.payload.doc.id,
                      ...element.payload.doc.data()
                    })
                  });
                })
              }
    /////////////////////////////////////verduras

    crearVerduras(){
      const verdura: ArticuloModel= {
        tipo: this.form.value.tipo|| null, //null para que se registre de forma vacia
        Proveedor: this.form.value.proveedor|| null,
        fechaExpiracion: this.form.value.fechaExpiraccion|| null,
        precio: this.form.value.precio|| null,
        cantidad: this.form.value.cantidad || null,
        fechaCreacion: new Date|| null,
        fehcaActualizacion: new Date|| null,
      
      }
      this.dataServices.guardarverduras(verdura).then(()=>{
        this.toastr.success('Bien','Tarjeta registrada');
        this.form.reset();
      },error =>{
        this.toastr.error('Erro','error')
        console.log(error);
      })
    }

    obtenerVerduras(){
      this.dataServices.obterVerduras().subscribe(doc=>{
        this.listVerdura=[]/////////////////
        doc.forEach((element:any)=>{
          this.listVerdura.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
      })
    }

    ///////////////////////////////////////////Quesos

    crearQuesos(){
      const quesos: ArticuloModel= {
        tipo: this.form.value.tipo|| null, //null para que se registre de forma vacia
        Proveedor: this.form.value.proveedor|| null,
        fechaExpiracion: this.form.value.fechaExpiraccion|| null,
        precio: this.form.value.precio|| null,
        cantidad: this.form.value.cantidad || null,
        fechaCreacion: new Date|| null,
        fehcaActualizacion: new Date|| null,
      
      }
      this.dataServices.guardarQuesos(quesos).then(()=>{
        this.toastr.success('Bien','Tarjeta registrada');
        this.form.reset();
      },error =>{
        this.toastr.error('Erro','error')
        console.log(error);
      })
    }

    obtenerQuesos(){
      this.dataServices.obterQuesos().subscribe(doc=>{
        this.listQueso=[]/////////////////
        doc.forEach((element:any)=>{
          this.listQueso.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
      })
    }

    ////////////////////////////////////////////////////////////Hongos

    crearHongos(){
      const hongos: ArticuloModel= {
        tipo: this.form.value.tipo|| null, //null para que se registre de forma vacia
        Proveedor: this.form.value.proveedor|| null,
        fechaExpiracion: this.form.value.fechaExpiraccion|| null,
        precio: this.form.value.precio|| null,
        cantidad: this.form.value.cantidad || null,
        fechaCreacion: new Date|| null,
        fehcaActualizacion: new Date|| null,
      
      }
      this.dataServices.guardarHongos(hongos).then(()=>{
        this.toastr.success('Bien','Tarjeta registrada');
        this.form.reset();
      },error =>{
        this.toastr.error('Erro','error')
        console.log(error);
      })
    }

    obtenerHongos(){
      this.dataServices.obterHongos().subscribe(doc=>{
        this.listHongos=[]/////
        doc.forEach((element:any)=>{
          this.listHongos.push({////
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
      })
    }

    /////////////////////////////////////////////////////////////Cafe

    crearCafe(){
      const cafe: ArticuloModel= {
        tipo: this.form.value.tipo|| null, //null para que se registre de forma vacia
        Proveedor: this.form.value.proveedor|| null,
        fechaExpiracion: this.form.value.fechaExpiraccion|| null,
        precio: this.form.value.precio|| null,
        cantidad: this.form.value.cantidad || null,
        fechaCreacion: new Date|| null,
        fehcaActualizacion: new Date|| null,
      
      }
      this.dataServices.guardarCafe(cafe).then(()=>{
        this.toastr.success('Bien','Tarjeta registrada');
        this.form.reset();
      },error =>{
        this.toastr.error('Erro','error')
        console.log(error);
      })
    }

    obtenerCafe(){
      this.dataServices.obterCafe().subscribe(doc=>{
        this.listCafe=[]////
        doc.forEach((element:any)=>{
          this.listCafe.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
      })
    }

    /////////////////////////////////////////////////////////////Enlatado
    crearEnlatado(){
      const enlatado: ArticuloModel= {
        tipo: this.form.value.tipo|| null, //null para que se registre de forma vacia
        Proveedor: this.form.value.proveedor|| null,
        fechaExpiracion: this.form.value.fechaExpiraccion|| null,
        precio: this.form.value.precio|| null,
        cantidad: this.form.value.cantidad || null,
        fechaCreacion: new Date|| null,
        fehcaActualizacion: new Date|| null,
      
      }
      this.dataServices.guardarEnlatado(enlatado).then(()=>{
        this.toastr.success('Bien','Tarjeta registrada');
        this.form.reset();
      },error =>{
        this.toastr.error('Erro','error')
        console.log(error);
      })
    }

    obtenerenlatado(){
      this.dataServices.obterEnlatado().subscribe(doc=>{
        this.listEnlatado=[]////
        doc.forEach((element:any)=>{
          this.listEnlatado.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
      })
    }

}
