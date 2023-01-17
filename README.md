# redux-toolkit-projects

This is a hub of different Redux projects I made and still work on. You can find projects with different concepts covered: from store, slices, actions to redux-thunk and RTK Query

### Terminology

#### Basics

Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralised store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur. Redux guides you towards writing code that is predictable and testable, which helps give you confidence that your application will work as expected.

Redux helps you deal with shared state management, but like any tool, it has tradeoffs. There are more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity.
Redux is more useful when:
- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently over time
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people

Redux is a small standalone JS library. Redux can integrate with any UI framework, and is most frequently used with React. React Redux is our official package that lets your React components interact with a Redux store by reading pieces of state and dispatching actions to update the store.

Redux Toolkit - is our recommended approach for writing Redux logic. It contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux application

#### Actions

Action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application. The type field should be a string that gives this action a descriptive name, like "todos/todoAdded".

An action object can have other fields with additional information about what happened. By convention, we put that information in a field called payload.

A typical action object might look like this:

```
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}
```

#### Action Creators

An action creator is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand every time:

```
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
}
```

#### Reducers

A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.

"Reducer" functions get their name because they're similar to the kind of callback function you pass to the Array.reduce() method.

A Redux reducer function is exactly the same idea as this "reduce callback" function! It takes a "previous result" (the state), and the "current item" (the action object), decides a new state value based on those arguments, and returns that new state.

We can say that Redux reducers reduce a set of actions (over time) into a single state. The difference is that with Array.reduce() it happens all at once, and with Redux, it happens over the lifetime of your running app.

Reducers must always follow some specific rules:
- They should only calculate the new state value based on the state and action arguments
- They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
- They must not do any asynchronous logic, calculate random values, or cause other "side effects"

Reducers can use any kind of logic inside to decide what the new state should be: if/else, switch, loops, and so on.


#### Store

The current Redux application state lives in an object called the store.
The store is created by passing in a reducer, and has a method called getState that returns the current state value:

#### Dispatch

The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object. The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value

You can think of dispatching actions as "triggering an event" in the application. Something happened, and we want the store to know about it. Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response.


#### Redux Toolkit

As you've seen, many aspects of Redux involve writing some code that can be verbose, such as immutable updates, action types and action creators, and normalising state. There's good reasons why these patterns exist, but writing that code "by hand" can be difficult. In addition, the process for setting up a Redux store takes several steps, and we've had to come up with our own logic for things like dispatching "loading" actions in thunks or processing normalised data. Finally, many times users aren't sure what "the right way" is to write Redux logic.

That's why the Redux team created toolset for efficient Redux development.

Redux Toolkit contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.
Because of this, Redux Toolkit is the standard way to write Redux application logic. 

### Toolkit Flow

from https://redux-toolkit.js.org/tutorials/quick-start

<img width="848" alt="basic_redux_summary" src="https://user-images.githubusercontent.com/53371076/210534630-976cb97a-4fa8-41f6-8f6e-3fba63ec8ace.png">

### General Flow

![0*igA-RO7ila55cVWb](https://user-images.githubusercontent.com/53371076/212842063-982cd6f7-2596-4cfa-b2b1-338e072ac646.png)

![0*dqzodavE-J3Oz-Ky](https://user-images.githubusercontent.com/53371076/212842073-2291d7eb-36d4-4262-971b-9a9bddb73344.png)
