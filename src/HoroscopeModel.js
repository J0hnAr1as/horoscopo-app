const signos = [
  { nombre: 'Aries', inicio: '21-03', fin: '19-04', emoji: '♈' },
  { nombre: 'Tauro', inicio: '20-04', fin: '20-05', emoji: '♉' },
  { nombre: 'Géminis', inicio: '21-05', fin: '20-06', emoji: '♊' },
  { nombre: 'Cáncer', inicio: '21-06', fin: '22-07', emoji: '♋' },
  { nombre: 'Leo', inicio: '23-07', fin: '22-08', emoji: '♌' },
  { nombre: 'Virgo', inicio: '23-08', fin: '22-09', emoji: '♍' },
  { nombre: 'Libra', inicio: '23-09', fin: '22-10', emoji: '♎' },
  { nombre: 'Escorpio', inicio: '23-10', fin: '21-11', emoji: '♏' },
  { nombre: 'Sagitario', inicio: '22-11', fin: '21-12', emoji: '♐' },
  { nombre: 'Capricornio', inicio: '22-12', fin: '19-01', emoji: '♑' },
  { nombre: 'Acuario', inicio: '20-01', fin: '18-02', emoji: '♒' },
  { nombre: 'Piscis', inicio: '19-02', fin: '20-03', emoji: '♓' },
];

function obtenerSigno(fecha) {
  const [dia, mes] = fecha.split('-').map(Number);
  const d = dia < 10 ? '0' + dia : dia;
  const m = mes < 10 ? '0' + mes : mes;
  const fechaStr = `${d}-${m}`;

  for (const signo of signos) {
    if (
      (signo.inicio <= fechaStr && fechaStr <= signo.fin) ||
      (signo.inicio > signo.fin && (fechaStr >= signo.inicio || fechaStr <= signo.fin))
    ) {
      return signo;
    }
  }

  return signos[0];
}

async function obtenerHoroscopo(signo) {
  const mensajes = [
    'Hoy es un buen día para nuevos comienzos.',
    'Ten cuidado con decisiones impulsivas.',
    'La energía cósmica está de tu lado.',
  ];
  const aleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
  return `${signo.emoji} ${signo.nombre}: ${aleatorio}`;
}

export default {
  obtenerSigno,
  obtenerHoroscopo,
};
