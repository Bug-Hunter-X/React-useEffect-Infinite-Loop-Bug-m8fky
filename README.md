# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying the state within the effect without proper dependency management.

## Bug Description
The `MyComponent` function uses `useState` to track a `count`.  The `useEffect` hook attempts to increment the count every time it runs. However, because the `count` variable is not added to the dependency array (second argument of `useEffect`), the effect is triggered repeatedly, leading to an infinite loop and crashing the React application.

## Bug Solution
The solution adds `count` to the dependency array of the `useEffect` hook. This change ensures the effect only runs when the `count` value changes (which it now does appropriately).  Alternatively, using `setTimeout` with cleanup would prevent it as well.