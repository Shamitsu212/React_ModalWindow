import styles from './App.module.css'

import { useState } from 'react'

import Button_UI from './components/UI/Button_UI/Button'
import Modal_UI from './components/UI/Modal_UI/Modal_UI'
import ModalContent from './components/ModalContent/ModalContent'

function App() {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  function openWindow(){
    setIsOpen(true)
  }

  function closeWindow(){
    setIsOpen(false)
  }

  return (
    <div className={styles.Page}>

      <div className={styles.Page__ButtonContainer}>
        <Button_UI label='Открыть' color='green' onClick={openWindow} />
      </div>

        <Modal_UI isOpen={isOpen} content={<ModalContent />} onClick={closeWindow}/>
    </div>
  )
}

export default App
