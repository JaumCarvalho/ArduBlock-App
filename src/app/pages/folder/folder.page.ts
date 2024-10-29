import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LedService } from '../../components/led/led.service';
import { WorkspaceService } from '../../core/services/workspace_idb.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit, AfterViewInit {
  public folder: string | null = null;
  isExecuting = false;
  timer: any;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  components = [
    { type: 'Arduino', pin: 13, position: { x: 0, y: 0 } },
    { type: 'Breadboard', pin: 1, position: { x: 50, y: 50 } },
  ];
  private activeComponent: any = null;
  private initialPosition: { x: number; y: number } = { x: 0, y: 0 };

  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: false })
  container!: ViewContainerRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private ledService: LedService,
    private workspaceService: WorkspaceService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.folder = params.get('id');
    });
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  startDrag(event: TouchEvent, component: any) {
    this.activeComponent = component;
    this.initialPosition = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
    console.log('Dragging started', this.initialPosition);
  }
  
  move(event: TouchEvent) {
    if (!this.activeComponent || !this.initialPosition) {
      console.log('Move event ignored: activeComponent or initialPosition is undefined');
      return;
    }
  
    const deltaX = event.touches[0].clientX - this.initialPosition.x;
    const deltaY = event.touches[0].clientY - this.initialPosition.y;
  
    console.log('Moving component', this.activeComponent, 'Delta:', { deltaX, deltaY });
    
    this.activeComponent.position.x += deltaX;
    this.activeComponent.position.y += deltaY;
  
    this.initialPosition = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
  
    this.cdr.detectChanges();
  }

  drop(event: TouchEvent) {
    if (!this.activeComponent) return;

    this.addComponent(this.activeComponent, this.activeComponent.position);
    this.activeComponent = null;
  }

  addComponent(componentData: any, position: { x: number; y: number }) {
    const componentWithPosition = { ...componentData, position };
    this.components.push(componentWithPosition);
    this.cdr.detectChanges();
  }

  getComponentImage(type: string): string {
    switch (type) {
      case 'Arduino':
        return '../../../assets/arduino-components/arduino.svg';
      case 'Breadboard':
        return '../../../assets/arduino-components/breadboard.svg';
      default:
        return '';
    }
  }

  executeProject() {
    console.log('Executando projeto...');
    this.components.forEach((component) => {
      if (component.type === 'LED') {
        this.ledService.turnOn(component.pin);
      }
    });
  }

  stopProject() {
    console.log('Projeto parado.');
    this.components.forEach((component) => {
      if (component.type === 'LED') {
        this.ledService.turnOff(component.pin);
      }
    });
  }

  toggleExecution() {
    this.isExecuting = !this.isExecuting;
    if (this.isExecuting) {
      this.executeProject();
      this.startTimer();
    } else {
      this.stopProject();
      this.stopTimer();
    }
  }

  formatTime(value: number): string {
    return value.toString().padStart(2, '0');
  }

  startTimer() {
    this.resetTimer();
    this.timer = setInterval(() => {
      this.seconds++;
      if (this.seconds >= 60) {
        this.seconds = 0;
        this.minutes++;
      }
      if (this.minutes >= 60) {
        this.minutes = 0;
        this.hours++;
      }
      this.cdr.detectChanges();
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  resetTimer() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }
}
