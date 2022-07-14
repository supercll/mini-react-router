import React from 'react'
const NavigationContext = React.createContext()
const LocationContext = React.createContext()
export { NavigationContext, LocationContext }
/**
 * 底层的路由容器
 * @param {*} children 要渲染的子节点
 * @param {*} location 路径
 * @param {*} navigator 导航器
 */
export function Router({ children, location, navigator }) {
  return (
    <NavigationContext.Provider value={{ navigator }}>
      <LocationContext.Provider value={{ location }}>
        {children}
      </LocationContext.Provider>
    </NavigationContext.Provider>
  )
}
export function Routes({ children }) {
  //children=[Route,Route,Route]
  return useRoutes(createRoutesFromChildren(children))
}
export function Route() {
  return null
}
export function useLocation() {
  return React.useContext(LocationContext).location
}
export function useRoutes(routes) {
  const location = useLocation()
  const pathname = location.pathname
  for (let i = 0; i < routes.length; i++) {
    const { path, element } = routes[i]
    let match = matchPath(path, pathname)
    if (match) {
      return element
    }
  }
}
function compilePath(path) {
  let regexpSource = '^' + path
  regexpSource += '$'
  const matcher = new RegExp(regexpSource)
  return matcher
}
export function matchPath(path, pathname) {
  let matcher = compilePath(path)
  let match = pathname.match(matcher)
  if (!match) return null
  return match
}
export function createRoutesFromChildren(children) {
  const routes = []
  React.Children.forEach(children, child => {
    let route = {
      path: child.props.path,
      element: child.props.element,
    }
    routes.push(route)
  })
  return routes
}
function forEach(children, fn) {
  if (Array.isArray(children)) {
    children.forEach(fn)
  } else {
    fn(children)
  }
}
function map(children, fn) {
  if (Array.isArray(children)) {
    return children.map(fn)
  } else {
    return fn(children)
  }
}
