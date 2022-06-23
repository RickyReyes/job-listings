# Job Listings

This is a solution to the Job Listings challenge on FrontEndMentor.io.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on selected filters.

## My process

### Built with

- Semantic HTML5 markup
- Sass
- Flexbox
- Mobile-first workflow
- React.js
- Create React App


### What I learned

- Changing one element when another is hovered
```css
.filters--filter:hover > svg {
  background-color: black;
}
```

- Filtering job listings based on selected filters
```js
const jobCards = jobData.filter(job => {
  let cardFilters = [job.role, job.level, ...job.languages, ...job.tools]
  if (filters.length == 0) {
    return job
  } else if (filters.every(filter => cardFilters.includes(filter))) {
    return job
  }
})
```