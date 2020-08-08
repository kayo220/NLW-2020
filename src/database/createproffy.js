module.exports = async function (db, {proffyValue, classValue, classScheduleValues}){
    //promisse
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES(
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)
    const proffy_id = insertedProffy.lastID
    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES(
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
    `)

    const class_id = insertedClass.lastID
    const insertedAllClassSchedules = classScheduleValues.map((scheduleValue)=>{
        return db.run(`
        INSERT INTO class_schedule (
            weekday,
            time_from,
            time_to,
            class_id
        ) VALUES(
            "${scheduleValue.weekday}",
            "${scheduleValue.time_from}",
            "${scheduleValue.time_to}",
            "${class_id}"
        );
    `)
    })
    await Promise.all(insertedAllClassSchedules)
}

