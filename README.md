# Simple Dimmer
[![Get the add-on](https://extensionworkshop.com/assets/img/documentation/publish/get-the-addon-178x60px.dad84b42.png)](https://addons.mozilla.org/en-US/firefox/addon/simple-dimmer/)

Unlike other dimming extensions, this dims the entire website, including video!
This so you can watch youtube, netflix, and more late at night!

The extension provides a very simple slider when you click it's icon so you can adjust the website's brightness

## development stuff
install [web-ext](https://github.com/mozilla/web-ext)
```bash
bun i -g web-ext
bun pm trust -g -all
```

to debug extension
```bash
web-ext run
# or if you're using a firefox fork
web-ext run --firefox zen-browser
```

to build
```bash
web-ext build
```
