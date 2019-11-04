import { LitElement, html, customElement, property } from 'lit-element';

@customElement('nhug-button')
export class InnerElement extends LitElement {
  @property({
    type : String
  }) label = ''
  @property({
    type : Object
  }) onClickHandler = () => {console.log('clickHandler of nhug-button')};

  render() {
    return html`
       <button @click="${this.onClickHandler}">${this.label}</button>
    `;
  }
}

@customElement('nhug-button-group')
export class OuterElement extends LitElement {

  clickHandler() {
    console.log('clickHandler of nhug-button-group');
  }

  render() {
    return html`
      <div class="nhug-button-group">
        <button @click="${this.clickHandler}">nhug-button-group executes clickHandler of nhug-button-group</button>
        <nhug-button
          label="nhug-button executes clickHandler of nhug-button-group"
          .onClickHandler="${this.clickHandler}"
        ></nhug-button>
        <nhug-button
          label="nhug-button executes executes passed in function"
          .onClickHandler="${() => console.log('passed in function')}"
        ></nhug-button>
        <nhug-button
          label="nhug-button executes executes clickHandler of nhug-button"
        ></nhug-button>
      </div>
    `;
  }
}
