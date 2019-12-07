# PaySuper Payment Form

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-brightgreen.svg)](https://www.gnu.org/licenses/gpl-3.0) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/paysuper/paysuper-js-sdk/issues)
[![Build Status](https://api.travis-ci.org/paysuper/paysuper-payment-form.svg?branch=master)](https://travis-ci.org/paysuper/paysuper-payment-form)
[![codecov](https://codecov.io/gh/paysuper/paysuper-payment-form/branch/master/graph/badge.svg)](https://codecov.io/gh/paysuper/paysuper-payment-form)

##### Do not use this module directly, use [paysuper-js-sdk](https://github.com/paysuper/paysuper-js-sdk) instead. 

PaySuper payment form is a PaySuper-hosted mobile browsers-friendly widget that lets you collect payments with just a few lines of code. Learn more about a [payments flow](https://docs.pay.super.com/docs/payments/quick-start) and [PaySuper Checkout integration](https://docs.pay.super.com/docs/payments/sdk-integration).

![](https://docs.pay.super.com/images/chreckout-form.gif)

|   | PaySuper Service Architecture
:---: | :---
✨ | **Checkout integration.** [PaySuper JS SDK](https://github.com/paysuper/paysuper-js-sdk) is designed to integrate a Checkout Form on a merchant's website or a game client.
💵 | **Frontend for a payment form.** [PaySuper Checkout Form](https://github.com/paysuper/paysuper-payment-form) is a frontend for a sigle-page application with a payment form.
📊 | **Frontend for a merchant.** [PaySuper Dashboard](https://github.com/paysuper/paysuper-dashboard) is the BFF server and frontend to interact with all PaySuper related features for merchants.
🔧 | **API Backend.** [PaySuper Management API](https://github.com/paysuper/paysuper-management-api) is a REST API backend for the [PaySuper Dashboard](https://github.com/paysuper/paysuper-management-server) and the [PaySuper Checkout Form](https://github.com/paysuper/paysuper-payment-form). Public API methods are documented in the [API Reference](https://docs.pay.super.com/api).
💳 | **Payment processing.** [Billing Server](https://github.com/paysuper/paysuper-billing-server) is a micro-service that provides with any payment processing business logic.

***

## Features
* Supports page view and modal view
* Adaptive, cross-browser, mobile friendly
* Designed to loads near instantly on all devices and in all browsers
* Natively multilingual with RTL-langiuages support

## Demo
Try out [the payment sample](https://dashboard.pay.super.com/form-demo) for a [Simple Checkout](https://docs.pay.super.com/docs/payments/#simple-checkout) and a [Products Checkout](https://docs.pay.super.com/docs/payments/#products-checkout).

## Usage
Do not use this module directly, use [paysuper-js-sdk](https://github.com/paysuper/paysuper-js-sdk) instead.

### Development
The package requires `paysuper-dashboard` backend to be served first (`yarn serve:be` to run).
The form itself runs on `http://localhost:4040/` where you will be redirected to 
`http://localhost:8080/order` page. It's provided by `paysuper-dashboard` backend

#### Modal view
Add `modal=true` into request url to run the form in modal view mode:
`http://localhost:8080/order?modal=true`

#### Dev data preset
Add `devPreset=1` into request url to use default development data preset 
(project + products combination): `http://localhost:8080/order?devPreset=1`

### Production
Define mounting place with id `paysuper-payment-form` and attach the form script library
```html
<div id="paysuper-payment-form"></div>
<script src="https://cdn.pay.super.com/payform/latest/paysuper-form.js"></script>
```

### Library URLs
#### Dev version
https://cdn.pay.super.com/payform/dev/paysuper-form.js
Updates automatically when `develop` branch updates

#### Production release
https://cdn.pay.super.com/payform/latest/paysuper-form.js
https://cdn.pay.super.com/payform/v0.22.0/paysuper-form.js
Updates with actual version release (`v*` tag pushed into repo)

## Development

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies into single js-file
```
yarn build
```

### Like `run build` but with dist file size analysis
```
yarn check-size
```

### Run tests
```
yarn test
```

### Run tests for development in watch mode 
```
yarn test:dev
```

### Screenshot testing hint
https://static.protocol.one/paysuper/form/dev/tests/base-button-spec-js-base-button-vue-should-render-content-1-diff.png

Inside `.travis.yml`
`#- set -e` 
vs
`- rclone copy tests/unit/__image_snapshots__/__diff_output__/ :s3://paysuper/form/dev/tests --s3-access-key-id=$S3_ACCESS_KEY --s3-secret-access-key=$S3_SECRET_KEY --s3-endpoint=$S3_HOST`



## Contributing, Feature Requests and Support
If you have an idea of how to improve Ptah or have general feedback, you're welcome to submit a [feature request](../../issues/new?assignees=&labels=&template=feature_request.md&title=).

Chances are, you like what we have already but you may require a custom integration, a special license or something else big and specific to your needs. We're generally open to such conversations.

If you have a question and can't find the answer yourself, you can [raise an issue](../../issues/new?assignees=&labels=&template=support-request.md&title=I+have+a+question+about+%3Cthis+and+that%3E+%5BSupport%5D) and describe what exactly you're trying to do. We'll do our best to reply in a meaningful time.

We feel that a welcoming community is important and we ask that you follow PaySuper's [Open Source Code of Conduct](https://github.com/paysuper/code-of-conduct/blob/master/README.md) in all interactions with the community.

PaySuper welcomes contributions from anyone and everyone. Please refer to [our contribution guide to learn more](CONTRIBUTING.md).
