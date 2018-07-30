import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';

/*
    在rn中，用 fetch 实现网络请求，fetch 同 xmlhttprequest 非常类似，
    是一个非封装程度更高的网络 API，使用起来更简介，因为使用了 promise。

    promise 是一种异步编程的一种解决方案，比传统的解决方案（回调函数和事件），更合理和更强大。
    es6 将其写进语言标准，统一了用法，原生提供了 promise 对象，简单来说就是一个容器，
    里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果，

    promise对象代表一个一步操作，有三种状态：pending（进行中）、resolved（已完成）、rejected（已失败）。

    promise实例生成以后，可以分别指定”完成“和“失败”状态的回调函数，实现方式：链式调用方法。
    fetch使用的就是该特性
    
    语法：
    fetch（参数）
    .then(完成的回调函数)
    .catch(失败的回调函数)

    //opts：一个对象，网络请求的配置，如请求方式等，
    fetch(url,opts)
    .then((response)=>{
        //网络请求成功执行该回调函数，得到相应对象，通过response可以获取请求的数据
        //例如：json、text等

        return response.text();
        //return response.json();
    })
    .then((responseData)=>{
        //处理请求得到的数据
    })
    .catch((error)=>{
        //网络请求失败执行该回调函数，得到错误信息
    })
*/

/*
    外部传入：
    GET请求方式需要从外部传入url。请求成功的回调方法、失败的回调方法
*/


//请求参数转换
const transformParam = (param) => {
    let formArr = [];
    for(let key in param) {
        formArr.push(key + "=" + param[key]);
    }
    let newParam = formArr.join("&");
    return newParam;
};

var GetData ={

    //基于fetch的get方法，只负责下周数据，下载后的处理由回调实现
    getRequest(url, param){
        //构造完整的url
        let aItem = '';
        if(param && Object.keys(param).length > 0) {
            aItem = transformParam(param);
            url += "?" + aItem;
        }
        //配置
        var opts = {
            method:"GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        return (
            fetch(url,opts)
            .then((response) => {
                return response.json();
            })
            .then((responseText) => {
                return responseText;
            })
            .catch((error) => {
                console.log("get请求发生错误: "+error);
            })
        )
    },

    //基于fetch的get方法，只负责下周数据，下载后的处理由回调实现
    postRequest(url, param){
        //配置
        var opts = {
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:JSON.stringify(param)
        }
        
        return(
            fetch(url,opts)
            .then((response) => {
                return response.json();
            })
            .then((responseText) => {
                return responseText;
            })
            .catch((error) => {
                console.log("post请求发生错误: "+error);
            })
        )
    }
};

//导出，用于外部使用工具类
module.exports = GetData;

