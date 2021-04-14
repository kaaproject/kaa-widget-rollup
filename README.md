# Kaa Custom Widget Rollup

This is basic template that help you to build [Custom widget](https://docs.kaaiot.io/KAA/docs/current/Features/Visualization/WD/Custom-widgets/) for 
[KaaIoT platform](https://www.kaaproject.org/). This example next features:

* Built with [Rollup](https://rollupjs.org/guide/en/)
* [React.js](https://reactjs.org/) as the primary UI library
* [@kaaiot/services](https://www.npmjs.com/package/@kaaiot/services) to communicate with KaaIoT rest API

## Prerequisites

* Access to KaaIoT UI. You can [create a free cloud account](https://www.kaaproject.org/free-trial) if you don't have one.
* [Node.js](https://nodejs.org/en/) > 15 or [nvm](https://github.com/nvm-sh/nvm)
* npm

## Up and running

Clone this repo:

```sh
git clone https://github.com/kaaproject/kaa-widget-webpack.git
```

If you have nvm:

```sh
nvm install

# Next time for new terminal session
nvm use
```

Install dependencies:

```sh
npm i
```

Run development mode:

```sh
npm start
```

Login into any running KaaIoT [Web Dashboard](https://docs.kaaiot.io/KAA/docs/latest/Features/Visualization/WD/) UI and create a new widget from `Custom widgets` page.

To make a production build:

```sh
npm run build
```

Production build compiles to `dist/index.js`. You can upload this file into running KaaIoT platform using Web Dashboard UI