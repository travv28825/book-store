import React from 'react';

const AddAccount = () => (
  <div id="addAcount" className="modal fade bs-example-modal-sm" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-sm">
      <div className="modal-content">
        <div className="form-group form-add-account">
          <input className="form-control" name="username" placeholder="Usuario" />
          <input className="form-control" name="password" placeholder="Contrasena" />
          <select className="form-control" name='rol'>
            <option value="admin">Administrador</option>
            <option value="user">Invitado</option>
          </select>
          <div className="modal-footer">
            <button className="btn btn-primary">Guardar</button>
            <button className="btn btn-danger" type="button" data-dismiss="modal">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export { AddAccount }