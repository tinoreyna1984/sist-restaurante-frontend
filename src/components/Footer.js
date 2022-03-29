import React from "react";
export default function Footer() {
  return (
    <div className="container-fluid">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="https://tinexlab.com/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            TinexLab
          </a>
          <span className="text-muted">&copy; {new Date().getFullYear()}</span>
        </div>

        <ul className="nav col-md-4 justify">
          <li className="ms-3">
            <a
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
              href="https://github.com/tinoreyna1984/sist-restaurante-backend"
            >
              Repo API
            </a>
          </li>
          <li className="ms-3"><a
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
              href="https://github.com/tinoreyna1984/sist-restaurante-frontend"
            >
              Repo React JS
            </a></li>
        </ul>
      </footer>
    </div>
  );
}
