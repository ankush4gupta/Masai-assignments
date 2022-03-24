const app = require("./index");
const connect = require("./configs/db");

app.listen(3008, async () => {
    await connect();
    console.log("listnig on port 3008");
})

