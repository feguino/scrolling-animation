<p align="center">
 <img style="max-width:100%; object-fit: cover;border-radius: 50px;"  src="https://i.pinimg.com/originals/c7/07/09/c70709908617aba3e569a07f55c0475e.gif" alt="Project logo">
</p>

<h1 align="center">Scrolling Animations</h1>
Scrolling animation it's a short library of CSS and JS that simplify the work of adding animation to the elements of a webpage when they are visible on the viewport when the page is being scrolling down. <a href="https://scrolling-animation.pages.dev/" target="_blank" rel="noopener noreferrer">View the demo.</a>


## Table of Contents
- [About](#about)
- [Getting started](#getting_started)
- [Usage](#usage)
- [Built using](#built_using)
- [Acknowledgments](#acknowledgement)

## About <a name = "about"></a>
Scrolling Animation is a new library that will make your website alive, providing some preset animation that can added to the element of your website with only one data attribute. No need to write a lot of code.

Some important fact of Scrolling Animation Library: 
- Completely personalizable
- Fast laoding time
- Fancy

## Getting Started <a name = "getting_started"></a>

The following instructions will get you a copy of the project and how to run it on your local machine for development and testing purposes. 

### Prerequisites
This library doesn't require dependenpencies or other framework. Just add the required files to your project, then you're ready to go.
 ```
 <div data-scroll="fade-up 1s 0.5s hide">
   <h1>code here...</h1>
 </div>
 ```
 
 ### Installing
1. You can download an offline copy for you project, just by clicking Download zip up above. Then manually add the css and js file to your project. 
2. You can use the CDN links below and include it directly to your project.
 
    The CSS File
     ```
     <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/feguino/scrolling-animation/dist/scroll-animate.css">
     ```

     The Javascript File
     ```
     <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/feguino/scrolling-animation/dist/scroll-animate.js">
     ```

## Usage <a name="usage"></a>
- After downloading files or adding CDN links , Add the data-scroll attribute to any element of your HTML code
  example :
  ```
  <div data-scroll="fade-up 1s 0s hide">
  <h1>code here...</h1>
  </div>
  ```
  
  ## Options <a name="options"></a>

- version 1.0.0 comes with limited options for this library for now for sure
- So How to Edit it ?
  ```
  data-scroll='fade-up 2s 0s hide'
  ```
- in order to work properly you need to add at least one property in the data-scroll attr and that would be the animation behavior like "fade-up , slide-up , blur ... etc "

  Example for one property
  ```
  data-scroll='fade-up'
  ```
- By default animation duration is 1.5 seconds , but if you want to change it you can do it easily by adding second property beside the animation behavior like so:
  ```
  data-scroll='fade-up .5s'
  ```
- If you want to set up a delay for the animation, right after the duration you can assign second property, like so:
  ```
  data-scroll='fade-up .5s .4s'
  ```
- If you want the parent element of the selected element to have over-flow hidden add so element start the animation on it's container only you need to add "hide" beside the duration property , like so:
  ```
  data-scroll='fade-up .5s .4s hide'
  ```
- And thats is for now , more features is coming with upper versions

## Built Using <a name = "built_using"></a>
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - JavaScript
- [Sass](https://sass-lang.com/) - Sass

## Acknowledgements <a name = "acknowledgement"></a>
- Inspiration was by the aos library (animate on scroll)
- [aos](https://michalsnik.github.io/aos/) - Reference "# scroll-Animations"
- [abdoseadaa](https://github.com/abdoseadaa/scroll-animations) - Reference "# scroll-animations"
