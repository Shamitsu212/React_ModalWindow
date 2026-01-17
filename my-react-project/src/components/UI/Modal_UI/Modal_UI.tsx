import styles from "./Modal.module.css"

interface ModalProps {
    isOpen: boolean
    onClick: () => void
    content: React.ReactNode
}

function Modal_UI({ isOpen, onClick, content }: ModalProps) {
  

  return (
    <>
        {isOpen && (
            <div 
                className={styles.modalWindow} 
                onClick={onClick}
            >

                <div 
                    onClick ={(e) => e.stopPropagation()}
                    className={styles.modalWindow__Content}
                >
                    {content}
                </div>
      
        </div>
        )}
    </>
    
  )
}

export default Modal_UI