import { clearInputs } from '../../utils/clear-inputs'

const newSchedeuleBtn = document.getElementById('new-schedule')

const modalWrapper = document.getElementById('modal-wrapper')
const modal = document.getElementById('modal-body')

newSchedeuleBtn.onclick = () => {
  modalWrapper.classList.remove('invisible')
}

modalWrapper.addEventListener('click', (e) => {
  if (!modal.contains(e.target)) {
    modalWrapper.classList.add('invisible')
    clearInputs()
  }
})

export function closeModal() {
  modalWrapper.classList.add('invisible')
}
