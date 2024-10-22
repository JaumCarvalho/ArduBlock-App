import { AfterViewInit, Component, HostListener } from '@angular/core';

import 'blockly/blocks';
import * as Blockly from 'blockly';
import * as BlocklyMessages from 'blockly/msg/pt-br';
import { PersistenceDbService } from '../../core/services/persistence_idb.service';
import { TranspilerService } from '../../core/services/transpiler.service';
import { getToolbox } from './toolbox-config';

import './blocks';
//nem trisca aqui nesse "erro"
Blockly.setLocale(BlocklyMessages);

@Component({
  selector: 'app-programming',
  templateUrl: './programming.page.html',
  styleUrls: ['./programming.page.scss'],
})
export class ProgrammingPage implements AfterViewInit {
  workspace!: Blockly.WorkspaceSvg;
  generatedCode: string = '';
  pageTitle: string = 'Programação';

  constructor(
    private persistenceDbService: PersistenceDbService,
    private transpilerService: TranspilerService // Injetar o serviço
  ) {}

  ionViewDidEnter() {
    this.loadWorkspace().then(() => {
      if (this.workspace) {
        Blockly.svgResize(this.workspace);
      }
    });
  }

  onWorkspaceChange() {
    this.pageTitle = 'Programação *';
  }

  saveWorkspace() {
    const blocks = this.workspace.getAllBlocks();
    console.log('conteúdo do bloco: ' + blocks);
    let generatedCode = '';

    blocks.forEach((block) => {
      generatedCode += this.transpilerService.transpileBlock(block); // Usar o serviço
    });

    console.log('Código TypeScript gerado:', generatedCode);
    this.generatedCode = generatedCode;

    const xml = Blockly.Xml.workspaceToDom(this.workspace);
    const xmlText = Blockly.Xml.domToText(xml);
    this.persistenceDbService.saveWorkspace(xmlText).then(() => {
      // console.log('Workspace salvo com sucesso!');
    });
    this.pageTitle = 'Programação';
  }

  getConditionCode(block: Blockly.Block): string {
    return block.getFieldValue('CONDITION') || 'false';
  }

  getChildBlocks(block: Blockly.Block): Blockly.Block[] {
    const blocks: Blockly.Block[] = [];
    let childBlock = block.getInputTargetBlock('DO');

    while (childBlock) {
      blocks.push(childBlock);
      childBlock = childBlock.getNextBlock();
    }

    return blocks;
  }

  async loadWorkspace(): Promise<void> {
    const xmlText = await this.persistenceDbService.loadWorkspace();
    if (xmlText) {
      try {
        const xml = Blockly.utils.xml.textToDom(xmlText);
        Blockly.Xml.domToWorkspace(xml, this.workspace);
        console.log(
          'Blocks in workspace after loading:',
          this.workspace.getAllBlocks()
        );
      } catch (error) {
        console.error('Erro ao converter texto para DOM:', error);
      }
    } else {
      console.log('Nenhum workspace encontrado.');
    }
  }

  ngAfterViewInit(): void {
    const blocklyDiv = document.getElementById('blocklyDiv');
    if (blocklyDiv) {
      const workspaceConfig: Blockly.BlocklyOptions = {
        toolbox: getToolbox(),
        grid: {
          spacing: 20,
          length: 3,
          colour: '#ccc',
          snap: true,
        },
        trashcan: true,
      };
      this.workspace = Blockly.inject(blocklyDiv, workspaceConfig);
    } else {
      console.error('Elemento blocklyDiv não encontrado.');
    }
    this.workspace.addChangeListener(this.onWorkspaceChange.bind(this));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    Blockly.svgResize(this.workspace);
  }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange() {
    Blockly.svgResize(this.workspace);
  }
}
