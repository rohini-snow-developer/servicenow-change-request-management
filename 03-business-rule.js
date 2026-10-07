(function executeRule(current, previous) {

    // Set priority based on risk
    if (current.risk == 'high') {
        current.priority = 1;
    } else if (current.risk == 'moderate') {
        current.priority = 2;
    } else {
        current.priority = 3;
    }

})(current, previous);
