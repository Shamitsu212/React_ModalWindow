import styles from "./Button.module.css"

interface ButtonProps {
  label: string
  color?: "green" | "red" 
  onClick: () => void
}

function Button_UI({ label, color = "green", onClick }: ButtonProps) {
  
    const buttonClass = `${styles.button} ${color === "green" ? styles.green : styles.red}`
    const baseClass = `${styles.buttonBase} ${color === "green" ? styles.greenBase : styles.redBase}`

  return (
    <div className={styles.buttonWrapper}>

      <button onClick={onClick} className={buttonClass}>
            {label}
      </button>

      <div className={baseClass} />
    </div>
  )
}

export default Button_UI