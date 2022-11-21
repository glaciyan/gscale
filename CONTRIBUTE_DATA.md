# How to contribute data

| 🛑 Freshly data mined data is not allowed in gscale, please only create a pull request 2-3 days before the release of that content. |
| ----------------------------------------------------------------------------------------------------------------------------------- |

## Prerequisites

- Your own fork of gscale to create a pull request. To learn about pull requests refer to [this documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models).
- [Git](https://git-scm.com/) or [Github Desktop](https://desktop.github.com/)
- Very simple cmd/terminal knowledge (cd, how to run npm commands)
- [NodeJS](https://nodejs.org) (LTS or later), the npx and npm command from NodeJS is required for the process.
- [pnpm](https://pnpm.io)
- (optional) a text editor with typescript support e.g. [vscode](https://code.visualstudio.com/)

**Normalized names are only allowed to contain the letters a-z and underscores.**

## Add a new material/item

### Normal Item

1. Add a key to `src/lib/data/keys/ItemsKey.ts`
2. Open up the file `src/lib/data/Items.ts`
3. Fill in all the fields

### Item Group

If your item has multiple versions for different rarities do these steps:

1. Do all the steps in adding a Normal Item for each item in the group.
2. Add a key to `src/lib/data/keys/ItemGroupsKey.ts`
3. Open up the file `src/lib/data/ItemGroups.ts`
4. Give the group a generic name as the key and then fill in all the fields.

### Limited Availability

If an Item Group is limited for specific days of the week create an entry in `src/lib/data/ItemAvailability.ts`

## Add a new character

### General Character

1. Add a key to `src/lib/data/keys/CharactersKey.ts`
2. Open up the file `src/lib/data/Characters.ts`
3. Fill in all the fields

### Traveler

1. Add a key to `src/lib/data/keys/TravelersKey.ts`
2. Open up the file `src/lib/data/Travelers.ts`
3. Fill in all the fields

### Register your character

For a character to show up you have to register it in the ViewModel which can be found in `src/lib/viewmodel/CharactersViewModel.ts`.

# Using puuh

Puuh is a custom web crawler to pull data from [genshin.honeyhunterworld.com](https://genshin.honeyhunterworld.com). Puuh will also download the required images.

Follow the installation instructions from [win-clipboard](https://github.com/sindresorhus/win-clipboard).

## Example for Git Bash

> **Warning**
> If you are using Git Bash be sure to use `node.exe`

```bash
node.exe puuh.js c https://genshin.honeyhunterworld.com/eula_051/?lang=EN | clipboard.exe --copy
```
