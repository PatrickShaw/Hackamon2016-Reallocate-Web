/**
 * @author Patrick Shaw (Patrick.Leong.Shaw@gmail.com)
 * @date 7/10/2016
 */
const request = require('request');
const express = require('express');
const compression = require('compression');
const app = express();
const server = app.listen(1337);
const react_express = require('express-react-views');
function get_base_url(req) {
    return req.protocol + '://' + req.get('host');
}
app.use(compression());
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', react_express.createEngine({presets: ['react', 'es2015']}));
app.get('/', function(req, res) {
    res.render("./pages/page_login",
        {
            base_url: get_base_url(req)
        }
    );
});
app.get("/login/:username?/:password?", function(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    console.log(username);
    console.log(password);
    request.post("https://allocate.timetable.monash.edu/aplus-2016/rest/student/login",
        {},
        function(error, response, body){
            console.log(body);
            console.log(response.statusCode);
        })
        .form({
            username: username,
            password: password
        })
});
app.get("/home/:student_id?", function(req, res) {
    var student_id = req.query.student_id;
    request.get("https://reallocateplus.herokuapp.com/units",
        {},
        function(error, response, body) {
            console.log(body);
            res.render("./pages/page_units", {
                units: JSON.parse(body),
                student_id: student_id
            });
        });

});