function ProfileDropDown() {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="flex items-center gap-3 rounded-lg px-3 py-2
                 transition-colors hover:bg-base-300"
      >
        <div className="flex flex-col items-end gap-1">
          <span className="text-sm font-semibold text-base-content">Teste</span>

          <span className="badge badge-primary badge-outline badge-sm">
            Administrador
          </span>
        </div>

        <div className="avatar">
          <div className="w-10 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
            <img
              alt="Foto de perfil"
              src="https://i.pinimg.com/736x/1a/c6/92/1ac692f122a35887b2657d66f2cbd50a.jpg"
            />
          </div>
        </div>

        <span className="text-xs text-base-content/60">▼</span>
      </div>

      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content
                 bg-base-200 rounded-box z-10 mt-3
                 w-52 p-2 shadow-lg border border-base-300"
      >
        <li>
          <a className="text-sm">Perfil</a>
        </li>
        <li>
          <a className="text-sm">Configurações</a>
        </li>
        <li>
          <a className="text-error text-sm">Logout</a>
        </li>
      </ul>
    </div>
  );
}

export default ProfileDropDown;
