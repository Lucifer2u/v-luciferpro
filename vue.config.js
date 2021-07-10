let proxyObj = {};
proxyObj ['/'] = {
    ws:false,
    target:'http://localhost:8081',
    changeOrigin:true,
    pathRewrite:{
        '^/':''
    }
};
proxyObj['/ws'] = {
    ws: true,
    target: "ws://localhost:8081"
};

module.exports={
    devServer:{
        host:'localhost',
        port:8080,
        proxy:proxyObj
    }
}