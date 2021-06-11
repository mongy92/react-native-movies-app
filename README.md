


# react-native-movies-app

A Demo Application using react-query for listing movies and view the movie details.

https://user-images.githubusercontent.com/13261643/121578044-8395c580-ca2a-11eb-943b-ff98bfc74cea.mov


## Used API's

I am using API provided by
https://developers.themoviedb.org/3

 - Upcomming Movies  : `${BASE_URL}/movie/upcomming?api_key=${API_KEY}&page=${page}`
 - Top Rated Movies : `${BASE_URL}L/movie/top_rated?api_key=${API_KEY}&page=${page}`
 - Popular Movies : `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
 - Genres : `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
 - Credits : `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    `



`

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

<p float='left'>
<img src="https://user-images.githubusercontent.com/13261643/121578175-ae801980-ca2a-11eb-9cc2-ab04e8838f53.png"  height="500">
<img src="https://user-images.githubusercontent.com/13261643/121578177-b049dd00-ca2a-11eb-88d6-fd318d1a48a3.png"  height="500">
<p/>


## Screenshots (Android)

<p float='left'>
<img src="https://user-images.githubusercontent.com/13261643/121578219-bb9d0880-ca2a-11eb-805f-8343325bae10.jpeg"  height="500">
<img src="https://user-images.githubusercontent.com/13261643/121578212-b8098180-ca2a-11eb-955e-6532747635c2.jpeg"  height="500">
<p/>


