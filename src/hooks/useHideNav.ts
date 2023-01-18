import { useContext } from 'solid-js'
import { NavStateSetterContext } from '../providers/NavStateSetterProvider'

const useHideNav = () => {
  const navStateSetter = useContext(NavStateSetterContext)

  navStateSetter('hide')
}

export default useHideNav
