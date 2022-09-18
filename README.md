# Worldcoin snippet for react.js

Sample implementation of Worldcoin by cloud (off-chain, react)

# About Worldcoin

With Worldcoin you can check

・ Confirmation of being human
・ Confirmation that the act is a one-time event

# Getting started

Using flow in staging

1. Metamask login and display the Widget and QR code on the frontend of the web app
2. Authentication with the simulator
   https://simulator.worldcoin.org/
   (In production, iris recognition and a smartphone app are required)
3. Issue an authentication code at the web front desk
4. Authentication code is sent to the Worldcoin server
5. If "success" in the response is "true", authentication is complete.

(supplementation)
If you have not created a action for staging distribution, please access dashboard to create one.

URL: https://developer.worldcoin.org/

# Development

## Installation

```
yarn add @worldcoin/id
```

```
npm install @worldcoin/id
```

## worldcoin-snnipet-react

Simply add a parameter to the WorldIDWidget and you are done.

Please set and use the following values

```
ACTION_ID : obtain this from developer.worldcoin.org
```
