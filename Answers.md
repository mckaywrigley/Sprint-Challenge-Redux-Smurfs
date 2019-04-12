1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Spread operator!

1)  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions- actions handle sending the data we want to our component from store.
    Reducers- reducers change the state in response to our actions
    Store- store holds our application state

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is local to the component, while application state can be accessed by any component. If we want state to be reusable, we should use it in application state.

1.  What is middleware?

Middleware is something that happens in the middle of our process. For example, I could create an auth middleware that would check if a user was allowed to view a page before showing that page.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk allows us to write action creators that return functions.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    Connect!
