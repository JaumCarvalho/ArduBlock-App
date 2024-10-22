import * as Blockly from 'blockly';
Blockly.Blocks['led_on'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Ligar LED no pino')
      .appendField(new Blockly.FieldNumber(13), 'PIN');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Liga um LED em um pino digital.');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['led_off'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Desligar LED no pino')
      .appendField(new Blockly.FieldNumber(13), 'PIN');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Desliga um LED no pino especificado.');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['controls_wait'] = {
  init: function () {
    this.appendValueInput('TIME').setCheck('Number').appendField('Esperar por');
    this.appendDummyInput().appendField('milissegundos');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('Aguarda um tempo especificado em milissegundos.');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['controls_repeat_ext'] = {
  init: function () {
    this.appendValueInput('TIMES').setCheck('Number').appendField('Repetir');
    this.appendStatementInput('DO').appendField('fazer');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Repete o bloco aninhado um número de vezes.');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['servo_write'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Mover Servo no pino')
      .appendField(new Blockly.FieldNumber(9), 'PIN')
      .appendField('para o ângulo')
      .appendField(new Blockly.FieldNumber(90, 0, 180), 'ANGLE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Move um servo para o ângulo especificado.');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['read_button'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Ler estado do botão no pino')
      .appendField(new Blockly.FieldNumber(7), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setColour(120);
    this.setTooltip('Lê o estado de um botão (pressionado ou não).');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['ultrasonic_read'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        'Ler distância do sensor ultrassônico (em cm) nos pinos TRIG'
      )
      .appendField(new Blockly.FieldNumber(12), 'TRIG')
      .appendField('e ECHO')
      .appendField(new Blockly.FieldNumber(11), 'ECHO');
    this.setOutput(true, 'Number');
    this.setColour(210);
    this.setTooltip(
      'Lê a distância de um objeto usando um sensor ultrassônico.'
    );
    this.setHelpUrl('');
  },
};

Blockly.Blocks['temperature_read'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Ler temperatura do sensor no pino')
      .appendField(new Blockly.FieldNumber(10), 'PIN');
    this.setOutput(true, 'Number');
    this.setColour(210);
    this.setTooltip('Lê a temperatura usando um sensor.');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['setup_block'] = {
  init: function () {
    this.appendDummyInput().appendField('setup');
    this.appendStatementInput('SETUP_CONTENT').setCheck(null);
    this.setColour(290);
    this.setTooltip('Bloco para configurar o Arduino.');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['loop_block'] = {
  init: function () {
    this.appendDummyInput().appendField('loop');
    this.appendStatementInput('LOOP_CONTENT').setCheck(null);
    this.setColour(290);
    this.setTooltip('Bloco que executa repetidamente.');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['math_number'] = {
  init: function () {
    this.appendDummyInput().appendField(new Blockly.FieldNumber(0), 'NUM');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('Um número.');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['math_arithmetic'] = {
  init: function () {
    this.appendValueInput('A')
      .setCheck('Number')
      .appendField(
        new Blockly.FieldDropdown([
          ['+', 'ADD'],
          ['-', 'SUBTRACT'],
          ['*', 'MULTIPLY'],
          ['/', 'DIVIDE'],
        ]),
        'OP'
      );
    this.appendValueInput('B').setCheck('Number');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('Operação matemática entre dois números.');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['logic_compare'] = {
  init: function () {
    this.appendValueInput('A').setCheck(null);
    this.appendValueInput('B').setCheck(null);
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['=', 'EQ'],
        ['≠', 'NEQ'],
        ['<', 'LT'],
        ['≤', 'LTE'],
        ['>', 'GT'],
        ['≥', 'GTE'],
      ]),
      'OP'
    );
    this.setOutput(true, 'Boolean');
    this.setColour(210);
    this.setTooltip('Compara dois valores.');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['logic_operation'] = {
  init: function () {
    this.appendValueInput('A').setCheck('Boolean');
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['E', 'AND'],
        ['OU', 'OR'],
      ]),
      'OP'
    );
    this.appendValueInput('B').setCheck('Boolean');
    this.setOutput(true, 'Boolean');
    this.setColour(210);
    this.setTooltip('Operação lógica entre dois valores.');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['logic_boolean'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['Verdadeiro', 'TRUE'],
        ['Falso', 'FALSE'],
      ]),
      'BOOL'
    );
    this.setOutput(true, 'Boolean');
    this.setColour(210);
    this.setTooltip('Valor booleano verdadeiro ou falso.');
    this.setHelpUrl('');
  },
};
