# React Router v6 useParams Hook: Incorrect Usage Outside Route Component

This repository demonstrates a common error when using the `useParams` hook in React Router v6: using it outside of a component rendered by a route.  The example shows how to reproduce the error and the correct way to use the hook.

## Reproduce the Error

The `bug.js` file shows how incorrectly using `useParams` outside a routed component leads to an undefined value.

## Solution

The `bugSolution.js` file provides a corrected version which places `useParams` inside a component that's directly rendered within a route.  This ensures that the route parameters are correctly retrieved.

## How to Run

1. Clone the repository
2. Run `npm install`
3. Run `npm start`