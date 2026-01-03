why need react
= easy way to write normal html css js..converts into html css js under the hood.
hard to do dom manipulation ..react compiler converts react into html css js 

state = on obj represents curr state of app
represents dynamic things in app 
 
components= its reusable snippet that changes given a state 

re-rendering = a state change triggers re render ..represents dom being manipulated when state changes.


dynamic website needs state and components

any time parent rerenders child also re renders


RERENDERING::::
we have to minimize the number of rerenders
1. we push the state down we do not include state in parent app 
2. useMemo-- memoisation  
memo lets us skip rerender when props are unchanged