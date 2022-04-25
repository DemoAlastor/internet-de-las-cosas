import httpClient from "./httpClient"

const END_POINT_USUARIO = "/usuario"
const END_POINT_PETICION = "/peticiones"

const postRegistrar = (usuario) => httpClient.post(`${END_POINT_USUARIO}/registrar`, usuario);
const postLogin = (usuario) => httpClient.post(`${END_POINT_USUARIO}/login`, usuario);
const postLogoff = () => httpClient.post(`${END_POINT_USUARIO}/logoff`);
const getMicro = () => httpClient.get(`${END_POINT_PETICION}/peticionMicro`);

export {
    postRegistrar,
    postLogin,
    postLogoff,
    getMicro
} 