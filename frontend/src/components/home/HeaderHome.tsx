function Header() {
  return (
    <div className="navbar bg-base-200 border-b border-base-300 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle hover:text-primary"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="text-sm">Dashboard</a>
            </li>
            <li>
              <a className="text-sm">Ordens de Serviço</a>
            </li>
            <li>
              <a className="text-sm">Técnicos</a>
            </li>
            <li>
              <a className="text-sm">Clientes</a>
            </li>
            <li>
              <a className="text-sm">Parâmetros</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl font-bold">
          <span className="font-mono">Queue</span>
          <span className="text-primary font-mono">Hub</span>
        </a>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center gap-3 rounded-lg px-3 py-2
                 transition-colors hover:bg-base-300"
          >
            <div className="flex flex-col items-end gap-1">
              <span className="text-sm font-semibold text-base-content">
                Teste
              </span>

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
              <a  className="text-sm">Perfil</a>
            </li>
            <li>
              <a  className="text-sm">Configurações</a>
            </li>
            <li>
              <a className="text-error text-sm">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
