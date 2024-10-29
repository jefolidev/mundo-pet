import { scheduleDay } from '../modules/schedule/load'

const selectedDate = document.getElementById('search-date')

selectedDate.addEventListener('change', async () => {
  const date = selectedDate.value

  scheduleDay()

  console.log('mudou a data')
})
