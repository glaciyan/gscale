<img src="./public/images/svg/logo_label_small.svg" height="75">

# gscale

GScale is a calculator for Genshin Impact, you can calculate the amount of items you need for ascensions and talents.

This project is built using next.js and tailwindcss.

<a href="https://vercel.com?utm_source=gscale&utm_campaign=oss">
<img src="./public/images/powered-by-vercel.svg"
	width="212"
	height="44">
</a>

## Contribute new characters

**Please note that unreleased characters are consired leaks and will not be accepted**

### Add new materials (if required)

1. Put all source images into the `images/materials` folder.
2. For all newly added source image run `yarn images:items:build <path to image>...` to generate optimized images used by the site
3. Create a new object for each item in `data/items.ts` and make sure the name of the object is the same as the image
    - When it's a new item group (common enemy material, etc.): Create a new item group in `lib/MyTypes.ts` and use the `group` prop for the new object

### Add new character

1. Create an image for the character which is 480x300 and put it in `images/characters/card`
    - The characters face should take up about 1/3, or if the image has a lot of effects, 1/4 of the image. The head should also be slighty (somewhere around the golden ratio) to the right
2. Run `yarn images:characters:build <path to added image>` to generate the optimized image
3. Create an image for the character front view (mugshot) in `public/images/characters/mugshot`
    - Note that those images aren't optimized with a command, so keep the image small. The preferred size is 100x100 and under 25kb.
4. Create an object for the character at `data/characters.ts`

## Contribute

Since I am only adding new characters to the website feel free to tackle on any issues. I merge changes through pull requests.

### Pull request

All pull request are first merged with the `dev` branch after a code review. If all tests go well those changes are going to be merged with main at the next major version.
