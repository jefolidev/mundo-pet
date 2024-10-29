import dayjs from 'dayjs'
import { scheduleDay } from './schedule/load'

document.addEventListener('DOMContentLoaded', () => {
  const selectedDate = document.getElementById('search-date')

  selectedDate.min = dayjs(new Date()).format('YYYY-MM-DD')
  selectedDate.value = dayjs(new Date()).format('YYYY-MM-DD')
  scheduleDay()
})
