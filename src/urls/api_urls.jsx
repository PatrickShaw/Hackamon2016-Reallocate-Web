const base_url = "https://reallocateplus.herokuapp.com";
function get_units_url(){
    return `${base_url}/units`;
}
function get_home_page_url() {
    return `${base_url}/home`;
}
export {get_units_url};