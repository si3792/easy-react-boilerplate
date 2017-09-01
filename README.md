# easy-react-boilerplate
Boilerplate project, built on top of create-react-app. Includes Redux, Sass and ESLint configuration for linting.

## Scripts

* `npm run start` - Starts the development server
* `npm run test` - Starts the tests
* `npm run build` - Creates production build
* `npm run prod` - Serves the production build


## Good project structure

```
src/
    index.js
    core/   <- A place for common components, e.g: image, button, etc
    modules/  <- Features
        ...
        ...
        todos/  <- A feature module
            components/   <- Presentational components
            containers/   <- Smart components
            actions.js    <- Action Creators
            reducers.js   <- Updates for the state
            selectors.js  <- Queries for the state
            constants.js
            index.js      <- The public API of the module

```

### Example index.js for a feature module:

```
import * as actions from './actions';
import * as components from './components';
import * as containers from './containers';
import * as constants from './constants';
import reducers from './reducers';
import * as selectors from './selectors';

export default { actions, components, containers, constants, reducers, selectors };
```


## TODO

* Add react-router with simple configuration
* Refactor project structure