export default ({ app }, inject) => {
  const myApp = {
    appName: 'Monolith',
    appDesc: 'Kadisoka monolith example'
  }
  inject('myApp', myApp)
}
