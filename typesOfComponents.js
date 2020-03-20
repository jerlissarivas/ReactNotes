# Types of components in React - cheatsheet

## Function component
- [for now] has no state
- has props (`props.something` or `({something})` when accessing it)

```jsx
// function component - traditional
function SomeComponent([props]){
   return(
     <></>
   )
}
```

```jsx
// function component - ES6 way
const SomeComponent = ([props]) => {
   return(
     <></>
   )
}
```

## Class component
- has state (`this.state` when accessing it)
- has props (`this.props` when accessing it)

```jsx
// class component
class SomeComponent{
  state={};
  render(){
     console.log(this.[props])
    return(
      <></>
    )
  }
}
```

- `[props]` is in brackets since component could but it doesn’t have to have them.