export function clearInputs() {
  const ownerName = document.getElementById('owner-name')
  const petName = document.getElementById('pet-name')
  const phoneNumber = document.getElementById('phone')
  const serviceDescription = document.getElementById('description')
  const date = document.getElementById('schedule-date')
  const hour = document.getElementById('schedule-hours')

  ownerName.value = ''
  petName.value = ''
  phoneNumber.value = ''
  serviceDescription.value = ''
  date.value = ''
  hour.value = ''
}
