import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: ``
})
export class UsuarioNuevoComponent {

  constructor( private router: ActivatedRoute ) {

    this.router.params.subscribe(params => {
      console.log("Ruta hija usuario nuevo");
      console.log(params);
    })

    this.router.parent.params.subscribe(params => {
      console.log("Ruta hija, param padre");
      console.log(params);
    })

 }

}
