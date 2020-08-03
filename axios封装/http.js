import axios from 'axios'

const instance = axios.create({
    timeout:10000,
})

instance.interceptors.request.use(config=>{
    config.headers = Object.assign(config.method === 'get'?{
        'Accept':'application/json',
        'Content-Type':'application/json;charset=UTF-8'

    }:{
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
    },config.headers);

    if(config.method === 'post') {
        const contenttype = config.headers['Content-Type'];
        //根据Content-Type 切换data格式
        if(contenttype) {
            if(contenttype.includes('multipart')) { //类型是multipart/form-data;
                //config.data = data

            }else if (contenttype.includes('json')) {
                //类型application/json
                //服务器收到的raw body(原始数据) "{name:"liming",age:"18"}"
                config.data = Json.stringify(config.data)
            }else {
                //类型'application/x-www-form-urlencoded;'
                //服务器收到的数据raw body(原始数据) name=liming&age=18

                //qs是一个npm仓库所管理的包,可通过npm install qs命令进行安装. 
                //1. qs.parse()将URL解析成对象的形式
                //2. qs.stringify()将对象 序列化成URL的形式，以&进行拼接
                config.data = QS.stringify(config.data)
            }
        }
    }
    return Promise.resolve(config)
},error=>{
    //对错误处理
    return Promise.reject(error)
})

//响应拦截器
instance.interceptors.response.use(res=>{
    //对响应数据处理,以下根据结构改动
    const { response_code } = response.data || {}

    if (response_code === '001') {
        //请求超时,即将跳转登录页面
        //const instance  = Toast('请求超时,即将跳转到登录页面');
        // setTimeout(()=>{
        //     instance.close();
        //     window.location.href = '/login'
        // },3000)
    }
    return Promise.resolve(checkStatus(res))
},error=>{
    //对错误处理
    if (error.response) {
        return Promise
    }
})

// 处理错误状态
export function checkStatus (response) {
    const status = response.status || -1000 
    if ((status >= 200 && status <300) || status === 304) {
        //如果http状态码正常,则直接返回数据

        return response.data
    } else {
      let errorInfo = '';
      switch (status) {
          case -1 :
              errorInfo = "远程服务响应失败,请稍后再试";
              break;
          case 400 :
           errorInfo = "400,错误请求";
           break;
           case 401 :
            errorInfo = "401,访问令牌无效或已过期";
            break;
            case 403 : 
            errorInfo = "403,拒绝访问";
            break;
            case 404 :
            errorInfo = "404,资源不存在";
            case 500 :
            errorInfo = "500,访问服务失败";
            break;
            default : 
            errorInfo = "连接错误"
      }
       return {
           status,
           msg:errorInfo
       }
    }
}

