### About

Quick example project to show the usage of Mapbox and Appcelerator Hyperloop **Why?/Rant** As of the publishing date Appcelerator's documentation on iOS usage of Hyperloop is atrocious and or nonexistant. Mapbox uses dynamic libraries/embedded libraries which not surprisingly is a pinta to get working properly. After hours of guessing and reading over piles of JIRA logs, I was able to get ti.dynamiclib to work correctly with some modifications. There is also no decent example of using delegates, so I added an example so others can get up and running.

### Installation

For giggles I would make sure that you are semi upto date on the libraries. I wrote this on:
Titanium SDK: 6.1.1GA
Hyperloop: 2.1.2

I have already embeded the Mapbox iOS SDK under src (version 3.6), or get it yourself @ https://www.mapbox.com/ios-sdk/

```sh
git it_your_self
```

### Usage

```js
appc run -p ios
```

### License

MIT &copy; 2017 Dee Clawson.
