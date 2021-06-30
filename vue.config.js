module.exports = {
    //  写自己想要配置的东西去覆盖系统自带的
    // 关闭ESLint的规则
    lintOnSave: false,
    // 代理 
    devServer: {
        //disableHostCheck: true,
        proxy: {
            "/api": {
                //转发的目标服务器地址
               // target: "http://182.92.128.115",
                  target:"http://39.98.123.211"
                 
                  
                //是否把路径中的api去掉替换成空串，要看接口api
                // pathRewrite:{"^/api":""}
            }
        }
    },
}