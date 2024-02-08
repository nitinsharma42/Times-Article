import styles from './Loader.module.css'

export default function Loader( { loading} : {loading: boolean}) {
    return (
        loading && (
            <div className={styles.loaderWrapper}>
                <div className={styles.loader}></div>
            </div>
        )
    )
}