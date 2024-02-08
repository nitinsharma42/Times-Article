import styles from "./Loader.module.css";

export default function Loader({ loading }: { loading: boolean }) {
  return loading && <div className={styles?.loader} data-testid="loader"></div>;
}
