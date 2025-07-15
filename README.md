# Proyecto Carreras ESPE

## Autor
Mathias Gualpa

---

## Descripción
Este proyecto es una aplicación web desarrollada con Web Components usando LitElement.  
Permite mostrar una lista de carreras universitarias extraídas de un archivo JSON, y mostrar detalles en un modal con un tema dinámico basado en el último dígito de la cédula del usuario.

El diseño incluye dos componentes principales:
- `<career-selector>`: Lista las carreras y solicita el número de cédula al usuario.
- `<career-card>`: Muestra la información detallada en un modal con estilos personalizados.

---

## Instrucciones para clonar, instalar y ejecutar

1. Clonar el repositorio:

git clone https://github.com/MathiasGR27/ExamenU2Integrativa.git
cd ExamenU2Integrativa

2. Instalar dependencias:

npm install

3. Ejecutar el proyecto 

npm run serve

---

## Tabla de props para configuración
| Propiedad | Tipo | Componente | Descripción |
|-----------|------|------------|-------------|
| `careers` | Array | career-selector | Lista de carreras obtenida desde `careers.json` |
| `cedula` | String | career-selector | Número de cédula ingresado por el usuario |
| `career` | Object | career-card | Carrera seleccionada para mostrar en el modal |
| `cedula` | String | career-card | Cédula usada para determinar el tema de color |

---

## Demostracion de funcionamiento
![Funcionamiento de componentes](./docs/funcionamiento.gif)
