import { removeSchedule } from '../../services/schedule-remove'
import { scheduleDay } from './load'
const periods = document.querySelectorAll('.periods')

periods.forEach((period) => {
  period.addEventListener('click', async (e) => {
    const mouseTarget = e.target

    if (mouseTarget.classList.contains('remove-item')) {
      const item = e.target.closest('li')
      const id = item.getAttribute('item-id')

      console.log(id)

      if (id) {
        const isConfirm = confirm(
          'Tem certeza que deseja apagar o agendamento?'
        )

        if (isConfirm) {
          await removeSchedule(id)
          scheduleDay()
        }
      }
    }
  })
})
