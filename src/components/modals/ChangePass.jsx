import React from 'react';

const ChangePass = () => (
  <div id="changePass" className="modal fade bs-example-modal-sm" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-sm">
      <div className="modal-content">
        <div className="form-group form-add-account">
          <input className="form-control" name="current_password" placeholder="Contrasena actual" />
          <input className="form-control" name="new_password" placeholder="Nueva contrasena" />
          <input className="form-control" name="retry_new_password" placeholder="Repetir nueva contrasena" />
          <div className="modal-footer">
            <button className="btn btn-primary">Guardar</button>
            <button className="btn btn-danger" type="button" data-dismiss="modal">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export { ChangePass }

