/**
 * Created by huayu on 2018/4/13.
 */
createLocalStorage = (name, value) =>{
    return localStorage.setItem(name, JSON.stringify(value))
}
RetrieveLocalStorage = (name) =>{
    return localStorage.getItem(name)
}
deleteLocalStorage = (name) =>{
    return localStorage.removeItem(name)
}
export default {
    createLocalStorage,
    RetrieveLocalStorage,
    deleteLocalStorage
}