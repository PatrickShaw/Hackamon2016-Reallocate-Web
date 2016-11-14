/**
 * @author Patrick Shaw (Patrick.Leong.Shaw@gmail.com)
 * @date 7/10/2016
 */
const request = require('request');
const express = require('express');
const app = express();
const server = app.listen(1337);
const react_express = require('express-react-views');
const base_url = "http://127.0.0.1:1337";
const main_page_route = "/home/:student_id?";
const main_page_link = base_url + main_page_route;

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', react_express.createEngine({presets: ['react', 'es2015']}));
app.get('/', function(req, res) {
    res.render("./pages/login_page",
        {
            main_page_url: main_page_link
        }
    );
});

app.get(main_page_route, function(req, res) {
    var student_id = req.query.student_id;
    request.get("https://reallocateplus.herokuapp.com/units",
        {},
        function(error, response, body) {
            console.log(body);
            res.render("./pages/unit_page", {
                units: JSON.parse(body),
                student_id: student_id
            });
        });

});