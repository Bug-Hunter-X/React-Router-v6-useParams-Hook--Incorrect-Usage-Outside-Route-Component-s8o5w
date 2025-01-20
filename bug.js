In React Router Dom v6, a common mistake is incorrectly using the `useParams` hook outside of a component rendered by a route.  This will lead to `undefined` values for your route parameters. For example:

```javascript
// Incorrect usage
function MyComponent() {
  const params = useParams(); //params will be undefined here if not in a route
  console.log(params);
  return <div>My Component</div>;
}
```

This component will always log `undefined` for `params` because `useParams` is only available within components that are rendered as a result of a route match. 