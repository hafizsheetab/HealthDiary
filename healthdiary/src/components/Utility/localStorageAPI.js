exports.setToken=(token)=>{
   localStorage.setItem('token',token)
}
exports.getToken = () => {
    
   return localStorage.getItem('token')
}
exports.setUser = (user) => {
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user))
}
exports.getUser = () => {
    console.log(localStorage.getItem('user'));
    return JSON.parse(localStorage.getItem('user'))
}