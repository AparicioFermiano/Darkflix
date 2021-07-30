import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isInit = true
  // @ViewChild('nav', { static: true })
  // myNav!: ElementRef;

  // myNav!: ElementRef;
  @HostListener('window:scroll') onWindowScroll() {
    if (window.scrollY > 50) {
      this.isInit = false
    } else {
      this.isInit = true
    }
  }
}
