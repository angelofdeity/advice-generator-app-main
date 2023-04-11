# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Advice generator app solution](#frontend-mentor---advice-generator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![screenshot](./images/Screenshot%202023-04-11%20at%2015-45-18%20Frontend%20Mentor%20Advice%20generator%20app.png)

### Links

- Solution URL: [github](https://github.com/angelofdeity/advice-generator-app-main)
- Live Site URL: [Live site](https://angelofdeity.github.io/advice-generator-app-main/)

## My process

I decided to start with js this time, as I wanted to be sure I could work with apis first. Then I proceeded to write the html and css.
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow

### What I learned
I learned how to work with apis in javascript.
Ah Im so happy to finally start applying js to my site 😁
```js
// const proudOfThisFunc = () => {
  fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => printslip(data.slip.id, data.slip.advice))
  .catch(error => console.error(error));
// }
```
### Continued development

Not sure yet, but I think I will be working on my css skills.

### Useful resources

Unfortunately I didn't use any resources this time, but I will be sure to add some in the future.

## Author

- Website - [Nico](https://www.lanico.tech)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@angelofdeity](https://www.twitter.com/angelofdeity)

## Acknowledgments

I would like to thank my mentor, my friends and my family for their support and encouragement.🙂
Yes I couldn't do anything without them.😁

