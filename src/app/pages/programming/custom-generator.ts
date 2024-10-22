import * as Blockly from 'blockly';
interface CustomGenerator {
  statementToCode?: (block: Blockly.Block, name: string) => string;
  valueToCode?: (
    block: Blockly.Block,
    name: string,
    precedence: number
  ) => string;
  PRECEDENCE?: {
    NONE: number;
    LOW: number;
    MEDIUM: number;
    HIGH: number;
    HIGHEST: number;
  };
  setup_block?: (block: Blockly.Block) => string;
  led_on?: (block: Blockly.Block) => string;
  led_off?: (block: Blockly.Block) => string;
  controls_wait?: (block: Blockly.Block) => string;
  controls_repeat_ext?: (block: Blockly.Block) => string;
  servo_write?: (block: Blockly.Block) => string;
  read_button?: (block: Blockly.Block) => string;
  ultrasonic_read?: (block: Blockly.Block) => string;
  temperature_read?: (block: Blockly.Block) => string;
  controls_if?: (block: Blockly.Block) => string;
}

const CustomLang: CustomGenerator = new Blockly.Generator(
  'CustomLang'
) as unknown as CustomGenerator;

CustomLang.PRECEDENCE = {
  NONE: 0,
  LOW: 1,
  MEDIUM: 2,
  HIGH: 3,
  HIGHEST: 4,
};

CustomLang['setup_block'] = function (block: Blockly.Block) {
  const statements = CustomLang.statementToCode
    ? CustomLang.statementToCode(block, 'SETUP_CONTENT')
    : '';
  return `function setup() {\n${statements}}\n`;
};

CustomLang['led_on'] = function (block: Blockly.Block) {
  const pin = block.getFieldValue('PIN');
  return `digitalWrite(${pin}, HIGH);\n`;
};

CustomLang['led_off'] = function (block: Blockly.Block) {
  const pin = block.getFieldValue('PIN');
  return `digitalWrite(${pin}, LOW);\n`;
};

CustomLang['controls_wait'] = function (block: Blockly.Block) {
  const time = CustomLang.valueToCode
    ? CustomLang.valueToCode(block, 'TIME', CustomLang.PRECEDENCE?.LOW || 0)
    : '0';
  return `delay(${time});\n`;
};

CustomLang['controls_repeat_ext'] = function (block: Blockly.Block) {
  const times = CustomLang.valueToCode
    ? CustomLang.valueToCode(block, 'TIMES', CustomLang.PRECEDENCE?.LOW || 0)
    : '0';
  const statements = CustomLang.statementToCode
    ? CustomLang.statementToCode(block, 'DO')
    : '';
  return `for (let i = 0; i < ${times}; i++) {\n${statements}}\n`;
};

CustomLang['servo_write'] = function (block: Blockly.Block) {
  const pin = block.getFieldValue('PIN');
  const angle = block.getFieldValue('ANGLE');
  return `myServo.attach(${pin});\nmyServo.write(${angle});\n`;
};

CustomLang['read_button'] = function (block: Blockly.Block) {
  const pin = block.getFieldValue('PIN');
  return `digitalRead(${pin});\n`;
};

CustomLang['ultrasonic_read'] = function (block: Blockly.Block) {
  const trigPin = block.getFieldValue('TRIG');
  const echoPin = block.getFieldValue('ECHO');
  return `readUltrasonic(${trigPin}, ${echoPin});\n`;
};

CustomLang['temperature_read'] = function (block: Blockly.Block) {
  const pin = block.getFieldValue('PIN');
  return `readTemperature(${pin});\n`;
};

export { CustomLang };
