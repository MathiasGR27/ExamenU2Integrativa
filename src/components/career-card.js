import { LitElement, html, css } from 'lit-element';
import { getThemeByCedula } from '../styles/themes.js';

export class CareerCard extends LitElement {
  static properties = {
    career: { type: Object },
    cedula: { type: String }
  };

  constructor() {
    super();
    this.career = null;
    this.cedula = '';
  }

  static styles = css`
    dialog {
      border: none;
      border-radius: 12px;
      padding: 20px;
      width: 90%;
      max-width: 550px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    }
    dialog::backdrop {
      background: rgba(0, 0, 0, 0.4);
    }
    .close {
      float: right;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #ffffff;
    }
    .card {
      padding: 16px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      background-color: white;
    }
    .header {
      font-weight: bold;
      padding: 10px;
      border-radius: 8px 8px 0 0;
      font-size: 1.1rem;
    }
    img {
      width: 100%;
      height: auto;
      margin-top: 10px;
      border-radius: 8px;
      object-fit: cover;
    }
    .description {
      margin-top: 12px;
      font-size: 0.95rem;
      line-height: 1.5;
      color: #ffffff
    }
  `;

  firstUpdated() {
  this.dialog = this.shadowRoot.querySelector('dialog');

  window.addEventListener('career-selected', (e) => {
    this.career = e.detail.career;
    this.cedula = e.detail.cedula;

    this.updateComplete.then(() => {
      this.dialog.showModal();
    });
  });
}


  closeModal() {
    this.dialog.close();
    this.career = null; 
  }

  render() {
    const theme = getThemeByCedula(this.cedula);

    return html`
      <dialog>
        <button class="close" @click="${this.closeModal}">✖</button>

        ${this.career
          ? html`
              <div class="card" style="border: ${theme.border}; background: ${theme.headerBg}; color: ${theme.color};">
                <div class="header">
                  ${this.career.nombre} - ${this.career.facultad}
                </div>
                <img src="${this.career.imagen}" alt="${this.career.nombre}" />
                <div class="description" style="color: #ffffff;">
                  ${this.career.descripcion}
                </div>
              </div>
            `
          : html`<p>Selecciona una carrera para ver detalles.</p>`
        }
      </dialog>
    `;
  }
}

customElements.define('career-card', CareerCard);
