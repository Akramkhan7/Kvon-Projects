import db from '../config/db.js';

export const createTask = async(req, res) =>{
    const {title, description, adminId} = req.body;

    const insertTask = ` INSERT INTO tasks (title, description, created_by)
    VALUES (?, ?, ? )`;

    db.query(insertTask[title,description,adminId], (err, res)=>{
        if(err)  return res.status(500).json(err);

        const taskId = res.insertId;

        db.query("SELECT id FROM users WHERE role = 'user'", (err, res)=>{
              if (err) return res.status(500).json(err);

              users.forEach(element => {
                db.query("INSERT INTO task_status(task_id, user_id) VALUES(?, ?)", [taskId,user.id]);
              });
                res.json({ message: "Task created and assigned to all users ✅" });
        })

    })
}