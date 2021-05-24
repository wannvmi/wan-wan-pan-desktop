import OSS from 'ali-oss'

export default {
  initial() {
    let client = new OSS({
      // yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
      region: 'oss-cn-hangzhou',
      // 从STS服务获取的临时访问凭证。临时访问凭证包括临时访问密钥（AccessKeyId和AccessKeySecret）和安全令牌（SecurityToken）。
      accessKeyId: 'LTAI5tLgfE9FqgxV496e2QVY',
      accessKeySecret: 'piuXfItdOO0PX1HFZ9gtlF7RWBB08N',
      stsToken: 'yourSecurityToken',
      // 填写Bucket名称。
      bucket: 'wan-wan-pan'
    })

    return client
  }
}
