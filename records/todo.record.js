const {pool} = require("../utils/db");
const {v4: uuid} = require('uuid');


class TodoRecord {
    constructor(obj) {

        this.id = uuid();
        this.timeStart = obj.timeStart;
        this.timeEnd = obj.timeEnd;
        this.title = obj.title;
        this.date = obj.date;

    }


    async insert(day) {

        await pool.execute('INSERT INTO `schedule` VALUES(:id, :day, :timeStart, :timeEnd, :title)', {
            id: this.id,
            timeStart: this.timeStart.toString(),
            timeEnd: this.timeEnd.toString(),
            title: this.title,
            day: day,
        })
        return this.id;
    }



    static async show(day) {
        const [results] = await pool.execute('SELECT * FROM `schedule` WHERE `date` = :day ORDER BY `start`;', {
                day,
            }
        );

        return results;

    }


    static async delete(id) {

        await pool.execute('DELETE FROM `schedule` WHERE `id` = :id', {
            id,
        });
    }

}

module.exports = {
    TodoRecord,
}
