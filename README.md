# Deviget test

This project is a solution according to the specifications of [this](https://github.com/deviget/Front-end) repository, is a SPA (single page application) generated with [create-react-app](https://github.com/facebook/create-react-app) and wrote with Typescript, using technologies like redux and redux toolkit as state manager, Material UI for styles, Axios for HTTP calls and React Router.

## Requeriments

```
* NodeJS
* Yarn as a package manager
```

## Installation

```
* git clone https://github.com/rcanessa89/deviget.git
* cd deviget
* yarn install
```

## Usage

```
* yarn start
```

## Delivery

* Built with ReactJS ✅
* Using Redux ✅
* Showing the model data (title, author, entry date, thumbnail, number of commnets, and unread status) ✅
* Full-size picture ✅
* Pagination ✅
* Indicator of unread/read post, the readed posts turn gray and is saved in local storage ✅
* Dismiss Post Button ✅
* Dismiss All Button ✅
* Support split layout ✅
* Responsive design ✅

##### NOTE: These requirements are out of the scope, is not a native mobile application

- Saving pictures in the picture gallery ❌
- App state-preservation/restoration ❌

## Decisions taken and important notes
- Use Typescript to implement type checking in the build time
- Use memorization technic to avoid unnecessary re-renders
- Separation of the components by smart and dumb category (as much as possible)
- Use Redux Toolkit to reduce the redux boilerplate code
- Use function component to keep the code simple
