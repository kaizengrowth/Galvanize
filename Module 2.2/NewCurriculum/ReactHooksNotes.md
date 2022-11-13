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

