import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-orientation-warning',
  templateUrl: './orientation-warning.component.html',
  styleUrls: ['./orientation-warning.component.scss']
})
export class OrientationWarningComponent implements OnInit {
  public showWarning = false;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkOrientation();
  }

  ngOnInit() {
    this.checkOrientation();
  }

  private checkOrientation() {
    const isMobile = this.isMobileDevice();
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;

    if (isMobile && !isLandscape) {
      this.showWarning = true;
    } else {
      this.showWarning = false;
    }
  }

  private isMobileDevice(): boolean {
    return window.innerWidth <= 768; // Ajuste conforme necessário
  }
}
