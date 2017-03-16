# Sky-Q

A Node module for interacting with Sky Q boxes. Currently, it has just a single use-case;

* Determine whether a box is powered on or in standby mode

## Install

```
$ npm install --save sky-q
```


## Usage

```js
const SkyQ = require('sky-q');

const box = new SkyQ({ip:'10.10.10.10'})
// Where 10.10.10.10 is the address of the SkyQ box you want to interact with

box.getPowerState().then(isOn=>{
  if (isOn) {
    console.log("The box is on :-)")
  } else {
    console.log("The box is in standby :-(")
  }
}).catch(err=>{
  console.error("Unable to determine power state")
  console.error("Perhaps looking at this error will help you figure out why", err)
})
```

## Acknowledgements

* [Liam Gladdy](https://github.com/lgladdy)


## License

MIT © [Dal Hundal](https://github.com/dalhundal)
