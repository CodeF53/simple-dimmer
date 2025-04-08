const style = document.createElement('style')
document.head.appendChild(style)
function setBrightness(brightness) {
  style.innerText = `:root { filter: brightness(${brightness}%); }`
}

browser.storage.onChanged.addListener((changes, area) => {
  if (area === 'local' && 'brightness' in changes)
    setBrightness(changes.brightness.newValue)
})

browser.storage.local.get('brightness')
  .then(r => setBrightness(r))
