import dayjs from 'dayjs'
import { apiConfig } from './api-config'

export async function scheduleFetchByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules`)

    const data = await response.json()

    const dailySchedules = data.filter((schedule) => {
      return dayjs(date).isSame(
        dayjs(schedule.date).format('YYYY-MM-DD'),
        'day'
      )
    })

    return dailySchedules
  } catch (error) {
    console.log(error)
    alert(
      'Não foi possível fazer a pesquisa dos agendamentos, tente atualizar a página.'
    )
  }
}
