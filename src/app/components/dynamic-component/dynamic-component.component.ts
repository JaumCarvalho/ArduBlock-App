import { Component, Input, Output, EventEmitter, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic-component.component.html'
})
export class DynamicComponent implements OnDestroy {
  @Input() data!: string | null;
  @Output() destroy = new EventEmitter<void>();

  onClick(){
    console.log('Clicado para destruir');
    this.destroy.emit();
  }

  ngOnDestroy(){
    console.log('Só confirmando que foi de base');
  }
}
