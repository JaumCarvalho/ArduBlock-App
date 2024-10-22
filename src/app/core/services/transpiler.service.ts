import { Injectable } from '@angular/core';
import * as Blockly from 'blockly';
import { CustomLang } from '../../pages/programming/custom-generator';

@Injectable({
  providedIn: 'root',
})
export class TranspilerService {
  transpileBlock(block: Blockly.Block): string {
    let code = '';
    const blockType = block.type;
    switch (blockType) {
      case 'setup_block':
        code += this.transpileSetupBlock(block);
        break;
      case 'led_on':
        code += this.transpileLedOn(block);
        break;
      case 'led_off':
        code += this.transpileLedOff(block);
        break;
      case 'controls_if':
        code += this.transpileIf(block);
        break;
      case 'controls_repeat_ext':
        code += this.transpileRepeat(block);
        break;
      default:
        code += '// Bloco não reconhecido: ' + blockType + '\n';
    }
    return code;
  }

  private transpileSetupBlock(block: Blockly.Block): string {
    if (typeof CustomLang['setup_block'] === 'function') {
      return CustomLang['setup_block'](block);
    }
    return '// Função setup_block não está definida\n';
  }

  private transpileLedOn(block: Blockly.Block): string {
    if (typeof CustomLang['led_on'] === 'function') {
      return CustomLang['led_on'](block);
    }
    return '// Função led_on não está definida\n';
  }

  private transpileLedOff(block: Blockly.Block): string {
    const pinOff = block.getFieldValue('PIN');
    return pinOff ? `digitalWrite(${pinOff}, LOW); // Desliga o LED no pino ${pinOff}\n` : '';
  }

  private transpileIf(block: Blockly.Block): string {
    const conditionBlock = block.getInputTargetBlock('IF');
    if (conditionBlock) {
      const condition = this.getConditionCode(conditionBlock);
      const actionBlock = block.getInputTargetBlock('DO');
      if (actionBlock) {
        const actionCode = this.transpileBlock(actionBlock);
        return `if (${condition}) {\n  ${actionCode}\n}\n`;
      }
    }
    return '';
  }

  private transpileRepeat(block: Blockly.Block): string {
    const repeatCount = block.getFieldValue('TIMES');
    const doBlock = block.getInputTargetBlock('DO');
    if (doBlock) {
      const statements = this.getChildBlocks(doBlock);
      const statementsCode = statements.map(stmt => this.transpileBlock(stmt)).join('');
      return `for (let i = 0; i < ${repeatCount}; i++) {\n  ${statementsCode}\n}\n`;
    }
    return '';
  }

  private getConditionCode(block: Blockly.Block): string {
    return block.getFieldValue('CONDITION') || 'false';
  }

  private getChildBlocks(block: Blockly.Block): Blockly.Block[] {
    const blocks: Blockly.Block[] = [];
    let childBlock = block.getInputTargetBlock('DO');
    while (childBlock) {
      blocks.push(childBlock);
      childBlock = childBlock.getNextBlock();
    }
    return blocks;
  }
}
