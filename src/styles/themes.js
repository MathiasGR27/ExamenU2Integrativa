export const themes = {
  azul: {
    border: '2px solid #004AAD',
    headerBg: '#003B8E',
    color: '#FFFFFF'
  },
  verde: {
    border: '2px solid #2E8B57',
    headerBg: '#3CB371',
    color: '#FFFFFF'
  },
  rojo: {
    border: '2px solid #B22222',
    headerBg: '#DC143C',
    color: '#FFFFFF'
  },
  gris: {
    border: '2px solid #555555',
    headerBg: '#AAAAAA',
    color: '#000000'
  },
  naranja: {
    border: '2px solid #FF8C00',
    headerBg: '#FFA500',
    color: '#000000'
  }
};

export function getThemeByCedula(cedula) {
  if (!cedula) return themes.azul; 

  const lastDigit = parseInt(cedula.toString().slice(-1));
  if ([0, 1].includes(lastDigit)) return themes.azul;
  if ([2, 3].includes(lastDigit)) return themes.verde;
  if ([4, 5].includes(lastDigit)) return themes.rojo;
  if ([6, 7].includes(lastDigit)) return themes.gris;
  return themes.naranja;
}
