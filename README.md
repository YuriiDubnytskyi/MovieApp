
# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Start app locally

```bash
# using npm
npm install
npx rnn-link

if for ios
   cd ios && pod install && cd ..
npm start
npm run android or npm run ios

# OR using Yarn
yarn install
npx rnn-link

if for ios
   cd ios && pod install && cd ..
yarn start
yarn android or yarn ios
```


## App structure
```
MovieApp # application root
└── android/ # android application files
└── ios/ # ios application files
└── src/ # application source code
└── package.json
└── ...
└── # rest configuration files (generated and custom)
```

```
src
└── api/ # files related to api config
└── assets/ # fonts, images, icons, translations
└── components/ # common components, bricks to build ui part of application
                # Buttons, Icons, Chips, etc..
└── constants/ # constants which are shared across application
└── helpers/ # generic helpers
└── navigation/ # navigation configs, helpers
└── screens/ # Screens which compose components with logic, bind actions, async operations etc..
```

## App Navigation

In file `App.tsx` runs navigation setup? if we have token then we go to authenticated app otherwise to login screen

```
unauthenticated app
└── login screen
└── registration screen

authenticated app
└── dashboard tab screen
   └── create movie screen
└── movie tab screen
   └── details movie screen
└── profile tab screen 
```
