import React from "react";
export default function Footer() {
  return (
    <div className="container-fluid">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-6 d-flex align-items-center">
          <ul className="nav col-md-6 justify">
            <li className="ms-3">
              <a
                href="https://tinexlab.com/"
                className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
              >
                TinexLab &copy; {new Date().getFullYear()}
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <ul className="nav col-md-6 justify">
            <li className="ms-3">
              <a
                className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                href="https://github.com/tinoreyna1984/sist-restaurante-backend"
              >
                Repo API
              </a>
            </li>
            <li className="ms-3">
              <a
                className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                href="https://github.com/tinoreyna1984/sist-restaurante-frontend"
              >
                Repo React JS
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
