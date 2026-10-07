// GlideRecord Example
// Fetch high-risk change requests

var changeGR = new GlideRecord('change_request');
changeGR.addQuery('risk', '1');
changeGR.query();

while (changeGR.next()) {
    gs.info(
        'Change Number: ' + changeGR.number +
        ' | Description: ' + changeGR.short_description +
        ' | Priority: ' + changeGR.priority
    );
}
