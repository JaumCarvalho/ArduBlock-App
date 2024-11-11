
# ArduBlock-App

ArduBlock-App é um aplicativo mobile para ensino de programação em Arduino utilizando uma interface de programação em blocos. Este projeto foi desenvolvido para facilitar o aprendizado de conceitos de eletrônica e programação em Arduino.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados:

- [Node.js](https://nodejs.org/) (v12 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)
- [Angular CLI](https://angular.io/cli) (instale usando `npm install -g @angular/cli`)
- [Ionic CLI](https://ionicframework.com/docs/cli) (instale usando `npm install -g @ionic/cli`)
- [Android Studio](https://developer.android.com/studio) (inclui o Android SDK)
- [Java JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) (recomendado: JDK 8 ou superior)

## Clonando o Repositório

Clone este repositório em sua máquina local usando:

```bash
git clone https://github.com/JaumCarvalho/ArduBlock-App.git
```

Navegue até o diretório do projeto:

```bash
cd ArduBlock-App
```

## Instalando Dependências

Instale as dependências do projeto com o comando:

```bash
npm install
```

## Instalando o CLI

Instale o CLI do Ionic globalmente utilizando o comando:

```bash
npm install -g @ionic/cli 
```

## Executando o Aplicativo

Inicie o servidor de desenvolvimento:

```bash
ionic serve
```

O aplicativo estará disponível em `http://localhost:8100/`. Você pode abrir este endereço em seu navegador.

## Rodando o Aplicativo no Android Studio

Para rodar o aplicativo no Android Studio, siga os passos abaixo:

1. **Adicione a Plataforma Android**:
   Adicione a plataforma Android ao seu projeto Ionic:
   ```bash
   ionic capacitor add android
   ```

2. **Sincronize as Dependências**:
   Sincronize as dependências do Capacitor:
   ```bash
   ionic capacitor sync android
   ```

3. **Abra o Projeto no Android Studio**:
   ```bash
   ionic capacitor open android
   ```

4. **Configure o Dispositivo de Execução**:
   Conecte um dispositivo Android ao seu computador ou inicie um emulador Android no Android Studio.

5. **Compile e Execute**:
   No Android Studio, clique no botão de executar (um ícone de play) na parte superior da tela. Se tudo estiver configurado corretamente, o aplicativo será compilado e instalado no seu dispositivo/emulador.

6. **Visualizando Logs**:
   Para visualizar os logs do aplicativo, use o logcat no Android Studio, onde você pode monitorar a saída de console.

## Estrutura do Projeto

- **src/**: Contém o código-fonte do aplicativo.
  - **app/**: Contém os componentes, serviços e módulos principais.
  - **assets/**: Armazena arquivos estáticos, como imagens e estilos.
  - **environments/**: Configurações de ambiente para desenvolvimento e produção.

## Contato

Para dúvidas ou sugestões, entre em contato:

- Nome: João Carvalho
- E-mail: contatojaumcarvalho@gmail.com
