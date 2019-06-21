1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

JavaScript array methods that do not produce side-effects in our application
are map() concat() and filter(). We use the Object.assign() method to create a new object while
extending the properties of the previous object. The spread operator accomplishes
this as well.


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store in redux is described as the single source of truth because it
houses state and everything that changes within the application is represented
here. The store is a javascript object, and state that lives here cannot be changed directly.
The store is cloned and presented throught the application to make updates to state.

An action is an object with two props - type and payload. These actions are then dispatched
to reducers which will then update the state based on what the action type and
payload created.

A reducer is the function that updates the state in the application. It receives
action cases from actionCreators to handle state changes.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

The application state is global to the application being built. 
The redux store assist in managing the appliction state, and can be accessed anywhere in the app
once it is connected.
The component state lives within the specified component and passes data down via props.

1.  What is middleware?

Middlewares are tools used in programming that intercepts or comes between
each action before it flows to reducers. There can be multiple middlewares which each
can run sequentially and it is added to the store when it is created.
Middleware helps redux to perform asynch opperation and redux is synchronous by default.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-Thunk is a middleware that allows us to make dataflow asynchronous in redux.
Its useful because it helps us to access the action creators to persom asynch API calls.
This gives the thunk (function) access to make dispatch calls from our action-creators.


1.  Which `react-redux` method links up our `components` with our `redux store`?

The connect() function allows the redux store to interact with the react
components. It accept the parameters of mapStateToProps, an actionCreator
and the component being linked.
