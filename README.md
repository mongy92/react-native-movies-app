# react-native-movies-app

A Demo Application using react-query for listing movies and view the movie details.

## IMPORTANT NOTE

I am using API provided by
https://developers.themoviedb.org/3

## Main technologies used

- React Native
- Typescript
- React Navigation (v5)
- React Query

## Main functionality

- MoviesList contain list of Movies.
- User can scroll with pagination through the movies list
- User can filter movies by (upcoming | top rated | popularity ).
- User can see all the details related to the movie by click on the movie card.

## Prerequisites

- React Native CLI to be installed. You can install it by running the command:

`npm install -g react-native-cli`

- Simulator or emulator to run the app on.

### Installation

First clone the repo using `SSH` or `HTTPS`.
Here's an example using `HTTPS`:

`git clone https://github.com/mongy92/react-native-movies-app.git`

Second run the following command to install project dependencies:

`yarn install`

**in IOS**

You will need to make one more step to install pods dependencies, run the following command in the project directory:

- `cd ios && pod install`

### Run on Device

- run `yarn android` or `yarn ios` to run on device or emulator.

### Run Unit Test

- run `yarn run test` to run all unit test suites.

### Used dependencies

```json
    "@react-native-community/masked-view": "^0.1.11",
    "@react-navigation/native": "^5.9.4",
    "@react-navigation/stack": "^5.14.5",
    "axios": "^0.21.1",
    "moment": "^2.29.1",
    "react": "17.0.1",
    "react-native": "0.64.1",
    "react-native-gesture-handler": "^1.10.3",
    "react-native-reanimated": "^2.2.0",
    "react-native-safe-area-context": "^3.2.0",
    "react-native-screens": "^3.3.0",
    "react-query": "^3.16.1"
```

Also I am using `eslint` and prettier for better code formatting alongside [husky hooks](https://github.com/typicode/husky) to apply linting and formatting before each commit

## Screenshots (IOS)

<p float="left"><a href="https://ibb.co/BC2WfFc"><img src="https://i.ibb.co/x7q92dX/ios1.png" height="400" alt="ios1" border="0"></a>
<a href="https://ibb.co/hZgvvF6"><img src="https://i.ibb.co/pR1ppj7/ios2.png" alt="ios2" height="400" border="0"></a>
</p>

## Screenshots (Android)

<p float="left"><a href="https://ibb.co/3Bgrpxt">
<img src="https://i.ibb.co/3Bgrpxt/android1.jpg" alt="android1" height="400" border="0"></a>

<a href="https://ibb.co/1z6MC1B"><img src="https://i.ibb.co/1z6MC1B/android2.jpg" alt="android2"height="400" border="0"></a>

</p>
