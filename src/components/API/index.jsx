import axios from 'axios';

const API = axios.create({
    //alterar para o endereço do gateway da sua máquina
    baseURL:'http://192.168.0.104:8082/olympics-medal-table-ms'
});
export default API;