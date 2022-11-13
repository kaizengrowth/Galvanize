# Educative

React offers several internal Hooks that are ready to use out of the box, such as useState, useEffect, or useContext.

__Custom Hooks__, which are functions in which we can use our own logic

Sunil Pai's image: class components vs. functional components
https://www.educative.io/courses/react-beginner-to-advanced/gklwv4MmqKk

10 hooks. 3 basic: useState(), useEffect() and useContext() 

Additional hooks: 
4. useuseReducer
5. useCallback
6. useMemo
7. useRef
8. useImperativeHandle
9. useLayoutEffect
10. useDebugValue

## useEffect
The name of the useEffect() Hook derives from its intended usage: for side effects.

This function, which we will call the effect function for now, is invoked after each rendering of the component. Since this effect function is called after each render of the component, it is also called after the first render. 

The effect function can optionally return another function. Let’s call this function a Cleanup function. Our cleanup function is not only called during the unmounting of the component but also before each new execution of the effect function.

The second parameter of the useEffect() Hook is the dependency array. The values of this array indicate the values upon which the execution of the effect function depends on. If a dependency array is passed, the Hook is only invoked initially, and then only when at least one of the values in the dependency array has changed.

If we explicitly try to replicate behavior previously covered by componentDidMount(), we can pass an empty array as our second parameter. React then only executes the effect function on the initial render and only calls a cleanup function again during unmount.

## useContext
It allows us to consume data from a Context Provider without having to define a Provider component with a function as a child.

The useContext() Hook is passed a Context object, which you can create by using React.createContext(). It will then return the value of the next higher-up provider in the component hierarchy.

If the value in the Context is changed within the provider, the useContext() Hook will trigger a re-render with the updated data from the provider.

### Consumer?

The ContextExample component receives its data from the pseudo-account data provider: the AccountContext provider. This works without having to wrap an AccountContext.Consumer component around ContextExample. It saves us multiple lines of code in the component itself and leads to a much better debugging experience because the component tree is not as deeply nested as it would be otherwise.

However, this simplification is entirely optional. If you prefer to keep using the well-known Consumer component to access data from a provider, that is completely acceptable.


## example
```
const Counter = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // `document.title` is set with each change (didMount/didUpdate).
    // Given the `value` has changed
    document.title = `The button has been clicked ${value} times.`;

    // Here we're returning our "Cleanup function" which resets the
    // title to the default before each update
    return () => {
      document.title = defaultTitle;
    };

    // Lastly, our dependency array. This way the Effect function
    // is only invoked when the `value` has actually changed.
  }, [value]);

  return (
    <div>
      <p>Counter: {value}</p>
      <button onClick={() => setValue(value + 1)}>+1</button>
    </div>
  );
};
```


# WebDevSimp

## useState

React Hooks must be called in the same order in every component render. Hooks can't be nested inside of if statements, functions, or wrapped inside anything.

useState always gives us an array of two elements: i.e. state, setState.
Destructure useState.
Use function version of setting state if you're passing in value into the next useState function.

If you call a function inside of useState, that function is only run the first time we run the component. However, if you pass in a function to useState, that function will be called every time state changes.

If you use an object inside of your state, setState doesn't merge new state with old state like in class component. Instead, it overwrites. So if you want to keep the old state, you have to merge it with a spread operator: 

```
function decrementCount() {
    setState(prevState => {
      return { ...prevState, count: prevState.count - 1 }
    }) 
  }
```

Instead, you should use multiple hooks for multiple pieces of your state.


## useEffect

The second argument in useEffect specifies that changes in a certain variable will cause the effect to be triggered. 

If the second argument is an empty array, that means useEffect will only be triggered on mount.

To unmount the effect after being called, use a return statement:

```
useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
```

The return statement will act as "clean up". It will run before any other useEffect function is run. This will essentially clean up the last effect.


## useContext

Provider passes down global state data to all child components.