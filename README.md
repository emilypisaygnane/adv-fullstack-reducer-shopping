# Reducers

## Demo

https://github.com/alchemy-adv-fullstack/adv-fullstack-reducer-demo/

## Getting Started

Use this repository as a template to get started.

If viewing from Canvas:
https://github.com/alchemy-adv-fullstack/adv-fullstack-reducer-shopping-deliverable/

## Learning Objectives

1. Use reducers to manage state.
   1. Manage objects immutably.
   2. Manage arrays immutably.
2. Connect React events to reducer dispatches.
3. Test reducers.

## Description

This is a retake on an old shopping list application. We need a means of:

1. Adding shopping items to a shopping list.
2. Editing the shopping items.
3. Completing the shopping items.
4. Deleting shopping items from the shopping list.

## Acceptance Criteria

1. CI must be passing (this includes linting and tests).

## Rubric

| Task                                                      | Points |
|-----------------------------------------------------------|--------|
| Use the `useReducer` hook to manage shopping list state   | 2      |
| Use the `useContext` hook to provide global state         | 2      |
| Use a `switch` statement inside of your reducer           | 2      |
| Use the `dispatch` function to update state               | 2      |
| Set an initial value for `useReducer`                     | 2      |
| Items can be added to shopping list through a reducer     | 2      |
| Items can be edited in shopping list through a reducer    | 2      |
| Items can be deleted from shopping list through a reducer | 2      |
| Unit Testing[^1]                                          | 2      |
| Deployed on netlify with CI passing                       | 2      |

[^1]: Unit testing will include a unit test of reducers for adding to shopping
list, deleting from shopping list, editing a shopping list item, and retrieving
a shopping list of items
