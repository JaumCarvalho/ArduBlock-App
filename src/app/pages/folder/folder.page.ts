import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit, ComponentRef, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicComponent } from 'src/app/components/dynamic-component/dynamic-component.component';
import { LedService } from '../../components/led/led.service'; // Importar o LedService
import { WorkspaceService } from '../../core/services/workspace_idb.service'; // Importar o WorkspaceService

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit, AfterViewInit {
  public folder: string | null = null;
  item: string | null = null;
  private componentRef?: ComponentRef<DynamicComponent>;
  public components: any[] = [];
  isExecuting = false;
  timer: any;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  
  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: false }) container!: ViewContainerRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private ledService: LedService, // Injeção do LedService
    private workspaceService: WorkspaceService // Injeção do WorkspaceService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.folder = params.get('id');
    });

    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state && navigation.extras.state['item']) {
      this.item = navigation.extras.state['item'];
    }
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
    if (this.item) {
      this.createDynamicComponent();
    }
  }

  createDynamicComponent() {
    if (this.container) {
      this.container.clear();
      this.componentRef = this.container.createComponent(DynamicComponent);
      this.componentRef.instance.data = this.item;

      this.componentRef.instance.destroy.subscribe(() => {
        this.destroyDynamicComponent();
      });

      console.log('Componente criado');
    } else {
      console.error('Container não encontrado');
    }
  }

  destroyDynamicComponent() {
    if (this.componentRef) {
      console.log('Componente destruído');
      this.componentRef.destroy();
    }
  }

  // Método para adicionar um componente à área de execução
  addComponent(componentData: any) {
    this.components.push(componentData);
    this.workspaceService.saveComponent(componentData); // Persistir o componente no IndexedDB
    this.cdr.detectChanges();
  }

  // Método para controlar LEDs na execução
  executeProject() {
    console.log('Executando projeto...');
    this.components.forEach(component => {
      if (component.type === 'LED') {
        this.ledService.turnOn(component.pin); // Ligar o LED
      }
      // Adicionar lógica para outros componentes, se necessário
    });
  }

  stopProject() {
    console.log('Projeto parado.');
    this.components.forEach(component => {
      if (component.type === 'LED') {
        this.ledService.turnOff(component.pin); // Desligar o LED
      }
      // Adicionar lógica para parar outros componentes, se necessário
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
