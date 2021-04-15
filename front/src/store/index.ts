import { createStore, Store } from "vuex";
import { InjectionKey } from 'vue'

export type type_theme = "light" | 'dark';

export interface State {
  theme: type_theme
}

export const key: InjectionKey<Store<State>> = Symbol()


export default createStore<State>({
  state: {
    theme: 'light'  
  },
  mutations: {
    changeTheme ( state: State, payload: type_theme) {
      state.theme = payload;
    }
  },
  actions: {},
  modules: {},
});
