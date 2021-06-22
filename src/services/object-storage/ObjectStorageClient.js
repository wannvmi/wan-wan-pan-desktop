import AliOss from './AliOss'

export default {
  constructor() {
    this.instance = null
  },

  /**
   * @returns AliOsss
   */
  create({ OssType, accessKey, secretKey, bucket }) {
    switch (OssType) {
      case OssType.AliOss:
        return new AliOss({
          accessKeyId: accessKey,
          accessKeySecret: secretKey,
          bucket
        })

      default:
        throw new Error(`no ${OssType} support`)
    }
  },

  /**
   * @returns AliOsss
   */
  getService() {
    if (!this.instance) {
      throw new Error('没有初始化 app')
    }
    return this.instance
  },

  /**
   *
   * @param OssType OssType
   * @param accessKey accessKey
   * @param secretKey secretKey
   * @param bucket bucket
   */
  changeContext({ OssType, accessKey, secretKey, bucket }) {
    this.instance = this.create({ OssType, accessKey, secretKey, bucket })
  },

  clearContext() {
    this.instance = null
  }
}

export const OssType = {
  AliOss: 1
}
