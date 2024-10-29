import { scheduleFetchByDay } from '../../services/schedule-by-day'
import { scheduleShow } from './show'

const selectedDate = document.getElementById('search-date')

export async function scheduleDay() {
  const date = selectedDate.value
  const dailySchedules = await scheduleFetchByDay({ date })

  scheduleShow({ dailySchedules })
}
