# Twitch Rank :crown:

A Node JS library to get the most viewed Twitch streams based on language, country, or category :purple_heart:

## Quick Links

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Example Usage](#example-usage)
- [Methods](#methods)
- [Important Note](#important-note)
- [Disclaimer](#disclaimer)
- [Support](#support)
- [License](#license)

## Prerequisites

[Register an app](https://dev.twitch.tv/docs/authentication/register-app/) on Twitch Developers and get the Client Id and Client secret.

To initialize Twitch Rank you need the Client Id and App Access Token.

To get the App Access Token you must make a POST request using the Client Id and Client Secret like [here](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#client-credentials-grant-flow).

## Getting Started

Install twitch-rank using npm:

```bash
$ npm install twitch-rank
```

## Example Usage

```js
const TwitchRank = require('twitch-rank');

// Initialize Twitch Rank

const Twitch = new TwitchRank({
    clientId: "wbmytr93xzw8zbg0p1izqyzzc5mbiz",
    appAccessToken: "2gbdx6oar67tqtcmt49t3wpcgycthx"
});

// Search for streams that meet the parameters

Twitch.rank({top: 10, language: "en", categoryId: "509658"})
.then(streams => {
    console.log(streams) // [{....},{...},{...}]
});
```

## Methods

### `rank({country: String, language: String, categoryId: String, top: Int})`

**Warning:** You can do all the combinations you want, however you cannot declare `country` and `language` at the same time.

### country: String

solo 4 disponible

You can check the list of countries [here](https://es.wikipedia.org/wiki/ISO_3166-1_alfa-2#Elementos_de_c%C3%B3digo_asignados_oficialmente)

#### Example

```js
Twitch.rank({country: "pe"})
.then(streams => {
    console.log(streams) // [{....},{...},{...}]
});
```

### language: String

The ISO 639-1 two-letter language code is used to establish a language. You can check the list of available languages [here](https://es.wikipedia.org/wiki/ISO_639-1#Lista_idiomas).

#### Example

```js
Twitch.rank({language: "es"})
.then(streams => {
    console.log(streams) // [{....},{...},{...}]
});
```

### categoryId:

A game (category) ID used to filter the list of streams.

#### Example

```js
Twitch.rank({categoryId: "27471"})
.then(streams => {
    console.log(streams) // [{....},{...},{...}]
});
```

### top: Int

por defecto 10 y max 100

#### Example

```js
Twitch.rank({top: 25})
.then(streams => {
    console.log(streams) // [{....},{...},{...}]
});
```

## Important Note

During the creation of the library, I noticed that sometimes the response did not exactly match the `top` parameter. Returning out of 100 transmissions required, only 95 or 98 in the response.

I've investigated and the problem would be from the Twitch API and not from a code error in my library. If you found a solution, you are invited to contribute to this project.

## Disclaimer

This project is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Twitch or any of its subsidiaries or its affiliates. The official Twitch website can be found at https://www.twitch.tv/. "Twitch" as well as related names, marks, emblems and images are registered trademarks of their respective owners.

## Support

If your donation was only $1, you would make this guy very happy

- [Support via PayPal *(Soon...)*](https://www.paypal.com/)

## License

ISC