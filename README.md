# Koi Memory Game

## Live Link:
- 

## Description
- Koi themed memory card game with hand drawn art for the playing cards

## Purpose of Building This:
- I built a similar project at the beginning of the year when I was still building my React skills. I wanted to see how much I could build on my own now by recreating it and trying to rely less on it.

## Challenges I Faced:
- When trying to iterate through the emojis and show the grid, I ran into an error where the icons weren't rendering. That was because I needed to not only pass the card but also a unique identifier.
- I had to look back a bit for the logic of the game because I'm still working on the states and working with functions

## Things I Learned:
- using "display: grid" to turn the memory game emotes into grids.
- 1fr represents 1 fractional units
- Justify content center controls alignment along the main axis in a row (left-to-right) while align items aligns items along the cross axis (top to bottom) when you change the flex direction. Justify content and align items swap axis.
- transform-style: preserve 3d means that the child should be rendered in a 3d space vs 2d
- setTimeout -- another ReactJS hook I dono't usually work with. It's purpose is the capture the value of the component state at the moment the timer was initated. If the state changes while the timer is ticking -- the timeout function won't see the update
## Things I'm Proud Of:
- Working with passing props back and forth between components.
- I also enjoyed customizing the components and becoming increasingly familiar with css
