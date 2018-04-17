/* Created by huayu on 2018/4/13.*/
//localStorage操作
function createLocalStorage(name, value){
    return localStorage.setItem(name, JSON.stringify(value))
}

function retrieveLocalStorage(name){
    return JSON.parse(localStorage.getItem(name))
}
function deleteLocalStorage(name){
    return JSON.parse(localStorage.removeItem(name))
}
//sessionStorage操作
function createSessionStorage(name, value){
    return sessionStorage.setItem(name, JSON.stringify(value))
}
function retrieveSessionStorage(name){
    return JSON.parse(sessionStorage.getItem(name))
}
function deleteSessionStorage(name){
    return JSON.parse(sessionStorage.removeItem(name))
}



//暴露方法
export default {
    createLocalStorage,
    retrieveLocalStorage,
    deleteLocalStorage,
    createSessionStorage,
    retrieveSessionStorage,
    deleteSessionStorage
}