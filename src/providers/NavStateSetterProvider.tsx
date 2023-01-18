import { createContext } from 'solid-js'
import { NavState } from '../components/molecules/navbarPartials/NavPartial'

type NavStateSetter = (state: NavState) => void

export const NavStateSetterContext = createContext<NavStateSetter>(() => {})

export const NavStateSetterProvider = NavStateSetterContext.Provider
