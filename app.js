let express = require("express"), app = express();
app.use("/", express.static(__dirname + "/show_love"));

const port = 18888;
app.listen(port, () => console.log(`网站服务器启动,访问地址:http://127.0.0.1:${port}`));
