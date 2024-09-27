import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-component-arduino',
  templateUrl: './card-component-arduino.component.html',
  styleUrls: ['./card-component-arduino.component.scss'],
})
export class CardComponentArduinoComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  addComponentToWorkspace(): void {
    this.router.navigate(['/folder', 'Executar'], { state: { item: 'dado teste' } });
  }
  
}
