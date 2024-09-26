import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Blockly from 'blockly/core';
import 'blockly/blocks';
import 'blockly/javascript';

Blockly.Blocks['led_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ligar LED no pino")
        .appendField(new Blockly.FieldNumber(13), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Liga um LED em um pino digital.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['led_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Desligar LED no pino")
        .appendField(new Blockly.FieldNumber(13), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Desliga um LED no pino especificado.");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['controls_wait'] = {
  init: function() {
    this.appendValueInput("TIME")
        .setCheck("Number")
        .appendField("Esperar por");
    this.appendDummyInput()
        .appendField("milissegundos");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip("Aguarda um tempo especificado em milissegundos.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['controls_repeat_ext'] = {
  init: function() {
    this.appendValueInput("TIMES")
        .setCheck("Number")
        .appendField("Repetir");
    this.appendStatementInput("DO")
        .appendField("fazer");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Repete o bloco aninhado um número de vezes.");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['servo_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mover Servo no pino")
        .appendField(new Blockly.FieldNumber(9), "PIN")
        .appendField("para o ângulo")
        .appendField(new Blockly.FieldNumber(90, 0, 180), "ANGLE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Move um servo para o ângulo especificado.");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['read_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ler estado do botão no pino")
        .appendField(new Blockly.FieldNumber(7), "PIN");
    this.setOutput(true, "Boolean");
    this.setColour(120);
    this.setTooltip("Lê o estado de um botão (pressionado ou não).");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ultrasonic_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ler distância do sensor ultrassônico (em cm) nos pinos TRIG")
        .appendField(new Blockly.FieldNumber(12), "TRIG")
        .appendField("e ECHO")
        .appendField(new Blockly.FieldNumber(11), "ECHO");
    this.setOutput(true, "Number");
    this.setColour(210);
    this.setTooltip("Lê a distância de um objeto usando um sensor ultrassônico.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['temperature_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ler temperatura do sensor no pino")
        .appendField(new Blockly.FieldNumber(10), "PIN");
    this.setOutput(true, "Number");
    this.setColour(210);
    this.setTooltip("Lê a temperatura usando um sensor.");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['setup_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("setup");
    this.appendStatementInput("SETUP_CONTENT")
        .setCheck(null)
    this.setColour(290);
    this.setTooltip("Bloco para configurar o Arduino.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['loop_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("loop");
    this.appendStatementInput("LOOP_CONTENT")
        .setCheck(null)
    this.setColour(290);
    this.setTooltip("Bloco que executa repetidamente.");
    this.setHelpUrl("");
  }
};

@Component({
  selector: 'app-programming',
  templateUrl: './programming.page.html',
  styleUrls: ['./programming.page.scss'],
})

export class ProgrammingPage implements AfterViewInit{
  workspace!: Blockly.WorkspaceSvg;
  ngAfterViewInit(): void {
    const blocklyDiv = document.getElementById('blocklyDiv')!;
    const workspaceConfig: Blockly.BlocklyOptions = {
      toolbox: this.getToolbox(),
      grid:{
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true
      },
      trashcan: true
    }
    this.workspace = Blockly.inject(blocklyDiv, workspaceConfig);
  }


  getToolbox(): Element | Blockly.utils.toolbox.ToolboxDefinition | undefined {
    return {
      "kind": "categoryToolbox",
      "contents": [
        {
          "kind": "category",
          "name": "Controle",
          "colour": "#5C81A6",
          "contents": [
            { "kind": "block", "type": "setup_block" },
            { "kind": "block", "type": "loop_block" },
            { "kind": "block", "type": "controls_if" },
            { "kind": "block", "type": "controls_repeat_ext" },
            { "kind": "block", "type": "controls_wait" }
          ]
        },
        {
          "kind": "category",
          "name": "Componentes",
          "colour": "#5C9EA6",
          "contents": [
            { "kind": "block", "type": "led_on" },
            { "kind": "block", "type": "led_off" },
            { "kind": "block", "type": "servo_write" },
            { "kind": "block", "type": "read_button" }
          ]
        },
        {
          "kind": "category",
          "name": "Sensores",
          "colour": "#A65C6A",
          "contents": [
            { "kind": "block", "type": "ultrasonic_read" },
            { "kind": "block", "type": "temperature_read" }
          ]
        },
        {
          "kind": "category",
          "name": "Matemática",
          "colour": "#5CA65C",
          "contents": [
            { "kind": "block", "type": "math_number" },
            { "kind": "block", "type": "math_arithmetic" }
          ]
        },
        {
          "kind": "category",
          "name": "Lógica",
          "colour": "#5C68A6",
          "contents": [
            { "kind": "block", "type": "logic_compare" },
            { "kind": "block", "type": "logic_operation" },
            { "kind": "block", "type": "logic_boolean" }
          ]
        }
      ]
    };
  }
}