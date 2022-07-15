import React from 'react'
import { Router } from '../react-router'
import { createHashHistory, createBrowserHistory } from '../history'
export * from '../react-router'
export function HashRouter({ children }) {
  let historyRef = React.useRef() //{current:null}
  if (historyRef.current == null) {
    historyRef.current = createHashHistory() // 只初始化一次
  }
  let history = historyRef.current
  let [state, setState] = React.useState({
    action: history.action, //动作 pushState PUSH popstate POP
    location: history.location, //路径当前历史中的路径，也就是栈顶的路径 {pathname:'/a'}
  })
  //监听路径变化，当路径发生变化后重新执行setState
  React.useLayoutEffect(() => history.listen(setState), [history])
  return (
    <Router
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  )
}
export function BrowserRouter({ children }) {
  let historyRef = React.useRef() //{current:null}
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory()
  }
  let history = historyRef.current
  let [state, setState] = React.useState({
    action: history.action, //动作 pushState PUSH popstate POP
    location: history.location, //路径当前历史中的路径，也就是栈顶的路径 {pathname:'/a'}
  })
  //监听路径变化，当路径发生变化后重新执行setState
  React.useLayoutEffect(() => history.listen(setState), [history])
  return (
    <Router
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  )
}
