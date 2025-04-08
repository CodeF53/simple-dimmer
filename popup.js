const brightnessInput = document.getElementById('brightness')

brightnessInput.addEventListener('change', (e) => {
  setBrightness(e.target.value)
})

async function setBrightness(brightness) {
  await browser.storage.local.set({ brightness })
}

async function init() {
  let { brightness } = await browser.storage.local.get('brightness')
  if (!brightness) brightness = 100
  brightnessInput.value = brightness
  setBrightness(brightness)
}

init().catch(console.error)