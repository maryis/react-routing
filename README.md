- added libraries:
    npm install bootstrap axios react-router-dom mdbreact
    
- mdbreact for creating slide easily
    - MDB React - Material Design for Bootstrap (React version)
    - The most popular UI KIT for building responsive, mobile-first websites and apps - free 


- Routing is how a web applications direct traffic.

- React Routing:  import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
  1) BrowserRouter:
    To use react-router-dom, we need to wrap our entire App component in BrowserRouter
  
  2) Switch and Route :
    in a SPA in App.js, we can decide on the routes we want to use and direct accordingly. 
    We'll use Route and Switch for this task.
  
  3) Link :
     In order to link to a page within the SPA, we'll use Link. If we used the traditional <a href="/route">,
      it would make a completely new request and reload the page, so we have Link to help us out.
  

- dynamic routing:
    -  first:        <Route exact path="/user/:userId" component={UserPage} />
    -  then: How to get access to the route params in the component:
       React router pass two props to all the component
       
        - match props
        - location props
    - if we console this props in component UserPage:
        // Match Props
        { "path": "/user/:userId", "url": "/user/1", "isExact": true, "params": { "userId": "1" } }
        
        // Location Props
        { "pathname": "/user/1", "search": "", "hash": "", "key": "7e6lx5" }
        
        then we can get params to achieve userId:
        const UserPage = ({ match, location }) => {
          const { params: { userId } } = match;
          ...
          
          
- React.Fragment
  - we use this tag to group all tags and avoid adding new tag to dom
  - short syntax:  <> ... </>
   