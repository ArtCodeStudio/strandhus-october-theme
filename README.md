# Strandhus OctoberCMS Theme

This is a OctoberCMS v1.x Theme build for [Hotel Strandhus](https://hotel-strandhus.de/).

![Screenshot](https://user-images.githubusercontent.com/1073989/141113748-f2c4b07d-373f-4133-bf9b-8fac2c1ad8b2.png)

## Build

Install Node.js with [NVM](https://github.com/nvm-sh/nvm).

After this install yarn 3 with `npm install -g yarn@berry`.

Clone this repository with it's submpdules:

```bash
git clone --recurse-submodules -j8 https://github.com/ArtCodeStudio/strandhus-october-theme.git
cd strandhus-october-theme
```

If you have already cloned out this repository without the submodules, you can also clone the submodules later:

```bash
git submodule update --init
```

After this you need to install the dependencies:

```bash
yarn install
```

Now you can build the theme with:

```bash
yarn run build
```

## Development

Instead of build the theme each time you have changed something you can watch the theme with:

```bash
yarn run watch
```
