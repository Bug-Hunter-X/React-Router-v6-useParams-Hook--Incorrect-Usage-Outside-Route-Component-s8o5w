The correct usage requires nesting the component using `useParams` within a route definition from `Routes`:

```javascript
import {Routes, Route, useParams} from 'react-router-dom';

function MyComponent() {
  const params = useParams();
  console.log(params); // params will be defined if within the route component
  return <div>My Component: {params.id}</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/my-component/:id" element={<MyComponent/>}/>
    </Routes>
  );
}
export default App;
```

Now, the `params` object will contain the correct route parameters because `MyComponent` is rendered within a route that matches the URL. Make sure to define the `:id` parameter in your `path` as well.