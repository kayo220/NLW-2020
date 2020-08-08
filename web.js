// const proffys = [
//     {
//         name: "Kayo Costa",
//         avatar: "https://scontent.fssa6-2.fna.fbcdn.net/v/t1.0-9/36614105_1715980725187939_1452585388643188736_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeH1ac8MGqmLQmuFuTkGuofqfOmULG2jXbB86ZQsbaNdsF8XVx_sMkDU2rmzQJrlyftrRN0t7PZvCkW4RHoM6hDm&_nc_ohc=OHSznPCyEecAX9rOie6&_nc_ht=scontent.fssa6-2.fna&oh=4f9c84ad4d05d02e073edcf7109d285a&oe=5F4D6AA6",
//         whatsapp: "075991645829",
//         bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br><br> Placeat saepe, porro facere cupiditate quas, iste eveniet, apiente vel labore explicabo id reiciendis quaerat obcaecati quis distinctio reprehenderit enim doloremque fuga?",
//         subject:"Programação",
//         cost:"50",
//         weekday: [
//             0
//         ],
//         time_from: [720],
//         time_to: [1220]
//     },
//     {
//         name: "Otávio",
//         avatar: "https://scontent.fssa6-2.fna.fbcdn.net/v/t1.0-9/36614105_1715980725187939_1452585388643188736_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeH1ac8MGqmLQmuFuTkGuofqfOmULG2jXbB86ZQsbaNdsF8XVx_sMkDU2rmzQJrlyftrRN0t7PZvCkW4RHoM6hDm&_nc_ohc=OHSznPCyEecAX9rOie6&_nc_ht=scontent.fssa6-2.fna&oh=4f9c84ad4d05d02e073edcf7109d285a&oe=5F4D6AA6",
//         whatsapp: "075991645829",
//         bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br><br> Placeat saepe, porro facere cupiditate quas, iste eveniet, apiente vel labore explicabo id reiciendis quaerat obcaecati quis distinctio reprehenderit enim doloremque fuga?",
//         subject:"Programação",
//         cost:"50",
//         weekday: [
//             1
//         ],
//         time_from: [720],
//         time_to: [1220]
//     }
// ]


const express = require('express')
const server = express()
const {pageLanding, pageStudy, pageGiveClasses, pageSaveClasses } = require('./src/pages.js')

const numjucks = require('nunjucks')

//configurar numjuck
numjucks.configure("src/views",{
    express: server,
    noCache: true,
})

//configurar arquivos estáticos 
server.use(express.urlencoded({extended : true}))

server.use(express.static("public"))
//rotas
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", pageSaveClasses)

.listen(5500)