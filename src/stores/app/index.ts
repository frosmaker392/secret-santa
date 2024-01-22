import { createStore } from 'solid-js/store';

import { AppStore } from './index.types';

export const [appStore, setAppStore] = createStore<AppStore>({});
