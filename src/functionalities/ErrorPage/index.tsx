import { useEffect } from "react";
import styles from "./style.module.css";

type Props = { title: string };

function index({ title }: Props) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className={`container-fluid ${styles.errorBackground}`}>
      <div className="row">
        <div className="col-12 text-center d-flex flex-column justify-content-center align-items-center">
          <div className="mt-5 pt-5" style={{ color: "white" }}>
            <h1>404</h1>
            <h2>¡Ups!, Esta página no existe</h2>
            <h3>Si crees que es un error, contacta con el administrador</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
