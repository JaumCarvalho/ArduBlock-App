import * as Blockly from 'blockly';
export function getToolbox():
  | Element
  | Blockly.utils.toolbox.ToolboxDefinition
  | undefined {
  return {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Controle',
        colour: '#5C81A6',
        contents: [
          { kind: 'block', type: 'setup_block' },
          { kind: 'block', type: 'loop_block' },
          { kind: 'block', type: 'controls_if' },
          { kind: 'block', type: 'controls_repeat_ext' },
          { kind: 'block', type: 'controls_wait' },
        ],
      },
      {
        kind: 'category',
        name: 'Componentes',
        colour: '#5C9EA6',
        contents: [
          { kind: 'block', type: 'led_on' },
          { kind: 'block', type: 'led_off' },
          { kind: 'block', type: 'servo_write' },
          { kind: 'block', type: 'read_button' },
        ],
      },
      {
        kind: 'category',
        name: 'Sensores',
        colour: '#A65C6A',
        contents: [
          { kind: 'block', type: 'ultrasonic_read' },
          { kind: 'block', type: 'temperature_read' },
        ],
      },
      {
        kind: 'category',
        name: 'Matemática',
        colour: '#5CA65C',
        contents: [
          { kind: 'block', type: 'math_number' },
          { kind: 'block', type: 'math_arithmetic' },
        ],
      },
      {
        kind: 'category',
        name: 'Lógica',
        colour: '#5C68A6',
        contents: [
          { kind: 'block', type: 'logic_compare' },
          { kind: 'block', type: 'logic_operation' },
          { kind: 'block', type: 'logic_boolean' },
        ],
      },
    ],
  };
}
