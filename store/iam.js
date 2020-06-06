export const state = () => ({
  terminalId: '',
  accountIdentifier: '',
  accessToken: '',
  userInfo: null
})

export const mutations = {
  startTerminalRegistration(state, { terminalId, accountIdentifier }) {
    state.terminalId = terminalId
    state.accountIdentifier = accountIdentifier
  },
  storeAccessToken(state, accessToken) {
    state.accessToken = accessToken
  },
  terminateSession(state) {
    state.terminalId = ''
    state.accountIdentifier = ''
    state.accessToken = ''
    state.userInfo = null
  },
  updateUserInfo(state, userInfo) {
    state.userInfo = userInfo
  }
}
