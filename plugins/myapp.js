export default ({ app }, inject) => {
  const myApp = {
    appName: 'Monolith',
    appDesc: 'Citadel monolith example'
  }
  inject('myApp', myApp)
}
