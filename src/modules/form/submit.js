import dayjs from 'dayjs'

import { scheduleNew } from '../../services/schedule-new'
import { closeModal } from './modal-handler'

const form = document.querySelector('form')

const inputOwner = document.getElementById('owner-name')
const inputPet = document.getElementById('pet-name')
const inputPhone = document.getElementById('phone')
const inputDescription = document.getElementById('description')
const inputDate = document.getElementById('schedule-date')
const inputHour = document.getElementById('schedule-hours')

const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

inputPhone.addEventListener('input', () => {
  const hasCharactersRegex = /[^0-9()-]+/g
  inputPhone.value = inputPhone.value.replace(hasCharactersRegex, '')
})

inputDate.value = inputToday
inputDate.min = inputToday

inputPhone.onchange = (e) => {
  const content = e.target.value
  var formatted = content.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3')

  inputPhone.value = formatted
}

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  try {
    const scheduleId = new Date().getTime()
    const ownerName = inputOwner.value.trim()
    const petName = inputPet.value
    const description = inputDescription.value.trim()
    const phone = inputPhone.value
    const date = inputDate.value

    const hour = inputHour.value

    scheduleNew({
      scheduleId,
      ownerName,
      petName,
      phone,
      description,
      date,
      hour,
    })

    closeModal()
  } catch (error) {
    alert('Não foi possível fazer o agendamento, por favor, tenta mais tarde.')
    console.log(error)
  }
})
