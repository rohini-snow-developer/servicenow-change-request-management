function onChange(control, oldValue, newValue, isLoading) {

    if (isLoading || newValue == '') {
        return;
    }

    var changeType = g_form.getValue('change_type');
    var risk = g_form.getValue('risk');

    // Emergency changes should have high priority
    if (changeType == 'emergency') {
        g_form.setValue('priority', '1');
        g_form.showFieldMsg(
            'change_type',
            'Emergency change selected. High priority is required.',
            'info'
        );
    }

    // High-risk changes require an implementation plan
    if (risk == 'high') {
        g_form.setMandatory('implementation_plan', true);
        g_form.showFieldMsg(
            'risk',
            'Implementation plan is mandatory for high-risk changes.',
            'info'
        );
    } else {
        g_form.setMandatory('implementation_plan', false);
    }
}
