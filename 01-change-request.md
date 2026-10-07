# Change Request Configuration

## Change Request Form

The Change Request form contains the following fields:

| Field | Type | Purpose |
|---|---|---|
| Number | Auto Number | Unique change request number |
| Short Description | String | Brief description of the change |
| Description | String | Detailed change information |
| Requested By | Reference | User requesting the change |
| Assignment Group | Reference | Team responsible for the change |
| Assigned To | Reference | Person responsible for implementation |
| Change Type | Choice | Standard, Normal, Emergency |
| Risk | Choice | Low, Moderate, High |
| Impact | Choice | Low, Moderate, High |
| Priority | Choice | Change priority |
| Planned Start Date | Date/Time | Planned implementation start |
| Planned End Date | Date/Time | Planned implementation end |
| Implementation Plan | HTML/Text | Steps required to implement the change |
| Backout Plan | HTML/Text | Steps to reverse the change |
| Test Plan | HTML/Text | Testing required after implementation |
| Approval | Choice | Approval status |
| State | Choice | Change lifecycle state |

## Change Types

### Standard Change
A pre-approved, low-risk and frequently performed change.

### Normal Change
A change that requires assessment and approval before implementation.

### Emergency Change
A change required urgently to resolve a critical issue or business impact.

## Change States

1. New
2. Assess
3. Authorize
4. Scheduled
5. Implement
6. Review
7. Closed

## Objective

The form is designed to capture all important information required to assess, approve, schedule and implement a change in a controlled manner.
