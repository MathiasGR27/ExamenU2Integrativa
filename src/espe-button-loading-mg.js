import { LitElement, html, css } from 'lit-element';

class EspeButtonLoading extends LitElement {

  static properties = {
    loading: { type: Boolean },
    disabled: { type: Boolean }
  };

  constructor() {
    super();
    this.loading = false;
    this.disabled = false;
  }

  static styles = css`
        :host {
          display: inline-block;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        button {
          background: linear-gradient(135deg, #004D00, #00B140);
          color: #FFFFCC;
          padding: 14px 28px;
          border: 2px solid #990000;
          border-radius: 12px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 6px 12px rgba(0,0,0,0.2);
          min-width: 140px;
        }

        button:hover:not([disabled]) {
          background: linear-gradient(135deg, #00B140, #004D00);
          border-color: #004D00;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.3);
        }

        button[disabled] {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .spinner {
          border: 3px solid #FFFFCC;
          border-top: 3px solid #990000;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `;

  _handleClick() {
    if (!this.disabled && !this.loading) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.dispatchEvent(new CustomEvent('button-click', { bubbles: true, composed: true }));
      }, 2000);
    }
  }

  render() {
    return html`
      <button
        ?disabled=${this.disabled || this.loading}
        @click=${this._handleClick}
        aria-label="Botón institucional de ESPE"
      >
        ${this.loading
          ? html`<div class="spinner" aria-hidden="true"></div> Cargando...`
          : html`<slot>Enviar</slot>`}
      </button>
    `;
  }
}

customElements.define('espe-button-loading', EspeButtonLoading);
