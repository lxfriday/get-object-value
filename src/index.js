/**
 * 安全的从对象的深层次获取值
 * @param obj {object} 目标对象
 * @param keys {array} 逐层 key 的数组
 * @param defaultRet {any} 没找到或者报错的默认返回
 * @returns {*|Array|Array}
 */
function secureGetValue(obj, keys, defaultRet = []) {
  try {
    if (!keys.length) return obj || defaultRet
    return secureGetValue(obj[keys.shift()], keys, defaultRet)
  } catch (e) {
    return defaultRet
  }
}

module.exports = secureGetValue
