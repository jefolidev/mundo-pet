import { apiConfig } from './api-config'

export async function removeSchedule(id) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
      method: 'DELETE',
    })

    alert('Agendamento removido do sistema.')
  } catch (error) {
    console.log(error)
    alert('Não foi possível remover o agendamento.')
  }
}
