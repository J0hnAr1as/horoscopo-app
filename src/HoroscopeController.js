import HoroscopeModel from '../models/HoroscopeModel.js';

export default function HoroscopeController(estado) {
  estado.botonActivo = false;
  estado.mostrarMensaje = false;
  estado.mensaje = '';

  const validarFecha = (fecha) => {
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    estado.botonActivo = regex.test(fecha);
  };

  const consultarHoroscopo = async (fecha) => {
    estado.botonActivo = false;
    const signo = HoroscopeModel.obtenerSigno(fecha);
    estado.mensaje = await HoroscopeModel.obtenerHoroscopo(signo);
    estado.mostrarMensaje = true;

    setTimeout(() => {
      estado.mostrarMensaje = false;
      setTimeout(() => {
        estado.botonActivo = true;
      }, 1000);
    }, 15000);
  };

  return {
    estado,
    validarFecha,
    consultarHoroscopo,
  };
}
