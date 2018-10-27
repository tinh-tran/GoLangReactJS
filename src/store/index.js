import reducers from '../reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
	key: 'intell-learn-www.heikunan.vip',
	storage: storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default () => {
	const persistor = persistStore(store)
	return { store, persistor }
}
