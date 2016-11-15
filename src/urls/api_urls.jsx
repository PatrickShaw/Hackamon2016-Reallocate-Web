const base_url = "https://reallocateplus.herokuapp.com";
function get_unit_url(unit_uuid) {
    return `${base_url}/units/${unit_uuid}`;
}
function get_units_url(){
    return `${base_url}/units`;
}
function get_classes_url(unit_uuid) {
    return `${base_url}/classes?uuid=${unit_uuid}`;
}
export {get_units_url, get_classes_url, get_unit_url};