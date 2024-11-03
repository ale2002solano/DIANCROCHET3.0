import React, { useEffect, useState } from 'react';
import { User } from '@interfaces/user';
import { fetchUser, updateUser } from '@services/UserEdit/useredit';
import { ActualizarUser } from '@interfaces/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave, faTimes, faLock } from '@fortawesome/free-solid-svg-icons';

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState<ActualizarUser>({
    Nuevo_nombre: '',
    Nuevo_apellido: '',
    Nuevo_genero: '',
    Nuevo_telefono: '',
    Nuevo_fechaNacimiento: ''
  });

  useEffect(() => {
    const loginResponse = JSON.parse(localStorage.getItem('loginResponse') || '{}');
    const correo = loginResponse.query_result?.CORREO || '';

    if (!correo) {
      console.error("Correo no encontrado en el almacenamiento local.");
      return;
    }

    const loadUser = async () => {
      const userData = await fetchUser(correo);
      if (userData) {
        setUser(userData);
        setFormData({
          Nuevo_nombre: userData.nombre,
          Nuevo_apellido: userData.apellido,
          Nuevo_genero: userData.genero,
          Nuevo_telefono: userData.telefono,
          Nuevo_fechaNacimiento: userData.fecha_nacimiento
        });
      }
    };

    loadUser();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSave = async () => {
    if (!user) return;

    const updatedUser = await updateUser(user.correo, formData);
    if (updatedUser) {
      setUser(updatedUser);
      setEditing(false);
      window.location.reload(); // Recarga la página después de guardar
    } else {
      console.error("No se pudo actualizar la información del usuario.");
    }
  };

  const handleCancel = () => {
    setEditing(false);
    if (user) {
      setFormData({
        Nuevo_nombre: user.nombre,
        Nuevo_apellido: user.apellido,
        Nuevo_genero: user.genero,
        Nuevo_telefono: user.telefono,
        Nuevo_fechaNacimiento: user.fecha_nacimiento
      });
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg w-[711px] mx-auto space-y-4 shadow-lg">
      
      <div className="space-y-4">
        {/* Nombre */}
        <div className="flex items-center">
          <label className="w-32 font-semibold text-gray-700">NOMBRE</label>
          <input
            type="text"
            name="Nuevo_nombre"
            value={editing ? formData.Nuevo_nombre : user?.nombre || ''}
            onChange={handleInputChange}
            disabled={!editing}
            className="flex-1 px-4 py-2 rounded bg-gray-200 text-gray-600 outline-none"
          />
        </div>

        {/* Apellido */}
        <div className="flex items-center">
          <label className="w-32 font-semibold text-gray-700">APELLIDO</label>
          <input
            type="text"
            name="Nuevo_apellido"
            value={editing ? formData.Nuevo_apellido : user?.apellido || ''}
            onChange={handleInputChange}
            disabled={!editing}
            className="flex-1 px-4 py-2 rounded bg-gray-200 text-gray-600 outline-none"
          />
        </div>

        {/* Teléfono */}
        <div className="flex items-center">
          <label className="w-32 font-semibold text-gray-700">TELÉFONO</label>
          <input
            type="text"
            name="Nuevo_telefono"
            value={editing ? formData.Nuevo_telefono : user?.telefono || ''}
            onChange={handleInputChange}
            disabled={!editing}
            className="flex-1 px-4 py-2 rounded bg-gray-200 text-gray-600 outline-none"
          />
        </div>

        {/* Correo */}
        <div className="flex items-center">
          <label className="w-32 font-semibold text-gray-700">CORREO</label>
          <input
            type="text"
            name="correo"
            value={user?.correo || ''}
            disabled
            className="flex-1 px-4 py-2 rounded bg-gray-200 text-gray-600 outline-none"
          />
        </div>

        {/* Contenedor de Fecha de Nacimiento y Género */}
        <div className="flex items-center">
          <label className="w-32 font-semibold text-gray-700">FECHA DE NACIMIENTO</label>
          <div className="flex-1 flex space-x-4 items-center">
            {/* Fecha de Nacimiento */}
            <input
              type={editing ? 'date' : 'text'}
              name="Nuevo_fechaNacimiento"
              value={editing ? formData.Nuevo_fechaNacimiento : user?.fecha_nacimiento || ''}
              onChange={handleInputChange}
              disabled={!editing}
              className="w-48 px-4 flex text-center py-2 rounded bg-gray-200 text-gray-600 outline-none"
            />

            {/* Género */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className="flex items-center space-x-2">
              <label className="font-semibold text-gray-700">GÉNERO</label>
              {editing ? (
                <select
                  name="Nuevo_genero"
                  value={formData.Nuevo_genero}
                  onChange={handleInputChange}
                  className="w-[166px] text-centerflex items-center px-4 py-2 rounded bg-gray-200 text-gray-600 outline-none"
                >
                  <option value="">Seleccionar</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                </select>
              ) : (
                <input
                  type="text"
                  name="Nuevo_genero"
                  value={user?.genero || ''}
                  disabled
                  className="w-[166px] text-center flex items-center px-4 py-2 rounded bg-gray-200 text-gray-600 outline-none"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Botones de Acción */}
      {/* Botones de Acción */}
        <div className="flex justify-start mt-12 space-x-4 ">
          {editing ? (
            <>
              <button
                onClick={handleSave}
                className="flex items-center justify-center border border-gray-500 text-gray-700 px-4 py-2 rounded-full shadow hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faSave} className="mr-2" />
                Guardar
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center justify-center border border-gray-500 text-gray-700 px-4 py-2 rounded-full shadow hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faTimes} className="mr-2" />
                Cancelar
              </button>
            </>
          ) : (
            <div className="space-y-4"> {/* Añadido para hacer un stack de botones */}
              <button
                onClick={() => setEditing(true)}
                className="flex items-center justify-center border border-gray-500 text-gray-700 px-4 py-2 rounded-full shadow hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faEdit} className="mr-2" />
                Editar Informacion
              </button>
              <button
                onClick={() => alert('Función de cambiar contraseña')}
                className="flex items-center justify-center border border-gray-500 text-gray-700 px-4 py-2 rounded-full shadow hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faLock} className="mr-2" />
                Cambiar Contraseña
              </button>
            </div>
          )}
        </div>
    </div>
  );
};

export default UserProfile;
