import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'improved-portfolio-site';
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Primarily for mobile devices. If clicking one of the links in the descriptions,
    // It will scroll back to the top of the page so the user is not in the middle of the new page.
    this.router.events.subscribe((routeChangedEvent) => {
      if (!(routeChangedEvent instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
