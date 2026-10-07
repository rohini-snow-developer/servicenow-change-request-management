# Flow Designer - Change Approval

## Flow Name
Change Request Approval Flow

## Trigger
When a Change Request is created or updated.

## Flow Steps

1. Trigger the flow when a Change Request is submitted.
2. Check the Change Type.
3. Check the Risk level.
4. If Risk is High, request approval from the Change Manager.
5. If approved, update the Change State to "Authorized".
6. If rejected, update the Change State to "Rejected".
7. Send an email notification to the requester.
8. Create implementation tasks for the assigned team.

## Approval Logic

### High Risk
Change Manager approval is required.

### Moderate Risk
Assignment Group approval is required.

### Low Risk
Proceed with the standard approval process.

## Automation Benefits

- Reduces manual approval work.
- Provides consistent change processing.
- Automatically updates the change state.
- Sends notifications to relevant users.
- Improves change tracking and control.
