# UI Policy Configuration

## Policy Name
High Risk Change Policy

## Table
Change Request

## Condition
Risk is High

## UI Policy Actions

| Field | Mandatory | Visible | Read Only |
|---|---|---|---|
| Implementation Plan | Yes | Yes | No |
| Backout Plan | Yes | Yes | No |
| Test Plan | Yes | Yes | No |

## Purpose

When the Risk of a Change Request is set to High, the Implementation Plan, Backout Plan and Test Plan fields become mandatory.

This helps ensure that high-risk changes have proper planning and rollback information before approval.
