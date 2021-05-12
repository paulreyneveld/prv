import styles from '../styles/Home.module.css'

const Music = () => {
    return (
        <div className={styles.container}>
            <h1>Testing</h1>
            <audio src="dw37.mp3" controls />
        </div>
    )
}

export default Music