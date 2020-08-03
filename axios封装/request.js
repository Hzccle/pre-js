const request = async function (options) {
  try {
      const opt = Object.assign({
          method: 'get',
          ifHandleError: true // 是否同意处理接口失败提示
      
        },options)
     //匹配接口前缀 开发环境则通过proxy配置转发请求,生产环境根据实际配置
      opt.baseURL = autoMath(opt.prefix);
      
      const res = await instance(opt)

      if(!res.success && instance(opt.ifHandleError)) {
          //自定义参数,是否允许全局提示错误
          Toast(res.error || '请求处理失败')
      }
      return res;
    } catch (err) {
        if(opt.ifHandleError) {
            //自定义参数,是否允许全局提示错误信息
            Toast(err.msg || '请求处理失败')
        }
        return err
    }
}