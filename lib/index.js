const React = require('react');
const ReactDOM = require('react-dom');
const { BrowserRouter, StaticRouter } = require('react-router-dom');
const { renderRoutes } = require('react-router-config');
const { Provider} = require('react-redux');
const storeCreator = require('./storeCreator');

class PieDom {
  static render(domId, routes, reducer, saga) {
    let initialState = {};
    if(typeof window !== 'undefined'){
      initialState = window.__PIE_REDUX__;
    }

    const store = storeCreator(reducer, saga, initialState);
    store.runSaga(saga);
    const html = (
      <Provider store={store}>
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
      </Provider>
    );

    ReactDOM.render(
      html,
      /* eslint-disable */
      document.getElementById(domId)
      /* eslint-enable */
    );
  }

  static generateServerHtml(ctx, routes, reducer, saga) {
    const store = storeCreator(reducer, saga);
    let context = {};
    return {
      html: (
        <Provider store={store}>
          <StaticRouter
            location={ctx.request.url}
            context={context}
          >
            {renderRoutes(routes)}
          </StaticRouter>
        </Provider>
      ),
      store
    }
  }
}

module.exports = PieDom;
