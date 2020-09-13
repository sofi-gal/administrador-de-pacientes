import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Pacientes = ({citas}) => {


    return ( <Fragment>
            <div className="bg">
   <header>
        <nav className="navbar navbar-dark bg-dark w-100 h-10">
        <img src={require('../img/paw.png')} alt="veterinaria" className="navbar-brand"/>
            <h1 className="my-5 text-light">Administrador de pacientes</h1></nav> 
        </header>
    <div className="container mt-1 py-5">
        <div className="row">
        <div className="col-12 mb-3 d-flex justify-content-center">
            <Link to={'/nueva'} className="btn btn-warning text-uppercase py-2 px-5 font-weight-bold">Crear Cita</Link>
        </div>
        
        <div className="col-md-8 mx-auto">
            <div className="card-group">
                <div className="card border-light bg-light">
                    
                {citas.map(cita => (
                    <Link to={`/cita/${cita._id}`} key={cita._id} className="p-5 w-100 mb-2 text-justify">
                       
                      <h3 className="mb-3 p-2 card-title">{cita.nombre}</h3> 
                        <div className="d-flex w-100 justify-content-between mb-4 p-2">
                            <small className="fecha-alta">
                                {cita.fecha} - {cita.hora}
                            </small>
                        </div>
                        <p className="mb-0 p-2">
                            {cita.sintomas}
                        </p>

                        <div className="contacto py-3 px-2">
                            <p>Dueño: {cita.propietario}</p>
                            <p>Teléfono: {cita.telefono}</p>
                        </div>

                        <div className="contacto py-3 px-2">
                            <p>Tipo de Animal: {cita.tipo}</p>
                            <p>Sexo: {cita.sexo}</p>
                        </div>
                    </Link>
                ))}
                </div>
            </div>
        </div>

        </div>
    </div>
    </div>
    </Fragment>
);
}

export default Pacientes;