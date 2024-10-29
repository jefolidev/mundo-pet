import { apiConfig } from './api-config'

export async function scheduleNew({
  id,
  ownerName,
  petName,
  phone,
  description,
  hour,
  date,
}) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        ownerName,
        petName,
        phone,
        description,
        hour,
        date,
      }),
    })

    alert('Agendamento realizado com sucesso.')
  } catch (error) {
    alert('Não foi possível agendar, tenta novamente mais tarde!')
    console.log(error)
  }
}
