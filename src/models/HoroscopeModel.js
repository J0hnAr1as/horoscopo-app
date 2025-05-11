// Lista de signos zodiacales
const signos = [
  { nombre: 'Capricornio', inicio: '22-12', fin: '19-01', emoji: '🐐' },
  { nombre: 'Acuario', inicio: '20-01', fin: '18-02', emoji: '🏺' },
  { nombre: 'Piscis', inicio: '19-02', fin: '20-03', emoji: '🐟' },
  { nombre: 'Aries', inicio: '21-03', fin: '19-04', emoji: '🐏' },
  { nombre: 'Tauro', inicio: '20-04', fin: '20-05', emoji: '🐂' },
  { nombre: 'Géminis', inicio: '21-05', fin: '20-06', emoji: '👯‍♂️' },
  { nombre: 'Cáncer', inicio: '21-06', fin: '22-07', emoji: '🦀' },
  { nombre: 'Leo', inicio: '23-07', fin: '22-08', emoji: '🦁' },
  { nombre: 'Virgo', inicio: '23-08', fin: '22-09', emoji: '🌾' },
  { nombre: 'Libra', inicio: '23-09', fin: '22-10', emoji: '⚖️' },
  { nombre: 'Escorpio', inicio: '23-10', fin: '21-11', emoji: '🦂' },
  { nombre: 'Sagitario', inicio: '22-11', fin: '21-12', emoji: '🏹' }
];

// Verificar si un año es bisiesto
function esBisiesto(year) {
  return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

// Verificar si una fecha es válida
function esFechaValida(dia, mes, año) {
  const fecha = new Date(año, mes - 1, dia);
  return fecha.getDate() === dia && fecha.getMonth() === mes - 1;
}

// Convertir string "DD-MM" a Date con año fijo
function parseFechaDM(fechaStr) {
  const [dia, mes] = fechaStr.split('-').map(Number);
  return new Date(2000, mes - 1, dia); // Año fijo para comparación
}

// Obtener signo zodiacal
function obtenerSigno(fechaUsuario) {
  const [dia, mes, año] = fechaUsuario.split('-').map(Number);

  // Validaciones
  if (mes === 2 && dia > 29) {
    return "Fecha inválida: Febrero no tiene más de 29 días.";
  }
  if (mes === 2 && dia === 29 && !esBisiesto(año)) {
    return "Fecha inválida: El año no es bisiesto.";
  }
  if (!esFechaValida(dia, mes, año)) {
    return "Fecha inválida: Día fuera de rango.";
  }

  const fecha = new Date(2000, mes - 1, dia); // Año fijo para comparación

  for (const signo of signos) {
    const inicio = parseFechaDM(signo.inicio);
    const fin = parseFechaDM(signo.fin);

    if (inicio <= fin) {
      if (fecha >= inicio && fecha <= fin) return signo;
    } else {
      if (fecha >= inicio || fecha <= fin) return signo;
    }
  }

  return "Signo no encontrado";
}

// Obtener mensaje de horóscopo
async function obtenerHoroscopo(signo) {
  if (typeof signo === 'string' && signo.startsWith("Fecha inválida")) {
    return signo;
  }

  const mensajes = [
    'Hoy es un buen día para nuevos comienzos.',
    'Ten cuidado con decisiones impulsivas.',
    'La energía cósmica está de tu lado.',
    'Recibirás buenas noticias inesperadas.',
    'Alguien cercano necesita tu apoyo.',
    'Es momento de enfocarte en tus metas.',
  ];
  const aleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
  return `${signo.emoji} ${signo.nombre}: ${aleatorio}`;
}

// Exportación por defecto (para uso como módulo en controlador)
export default {
  obtenerSigno,
  obtenerHoroscopo
};
