const duration = null
const onDurationEnd = null
const hide = () => SplashScreen.hide()
const show = () => SplashScreen.show()
export const globalOptions = {
  name: "tahweela_37777",
  url: "https://tahweela_37777.botics.co",
  api: "https://tahweela_37777.botics.co/api/v1"
}

export const modulesOptions = {
  "@modules/app-menu": {
    copy: "Routes available!"
  },
  "@modules/splash": {
    duration: duration,
    onDurationEnd: onDurationEnd,
    hide: hide,
    show: show
  }
}
