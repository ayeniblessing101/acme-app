import { Component } from '@angular/core';

import { ProductService } from './products/product.service';

@Component({
  selector: 'app-root',
 template: `
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">{{pageTitle}}</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['/welcome']">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['/products']">Product List</a>
        </li>
      </ul>
    </div>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  </div>
 `,
 providers: [ ProductService ]
})
export class AppComponent {
  pageTitle = 'Acme Project Management';
}

