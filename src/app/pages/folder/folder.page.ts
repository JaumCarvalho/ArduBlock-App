import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LedService } from '../../models/led/led.service';
import { WorkspaceService } from '../../core/services/workspace_idb.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit, AfterViewInit {
  public folder: string | null = null;

  // variáveis do contador do simulador
  isExecuting = false;
  timer: any;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  // array dos componentes contidos na área de execução/workspace
  components: any[] = [];

  private activeComponent: any = null;
  private initialPosition: { x: number; y: number } = { x: 0, y: 0 };

  constructor(
    private workspaceService: WorkspaceService,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private ledService: LedService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.folder = params.get('id');
      this.loadComponents();
    });
    this.loadComponents();

    // recebe os dados da rota de card-component-arduino.component.ts
    const componentData = history.state.item;
    if (componentData) {
      const componentWithPosition = {
        ...componentData,
        position: { x: 280, y: 100 },
      };
      this.addComponent(componentWithPosition, componentWithPosition.position);
    }
  }

  // carrega os componentes de workspaceIDB
  async loadComponents() {
    try {
      this.components = await this.workspaceService.getAllComponents();
      console.log('Componentes carregados:', this.components);
      this.cdr.detectChanges();
      this.deselectAllComponents();
    } catch (error) {
      console.error('Erro ao carregar componentes do workspaceDB:', error);
    }
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  confirmPosition(component: any) {
    console.log('Posição confirmada para', component);
  }

  trackById(index: number, component: any): number {
    return component.id;
  }

  // lógica para deletar um componente do arduino que doi inserido em workspace
  // deve ser excluído de WorkspaceDB também
  deleteComponent(component: any) {
    console.log('Tentando deletar componente:', component);

    // localiza o índice do componente no array local e remove se existir
    const index = this.components.findIndex((comp) => comp.id === component.id);
    if (index > -1) {
      this.components.splice(index, 1);
      console.log('Componente deletado com sucesso:', component);

      // chama o WorkspaceService para excluir o componente no workspaceDB
      this.workspaceService
        .deleteComponentById(component.id)
        .then(() => {
          console.log('Componente deletado do workspaceDB:', component.id);
          this.cdr.detectChanges();
        })
        .catch((error) => {
          console.error('Erro ao deletar componente do workspaceDB:', error);
        });
    } else {
      console.error('Componente não encontrado na lista:', component);
    }

    this.cdr.markForCheck();
  }

  // lógica de seleção de componente para torná-lo arrastável
  selectedComponent(component: any) {
    this.deselectAllComponents();
    component.isSelected = true;
    this.activeComponent = component;
  }

  // lógica para cancelar a seleção
  deselectAllComponents() {
    this.components.forEach((comp) => (comp.isSelected = false));
    this.activeComponent = null;
  }

  // função para verificar de onde o componente foi arrastado, a posição inicial
  startDrag(event: TouchEvent, component: any) {
    if (!component.isSelected) return; // early return caso o componente não esteja selecionado/ativado antes
    this.activeComponent = component;
    this.initialPosition = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
    console.log('Dragging started', this.initialPosition);
  }

  // função para mover o componente selecionado
  move(event: TouchEvent) {
    // se o elemento não estiver ativo/selecionado ou nem tiver uma posição inicial ele não move
    if (!this.activeComponent || !this.initialPosition) {
      console.log(
        'Move event ignored: activeComponent or initialPosition is undefined'
      );
      return;
    }

    // armazena a posição do componente e mostra em tempo de execução as coordenadas
    const deltaX = event.touches[0].clientX - this.initialPosition.x;
    const deltaY = event.touches[0].clientY - this.initialPosition.y;

    console.log('Moving component', this.activeComponent, 'Delta:', {
      deltaX,
      deltaY,
    });

    this.activeComponent.position.x += deltaX;
    this.activeComponent.position.y += deltaY;

    this.initialPosition = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };

    this.cdr.detectChanges();
  }

  // função para soltar o componente do click
  drop(event: TouchEvent) {
    if (!this.activeComponent) return;
    // adiciona o componente e atualiza a posição
    this.addComponent(this.activeComponent, this.activeComponent.position);

    // salva a posição atualizada no workspaceDB
    this.workspaceService
      .saveComponent(this.activeComponent)
      .then(() =>
        console.log(
          'Posição do componente atualizada no workspaceDB:',
          this.activeComponent
        )
      )
      .catch((error) =>
        console.error('Erro ao atualizar posição no workspaceDB:', error)
      );

    this.activeComponent = null;
  }

  addComponent(componentData: any, position: { x: number; y: number }) {
    // verifica se o componente já existe no array pelo id
    const exists = this.components.some((comp) => comp.id === componentData.id);

    if (!exists) {
      const componentWithPosition = { ...componentData, position };
      this.components.push(componentWithPosition);
      // salva o novo componente no workspaceDB
      this.workspaceService
        .saveComponent(componentWithPosition)
        .then(() => {
          console.log(
            'Componente salvo no workspaceDB:',
            componentWithPosition
          );
          // seleciona o componente que acabou de ser adicionado
          this.selectedComponent(componentWithPosition);
        })
        .catch((error) =>
          console.error('Erro ao salvar componente no workspaceDB:', error)
        );
      this.cdr.detectChanges();
    } else {
      console.warn(
        'Componente já existe no array, não foi adicionado novamente:',
        componentData
      );
    }
  }

  // função para pegar a url do svg com base no tipo do componente
  getComponentImage(type: string): string {
    switch (type) {
      case 'Arduino':
        return '../../../assets/arduino-components/arduino.svg';
      case 'Breadboard':
        return '../../../assets/arduino-components/breadboard.svg';
      case 'LED':
        return '../../../assets/arduino-components/led.svg';
      case 'Resistor':
        return '../../../assets/arduino-components/resistor.svg';
      case 'Potenciometro':
        return '../../../assets/arduino-components/potenciometro.svg';
      case 'Botao':
        return '../../../assets/arduino-components/botao.svg';
      case 'Servo':
        return '../../../assets/arduino-components/servomotor.svg';
      default:
        return '';
    }
  }

  /* funções do contador do simulador */

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
