- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

Prop types classify what type of data is required by a component.
It's important to type check data because it protects against mistakes developers commonly make.

- [ ] Describe a life-cycle event in React?

Mounting phase - constructor, render, and componentDidMount methods are called

Updating Phase - state and props can be updated/ changed. ComponentDidUpdate and render are called.

Unmounting phase - ComponentWillUnmount will remove the component from the DOM

- [ ] Explain the details of a Higher Order Component?

An HOC is a component that receives another component as it's argument. This is useful for components to share funcionality.


- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

inline styling - Can be faster and is right near the element you're styling so it's easy to find

stying with css - Able to run less compiler and have small sections of CSS 

styled components/ css in js - css files arent needed, all styles go at the top of the component.