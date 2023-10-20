import axios from "axios"

export const apiDomain="https://api.electrozevents.in/api/"

export const appRoutes = {
    // page Routes
    home: '/',
    auction: '/auction',
    team: '/team',
    
    // module Routes
    database: '/database',
    player: '/player',
    playercategury: '/playercategury',
    users: '/users',

    // auth Routes
    authlogin: '',
    authforgetpassword: '/authforgetpassword',
    authotpveryfy: '/authotpveryfy',
}
export const apiRoutes = {
    team:"team/",
    token:"token/",
    player:"player/",
}

export const lsk = {
    authStatus: "authStatus",
    user: "user",
    apiKey: "apiKey",
}

export const appAxios= axios.create({
    baseURL:apiDomain
})