import { LitElement, html, css } from 'lit-element';

export class CareerSelector extends LitElement {
  static styles = css`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    background: #ffffff;
    border: 1px solid #ddd;
    border-left: 5px solid #0052cc;
    padding: 12px 16px;
    margin-bottom: 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-weight: 500;
  }

  li:hover {
    background: #f0f8ff;
    transform: translateX(4px);
  }
`;
static properties = {
    careers: { type: Array },
    cedula: { type: String }
  };

  constructor() {
    super();
    this.careers = [];
    this.cedula = '';
  }

  connectedCallback() {
    super.connectedCallback();
    this.askCedulaAndLoadCareers();
  }

  async askCedulaAndLoadCareers() {
    this.cedula = prompt("Por favor ingresa tu número de cédula");
    if (!this.cedula || this.cedula.trim() === '') {
      alert("Debes ingresar un número de cédula válido.");
      return;
    }
    try {
      const res = await fetch('/careers.json');
      this.careers = await res.json();
    } catch (error) {
      console.error('Error cargando carreras:', error);
    }
  }

  handleClick(career) {
    this.dispatchEvent(new CustomEvent('career-selected', {
      detail: { career, cedula: this.cedula },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    if (!this.cedula) {
      return html`<p>Por favor ingresa tu cédula para ver las carreras.</p>`;
    }

    return html`
      <ul>
        ${this.careers.map(c => html`
          <li @click="${() => this.handleClick(c)}">${c.nombre}</li>
        `)}
      </ul>
    `;
  }
}

customElements.define('career-selector', CareerSelector);