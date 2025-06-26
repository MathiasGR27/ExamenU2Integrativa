# Web Component con LitElement - Botón de Carga Mathias Gualpa

## Descripción del Proyecto
Este proyecto implementa un Web Component personalizado usando LitElement que simula un botón de carga institucional para la Universidad de las Fuerzas Armadas ESPE. El componente demuestra las capacidades avanzadas de LitElement para crear elementos reutilizables y dinámicos.

---

## Estados Dinámicos en LitElement

### ¿Qué son los Estados Dinámicos?
Los estados dinámicos en LitElement son propiedades reactivas que automáticamente actualizan la vista cuando cambian sus valores. Esto se logra mediante el sistema de propiedades observadas de LitElement.

### Implementación en mi componente

![Estado Dinámico](./capturas/EstadoDinamico.png)  

### ¿Cómo funciona la reactividad?

- **Declaración:** Las propiedades se declaran en `static properties`.
- **Observación:** LitElement automáticamente observa cambios en estas propiedades.
- **Re-renderizado:** Cuando una propiedad cambia, se ejecuta automáticamente el método `render()`.
- **Actualización del DOM:** Solo se actualizan las partes del DOM que han cambiado.

### Ejemplo de cambio de estado

![Cambio de Estado](./capturas/CambiodeEstado.png)  

---

## Eventos Personalizados para Integración

Los eventos personalizados permiten que los Web Components se comuniquen con el DOM padre sin crear dependencias directas, manteniendo el principio de encapsulación.

### Implementación en mi componente

![Evento Personalizado](./capturas/EventoPersonaliazdo.png)  

### Implementación en otro componente

![Evento Personalizado](./capturas/EventoPersonalizadoOtroComponente.png)  

### Ventajas de esta aproximación

- **Desacoplamiento:** El componente no necesita conocer su contexto de uso.
- **Reutilización:** El mismo componente puede usarse en diferentes contextos.
- **Mantenibilidad:** Cambios en el componente no afectan el código padre.
- **Escalabilidad:** Fácil integración en aplicaciones complejas.

---

# Comparación: JavaScript Puro vs LitElement

| Característica                  | JavaScript Puro                                                      | LitElement                                                     |
|--------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------|
| Sistema de Propiedades Reactivas | `set loading(value) { this._loading = value; this.updateUI(); }`   | `static properties = { loading: { type: Boolean } };`          |
| Renderizado Eficiente           | `updateUI() { this.innerHTML = \`<button>\${this.loading ? 'Cargando...' : 'Enviar'}</button>\`; }` | `render() { return html\`<button>\${this.loading ? 'Cargando...' : 'Enviar'}</button>\`; }` |
| Gestión de Estilos              | `button.style.backgroundColor = 'red';`                            | `static styles = css\` button { background-color: var(--primary-color); } \`;` |


# Pruebas realizadas

## 1. Custom Element Válido 

- Código del registro del componente:  
  ![Registro del componente](./capturas/registro_componente.png)

- Extensión de LitElement:  
  ![Extensión LitElement](./capturas/extension_litelement.png)

- Uso en HTML:  
  ![Uso en HTML](./capturas/uso_en_html.png)

- Inspección en DevTools: Mostrar el elemento personalizado en el árbol DOM  
  ![DevTools - Elemento personalizado](./capturas/devtools_elemento.png)

---

## 2. Uso de Estados Dinámicos 

- Declaración de propiedades reactivas:  
  ![Declaración propiedades](./capturas/declaracion_propiedades.png)

- Cambio de estado en acción (línea con `this.loading = true;`):  
  ![Cambio de estado en acción](./capturas/cambio_estado_accion.png)

- Renderizado condicional:  
  ![Renderizado condicional](./capturas/renderizado_condicional.png)

- Captura del botón en ambos estados: Normal y Cargando  
  ![Botón normal](./capturas/boton_normal.png)  
  ![Botón cargando](./capturas/boton_cargando.png)

---

## 3. Estilos y Temas ESPE 

- Estilos encapsulados (declaración `static styles = css`):  
  ![Estilos encapsulados](./capturas/estilos_encapsulados.png)

- Resultado visual: Formulario completo con colores ESPE aplicados  
  ![Formulario colores ESPE](./capturas/formulario_colores_espe.png)


---

## 4. Eventos y Comunicación 

- Creación del evento personalizado (`this.dispatchEvent(new CustomEvent(...))`):  
  ![Creación evento personalizado](./capturas/creacion_evento_personalizado.png)

- Escucha del evento (`addEventListener` y lógica asociada):  
  ![Escucha del evento](./capturas/escucha_evento.png)

---


