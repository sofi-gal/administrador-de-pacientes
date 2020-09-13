import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import clienteAxios from '../config/axios';

const NuevaCita = (props) => {

    // Generar state como objeto
    const [cita, guardarCita] = useState({
        nombre: '',
        propietario: '',
        fecha:'',
        hora:'',
        telefono:'',
        tipo:'',
        sexo:'',
        sintomas:''
    });

    // Lea los datos del formulario
    const actualizarState = e => {
        guardarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
      
    }
    // Enviar una petición a la API
    const crearNuevaCita = e => {
        e.preventDefault();

        // Enviar la petición por Axios
        clienteAxios.post('/pacientes', cita)
         .then(respuesta => {

             props.guardarConsultar(true);

             // Redireccionar
             props.history.push('/')
         })

    }


  return (
    <Fragment>
            <div className="bg w-100 h-100">
      <header>
      <nav className="navbar navbar-dark bg-dark w-100 h-10"> <img src={require('../img/paw.png')} alt="veterinaria" className="navbar-brand"/>
        <h1 className="my-5 text-light">Crear Nueva Cita</h1> 
        </nav>
      </header>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link
              to={"/"}
              className="btn btn-warning text-uppercase py-2 px-5 font-weight-bold"
            >
              Volver
            </Link>
          </div>
          <div className="col-md-8 mx-auto">
            <form onSubmit={crearNuevaCita} className="bg-white p-5 bordered">
              <div className="form-group">
                <label htmlFor="nombre">Nombre Mascota</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre Mascota"
                  onChange={actualizarState} required
                />
              </div>

              <div className="form-group">
                <label htmlFor="propietario">Nombre Propietario</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="propietario"
                  name="propietario"
                  placeholder="Nombre Propietario"
                  onChange={actualizarState} required
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  className="form-control form-control-lg"
                  id="telefono"
                  name="telefono"
                  placeholder="Teléfono"
                  onChange={actualizarState} required
                />
              </div>

              <div className="form-group">
                <label htmlFor="fecha">Fecha Turno</label>
                <input
                  type="date"
                  className="form-control form-control-lg"
                  id="fecha"
                  name="fecha"
                  onChange={actualizarState} required
                />
              </div>

              <div className="form-group">
                <label htmlFor="hora">Hora Turno</label>
                <input
                  type="time"
                  className="form-control form-control-lg"
                  id="hora"
                  name="hora"
                  onChange={actualizarState} required
                />
              </div>

              <div className="form-group">
                <label htmlFor="tipo">Tipo de Animal</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="tipo"
                  name="tipo"
                  onChange={actualizarState} required
                />
              </div>
              <div>
              <fieldset>
        <legend>Sexo</legend>
            <input  type="radio"
                  id="sexo"
                  name="sexo"
                  value="Femenino"
                  onChange={actualizarState} required/> Femenino
        <br></br>
            <input  type="radio"
                  id="sexo"
                  name="sexo"
                  value="Masculino"
                  onChange={actualizarState} required/> Masculino
    </fieldset>
              </div>
                

              <div className="form-group mt-3 mb-5">
                <label htmlFor="sintomas">Síntomas</label>
                <textarea
                  className="form-control"
                  name="sintomas"
                  rows="6"
                  onChange={actualizarState}
                ></textarea>
              </div>

              <input
                type="submit"
                className="btn btn-warning mt-3 w-100 p-3 text-uppercase font-weight-bold"
                value="Crear Cita"
              />
            </form>
          </div>
        </div>
      </div>
      </div>
    </Fragment>
  );

};

export default withRouter(NuevaCita);


