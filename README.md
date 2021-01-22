# vue-iview-admin-template

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```
### Lints and fixes files
```
npm run lint
```

---
### Instant Prototyping
```shell
npm install -g @vue/cli @vue/cli-service-global
# or
yarn global add @vue/cli @vue/cli-service-global
```

### vue serve
```shell
Usage: serve [options] [entry]

serve a .js or .vue file in development mode with zero config


Options:

  -o, --open         Open browser
  -c, --copy         Copy local url to clipboard
  -p, --port <port>  Port used by the request (default: 8080 or next available port)
  -h, --help         Output usage information

 # vue serve
 # vue serve MyComponent.vue
```
### vue build
```shell
Usage: build [options] [entry]

build a .js or .vue file in production mode with zero config


Options:

  -t, --target <target>  Build target (app | lib | wc | wc-async, default: app)
  -n, --name <name>      name for lib or web-component (default: entry filename)
  -d, --dest <dir>       output directory (default: dist)
  -h, --help             output usage information

 # vue build MyComponent.vue
```
### vue create
```shell
vue create hello-world

vue create --help

Usage: create [options] <app-name>

create a new project powered by vue-cli-service


Options:

  -p, --preset <presetName>       Skip prompts and use saved or remote preset
  -d, --default                   Skip prompts and use default preset
  -i, --inlinePreset <json>       Skip prompts and use inline JSON string as preset
  -m, --packageManager <command>  Use specified npm client when installing dependencies
  -r, --registry <url>            Use specified npm registry when installing dependencies
  -g, --git [message|false]       Force / skip git initialization, optionally specify initial commit message
  -n, --no-git                    Skip git initialization
  -f, --force                     Overwrite target directory if it exists
  -c, --clone                     Use git clone when fetching remote preset
  -x, --proxy                     Use specified proxy when creating project
  -b, --bare                      Scaffold project without beginner instructions
  -h, --help                      Output usage information
```
### Using the GUI
```shell
vue ui
```

### vue-cli-service serve
```
Usage: vue-cli-service serve [options] [entry]

Options:

  --open         open browser on server start
  --copy         copy url to clipboard on server start
  --mode         specify env mode (default: development)
  --host         specify host (default: 0.0.0.0)
  --port         specify port (default: 8080)
  --https        use https (default: false)
  --public       specify the public network URL for the HMR client
  --skip-plugins comma-separated list of plugin names to skip for this run
```

### vue-cli-service build
```
Usage: vue-cli-service build [options] [entry|pattern]

Options:

  --mode         specify env mode (default: production)
  --dest         specify output directory (default: dist)
  --modern       build app targeting modern browsers with auto fallback
  --no-unsafe-inline build app without introducing inline scripts
  --target       app | lib | wc | wc-async (default: app)
  --formats      list of output formats for library builds (default: commonjs,umd,umd-min)
  --inline-vue   include the Vue module in the final bundle of library or web component target
  --name         name for lib or web-component mode (default: "name" in package.json or entry filename)
  --filename     file name for output, only usable for 'lib' target (default: value of --name),
  --no-clean     do not remove the dist directory before building the project
  --report       generate report.html to help analyze bundle content
  --report-json  generate report.json to help analyze bundle content
  --skip-plugins comma-separated list of plugin names to skip for this run
  --watch        watch for changes
```
### vue-cli-service inspect
```
Usage: vue-cli-service inspect [options] [...paths]

Options:

  --mode    specify env mode (default: development)
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
