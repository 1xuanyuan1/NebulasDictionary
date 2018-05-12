import NebPay from 'nebpay'
const nebPay = new NebPay()
const dappAddress = 'n1gtsZhNb5NSDa5xU6c8GZ4Q7SB9Ut2c5Jo'

/**
 *
 * @param {String} callFunction 调用合约的方法
 * @param {Array} param 请求的参数
 * @param {Boolean} needPay 是否需要支付
 */
const api = function (callFunction, param = [], needPay = false) {
  return new Promise((resolve, reject) => {
    const to = dappAddress
    const value = '0'
    const callArgs = JSON.stringify(param)
    /**
     * 如果只查询类的请求 就不需要去支付 直接使用 nebPay 的 simulateCall 即可
     * 如果不是查询类的 需要调用支付接口 使用 nebPay 的 call 调用
     */
    const way = needPay ? 'call' : 'simulateCall'
    nebPay[way](to, value, callFunction, callArgs, {
      listener: (res) => {
        console.log('listener', res)
        try {
          resolve(JSON.parse(res.result))
        } catch (e) {
          reject(res.result)
        }
      }
    })
  })
}

export default {
  // 保存字典内容
  save ({key, content}) {
    return api('save', [key, content], true)
  },
  // 查看字典
  get ({key}) {
    return api('get', [key])
  }
}
