const periodMorning = document.getElementById('morning-period')
const periodAfternoon = document.getElementById('afternoon-period')
const periodNight = document.getElementById('night-period')

export async function scheduleShow({ dailySchedules }) {
  try {
    periodMorning.innerHTML = ''
    periodAfternoon.innerHTML = ''
    periodNight.innerHTML = ''

    dailySchedules.forEach((schedule) => {
      const item = document.createElement('li')

      const itemHeader = document.createElement('div')
      itemHeader.classList.add('schedule-title')

      const time = document.createElement('span')

      const names = document.createElement('div')
      names.classList.add('schedule-name')
      const ownerName = document.createElement('span')
      const petName = document.createElement('p')

      const description = document.createElement('span')
      description.classList.add('schedule-description')

      const removeItem = document.createElement('p')
      removeItem.id = 'remove-item'

      item.setAttribute('item-id', schedule.id)
      time.textContent = schedule.hour

      const ownerNameSplited = schedule.ownerName.split(' ')[0]
      ownerName.textContent = ownerNameSplited
      petName.textContent = ` / ${schedule.petName}`

      description.textContent = schedule.description
      removeItem.textContent = 'Remover agendamento'
      removeItem.classList.add('remove-item')

      names.append(ownerName, petName)
      itemHeader.append(time, names)
      item.append(itemHeader, description, removeItem)

      const hour = schedule.hour.split(':')

      if (hour[0] <= 12) periodMorning.appendChild(item)
      else if (hour[0] > 12 && hour[0] <= 18) periodAfternoon.appendChild(item)
      else periodNight.appendChild(item)
    })
  } catch (error) {
    console.log(error)
    alert('Não foi possível exibir os agendamentos.')
  }
}
