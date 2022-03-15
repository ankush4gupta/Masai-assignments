const express = require("express");
const app = express();
const connect = require("./configs/db")
app.use(express.json());
const Usercontroller = require("./controllers/user.controller");
const batchcontroller = require("./controllers/batch.controller");
const evaluationcontroller = require("./controllers/evaluation.controller");
const studentcontroller = require("./controllers/student.controller");
const submissioncontroller = require("./controllers/submission.controller");

app.use("/user", Usercontroller);
app.use("/batch", batchcontroller);
app.use("/evaluation", evaluationcontroller);
app.use("/student", studentcontroller);
app.use("/submission", submissioncontroller);


app.listen(3008, async () => {
    try {
        await connect()
        console.log("listening port 3008")
    } catch (error) {
        console.log(error.message)
    }
})