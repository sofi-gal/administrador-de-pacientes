import React, { Fragment } from 'react';
import {Link, withRouter} from 'react-router-dom';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

const Cita = (props) => {
    if(!props.cita) {
        props.history.push('/');
        return null;
        }
 
        //Extraer por props
        const { cita:{ _id, nombre, propietario, fecha, hora, telefono, tipo, sexo, sintomas} } = props;
 
        //Elimina un registro
        const eliminarCita = id => {
          


           Swal.fire({
            title: '¿Estas seguro?',
            text: "Una cita eliminada no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText:'Cancelar'
          }).then((result) => {
            if (result.value) {

                // Alerta de eliminado
              Swal.fire(
                '¡Listo!',
                'La cita ha sido eliminada.',
                'success'
              )

              // Eliminado de la base de datos
              clienteAxios.delete(`/pacientes/${id}`)
              .then(respuesta => {
                  props.guardarConsultar(true);
                  props.history.push('/');
              })
              .catch(error => {
                  console.log(error)
              })
            }
          })
        }
               
    return ( 
    <Fragment>
            <div className="bg">
    <header>
    <nav className="navbar navbar-dark bg-dark w-100 h-10"> <img src={require('../img/paw.png')} alt="veterinaria" className="navbar-brand"/>
        <h1 className="my-5 text-light">Paciente: {nombre}</h1></nav></header> 
    <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-3 d-flex justify-content-center">
            <Link
              to={"/"}
              className="btn btn-warning text-uppercase py-2 px-5 font-weight-bold"
            >
              Volver
            </Link>
          </div>
        
    <div className="container">
        <div className="row">
          <div className=" col-md-8 mx-auto mb-5 card-group">
          <Link to={"/"} key={_id} className="p-5 card border-light">
                      <h3 className="mb-3 p-2 card-title">{nombre}</h3> 
                        <div className="d-flex w-100 justify-content-between mb-4 p-2">
                            <small className="fecha-alta">
                                {fecha} - {hora}
                            </small>
                        </div>
                        <p className="mb-0 p-2">
                            {sintomas}
                        </p>

                        <div className="contacto py-3 px-2">
                            <p>Dueño: {propietario}</p>
                            <p>Teléfono: {telefono}</p>
                        </div>
                        <div className="datos-animal py-3 px-2">
                            <p>Tipo: {tipo}</p>
                            <p>Sexo: {sexo}</p>
                        </div>
                        <div className="d-flex">
                            <button type="button" className="text-uppercase py-2 px-5 font-weight-bold btn btn-danger col" onClick={() => eliminarCita(_id)}>
                                Eliminar 
                            </button>
                        </div>
                    </Link>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
    </Fragment>
    );
}


export default withRouter(Cita);