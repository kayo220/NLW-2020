const Database = require("./db.js")
const createProffy = require("./createproffy.js")
Database.then(async (db) =>{
    //inserir

    proffyValue = {
        name: "Kayo Costa",
        avatar: "https://scontent.fssa6-2.fna.fbcdn.net/v/t1.0-9/36614105_1715980725187939_1452585388643188736_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeH1ac8MGqmLQmuFuTkGuofqfOmULG2jXbB86ZQsbaNdsF8XVx_sMkDU2rmzQJrlyftrRN0t7PZvCkW4RHoM6hDm&_nc_ohc=OHSznPCyEecAX9rOie6&_nc_ht=scontent.fssa6-2.fna&oh=4f9c84ad4d05d02e073edcf7109d285a&oe=5F4D6AA6",
        whatsapp: "075991645829",
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br><br> Placeat saepe, porro facere cupiditate quas, iste eveniet, apiente vel labore explicabo id reiciendis quaerat obcaecati quis distinctio reprehenderit enim doloremque fuga?"
    }
    classValue = {
        subject:2,
        cost:"50",
        //proff id por bd
    }
    classScheduleValues = [{
        weekday: 0,
        time_from: 720,
        time_to: 1220
        //classId por bd
    },
    {
        weekday: 1,
        time_from: 720,
        time_to: 1220
        //classId por bd
    }]


    // await createProffy(db, {proffyValue, classValue, classScheduleValues})
    //consultar
    const selectedProffys = await db.all("SELECT * FROM proffys");
    // console.log(selectedProffys)

     //consultar classes de um determinado professor e seus dados
     const selectedClassesAndProffys = await db.all(`
         SELECT classes.*, proffys.* 
         FROM proffys
         JOIN classes ON (classes.proffy_id = proffys.id)
         WHERE classes.proffy_id = 1;
         `);
    //  console.log(selectedClassesAndProffys)

     const selectClassesSchedules = await db.all(`
         SELECT class_schedule.* 
         FROM class_schedule
         WHERE class_schedule.class_id = "1"
         AND class_schedule.weekday = "0"
         AND class_schedule.time_from <= "420"
         AND class_schedule.time_to > "720"
         ;
         `);
     console.log(selectClassesSchedules)
     
})