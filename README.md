# simple-dimmer
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
