# CSS Animations

:coffee: coding practice - january 2019

Inspired by the Medium post - [A Guide to CSS Animation](https://codeburst.io/a-guide-to-css-animation-part-1-8777f5beb1f8) by Jhey Tompkins and the book [CSS: The Definitive Guide: Visual Presentation for the Web, 4th Edition](https://www.amazon.com/CSS-Definitive-Guide-Visual-Presentation/dp/1449393195) by Eric A. Meyer and Estelle Weyl

---

**Table of Contents**

1. [Transform](#transform)

1. [Transition](#tranisition)

1. [Keyframes](#keyframes)

1. [Animation](#animation)

---

## Transform

**Translate** - [Sass Code Page](/src/sass/components/_transform.scss) & [Online Example](https://robert-laws.com/practice-jan-2019-css-animations/transform.html)

```css
/* translation functions accepts a length or percentage value */
div {
  translate(100px, 20%);
}

h2 {
  translateX(200em);
}

aside {
  translateY(10%);
}
```

**Scale** - [Sass Code Page](/src/sass/components/_transform.scss) & [Online Example](https://robert-laws.com/practice-jan-2019-css-animations/transform.html)

```css
/* scale functions accept a number value */
section {
  scale(2); /* will scale along the X and Y axes the same value */
}

article {
  scale(3, 0.5);
}

div.picture {
  scaleY(2.5);
}
```

**Rotate** - [Sass Code Page](/src/sass/components/_transform.scss) & [Online Example](https://robert-laws.com/practice-jan-2019-css-animations/transform.html)


Rotation occurs as a flat 2 dimensions without using changing the perspective unless this is specified as with using the perspective() function.

```css
/* rotate functions accept an angle value - degrees, gradians, radians or turns */
div {
  transform: rotate(45deg);
}

h3 {
  transform: rotate(1turn);
}
```

**Perspective** - [Sass Code Page](/src/sass/components/_transform.scss) & [Online Example](https://robert-laws.com/practice-jan-2019-css-animations/transform.html)


Perspective is needed for elements that are transformed in 3D space. Lower numbers result in more extreme perspective versus higher numbers.

Perspective can be applied two ways.

1. As a function within the transform property definition:

1. As a property

```css
/* perspective as a function */
div {
  transform: perspective(200px) rotateX(45deg);
}

/* perspective as a property */
div.pictures {
  perspective: 400px;
}
```

**Transform-Origin** - [Sass Code Page](/src/sass/components/_transform-origin.scss) & [Online Example](https://robert-laws.com/practice-jan-2019-css-animations/transform-origin.html)


```css
/* transform-origin - default behavoir is to rotate an object around it's center */
div {
  transform-origin: 0 100%;
  transform: rotate(45deg);
}
```

**Transform-Style** - [Sass Code Page](/src/sass/components/_transform-style.scss) & [Online Example](https://robert-laws.com/practice-jan-2019-css-animations/transform-style.html)


```css
/* transform-style - either the values flat or preserve-3d */
div {
  transform: perspective(300px) rotateX(25deg);
  transform-style: preserve-3d;
}
```

```css
/* perspective-origin - defining the point where the sight lines convere */
div {
  perspective: 500px;
  perspective-origin: 0 10%;
}
```

## Transition

transition

## Keyframes

basic code example(s)

link to code sample

## Animation

animation