import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit, ComponentRef, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicComponent } from 'src/app/components/dynamic-component/dynamic-component.component';

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

  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: false }) container!: ViewContainerRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
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

  addComponent(componentData: any) {
    this.components.push(componentData);
    // Aqui você pode chamar seu serviço para persistir os dados no IndexedDB
    this.cdr.detectChanges();
  }

  toggleExecution() {
    this.isExecuting = !this.isExecuting;
    if (this.isExecuting) {
      this.executeProject();
    } else {
      this.stopProject();
    }
  }

  executeProject() {
    console.log('Executando projeto...');
    // Lógica para executar o projeto
  }

  stopProject() {
    console.log('Projeto parado.');
    // Lógica para parar o projeto
  }
}
