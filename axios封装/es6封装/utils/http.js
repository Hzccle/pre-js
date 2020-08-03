import axios from 'axios'

const getBaseUrl = env => {
    let base = {
        production : '/',
        development:'http://localhost:3000',
        test:'http://localhost:3001'
    }[env]
    if(!base) {
        base = '/'
    }
    return base
}

class NewAxios {
    constructor () {
        this.baseURl = getBaseUrl(process.env.NODE_ENV);
        this.timeout = 10000;
        this.withCredentials = true;//配置允许携带凭证 widthCredentials属性设为true。
    }

    request (options) {
        const instance = axios.create();

        const config = {
            ...options,
            baseURl:this.baseURl,
            timeout:this.timeout,
            withCredentials:this.withCredentials
        }
    }

    setInterceptors (instance,url) {
        //请求拦截
      instance.interceptors.request.use(config=>{
          //这里添加loading
         config.headers.AuthorizationToken = localStorage.getItem('AuthorizationToken') || '';
         return config
      },error=>{
          Promise.reject(error)
      })
      //响应拦截器
      instance.interceptors.response.use(response=>{
          //这里移除loading
          //todo:根据业务需求这里要对数据进行处理
      },err=>{
          if (err.response) {
            //   let errMsg = "";
              switch (err.response.status) {
                  case '404' :
                    err.response.errMsg = '请求资源不存在'
                  break;
                  default :
                  err.response.errMsg = '请求连接错误';
                  break;
              }
              return Promise.reject(err.response)
          }
      })
    }
}