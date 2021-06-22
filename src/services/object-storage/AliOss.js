import OSS from 'ali-oss'
import path from 'path'

export default {
  /**
   * 对象存储 OSS
   * https://help.aliyun.com/document_detail/32070.html?spm=a2c4g.11186623.6.1068.323726fdx3bpUa
   * @param {*} option
   */
  constructor({ region, accessKeyId, accessKeySecret, bucket }) {
    this.region = region
    this.accessKeyId = accessKeyId
    this.accessKeySecret = accessKeySecret
    this.bucket = bucket
  },

  /**
   * create OSS-client
   * @returns OSS
   */
  create() {
    // let client = new OSS({
    //   // yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
    //   region: 'oss-cn-hangzhou',
    //   // 从STS服务获取的临时访问凭证。临时访问凭证包括临时访问密钥（AccessKeyId和AccessKeySecret）和安全令牌（SecurityToken）。
    //   accessKeyId: 'LTAI5tLgfE9FqgxV496e2QVY',
    //   accessKeySecret: 'piuXfItdOO0PX1HFZ9gtlF7RWBB08N',
    //   // 填写Bucket名称。
    //   bucket: 'wan-wan-pan'
    // })

    let client = new OSS({
      region: this.region,
      accessKeyId: this.accessKeyId,
      accessKeySecret: this.accessKeySecret,
      bucket: this.bucket
    })
    return client
  },

  async downloadFile({ ossKey, localPath }) {
    try {
      let client = this.create()

      let result = client.get(ossKey, localPath)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  },

  async uploadFile({ ossKey, localPath }) {
    try {
      let client = this.create()

      let result = client.put(ossKey, path.normalize(localPath))
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  },

  async deleteFile({ ossKey }) {
    try {
      let client = this.create()

      let result = client.delete(ossKey)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  },

  // https://help.aliyun.com/document_detail/111389.html?spm=a2c4g.11186623.6.1109.28151bdbI4SZhl
  async listDir({ dir }) {
    try {
      let client = this.create()

      let result = client.list({
        prefix: dir,
        // 设置正斜线（/）为文件夹的分隔符。F
        delimiter: '/'
      })
      console.log(result)

      result.prefixes.forEach(subDir => {
        console.log('SubDir: %s', subDir)
      })
      result.objects.forEach(obj => {
        console.log('Object: %s', obj.name)
      })
    } catch (error) {
      console.log(error)
    }
  }
}
