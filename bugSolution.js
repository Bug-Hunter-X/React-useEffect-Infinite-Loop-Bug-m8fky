```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Update every 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```