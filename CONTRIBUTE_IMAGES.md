# How to contribute images

## Prerequisites

- Your own fork of gscale to create a pull request. To learn about pull requests refer to [this documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models).
- [Git](https://git-scm.com/) or [Github Desktop](https://desktop.github.com/)

For optional steps:

- Very simple cmd/terminal knowledge (cd, how to run npm commands)
- [NodeJS](https://nodejs.org) (LTS or later), the npx and npm command from NodeJS is required for the process.

## Character Images

### Cards

1. Crop the desired image to a size of 480x300
   - (preffered) the face of the character should be positioned on the right side and should fill 1/3 of the image height, if the image contains a lot of effects (e.g. Zhongli or Raiden) the face should fill 1/4 of the height
2. Place your cropped image into `src/lib/data/images/characters/card`
3. (optional) Run `npm run make:images` in a command line to build all images into a more optimized version
4. Commit and push your additions into git and create a pull request

### Mugshot / Front-view

1. Place your image into `src/lib/data/images/characters/mugshot`
2. (optional) Run `npm run make:images` in a command line to build all images into a more optimized version
3. Commit and push your additions into git and create a pull request

## Materials

1. Place your image into `src/lib/data/images/materials`
2. (optional) Run `npm run make:images` in a command line to build all images into a more optimized version
3. Commit and push your additions into git and create a pull request
