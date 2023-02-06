import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterPage } from './models/router-page.models';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public pages: RouterPage[] = [
    {
      path: '/home',
      text: 'Inicio'
    },
    {
      path: '/list',
      text: 'Lista'
    }
  ]

  constructor(
    private router: Router
  ) {
    // Poner isActive a true cuando se está en esa página
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    )
    .subscribe(
      (route) => {
        this.pages = this.pages.map(page => {
          return {
            ...page,
            isActive: (route as NavigationEnd).url === page.path
          }
        })
      }
    )
  }

}
