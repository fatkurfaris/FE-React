import styles from "./styles.module.css"

export default function Header({text}){

return (
    <div className={styles.header}>
        <h1 className={styles.text1}>{text}</h1>
    </div>
    )
}