import { Component, OnInit } from '@angular/core';

import { faEnvelope, IconDefinition } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public faEnvelope: IconDefinition = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
