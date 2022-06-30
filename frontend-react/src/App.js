import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

// import { Routes, Route, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

import AddTodo from './components/add-todo';
import TodosList from './components/todos-list';
import Login from './components/login';
import Signup from './components/signup';

import TodoDataService from './services/todos';


function App() {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [error, setError] = React.useState("");

  async function login(user = null){
    TodoDataService.login(user)
      // Call backend API login endpoint
      .then(response => {
        // Get authorization token
        setToken(response.data.token);
        setUser(user.username);
        // Store in local storage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', user.username);
        setError("");
      })
      .catch( e => {
        console.log('login', e);
          setError(e.toString());
      });
  }

  async function logout(){
    setUser(null);
  }

  async function signup(user = null){
    setUser(user);
  }
  
  return (
    <>
      <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Toolbar sx={{ flexWrap: 'wrap' }}>
            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              Todos App
            </Typography>
            <nav>
              <Link
                variant="button"
                color="text.primary"
                href="/todos"
                sx={{ my: 1, mx: 1.5 }}
              >
                Todos
              </Link>
            </nav>
            { user ? (
              <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                Logout ({user})
              </Button>
            ) : (
              <>
                <Button href="/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                  Login
                </Button>
                <Button href="/signup" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                  Signup
                </Button>
              </>
            )}
          </Toolbar>
      </AppBar>
      <Routes>
        {["/", "/todos" ].map((path, index) => 
          <Route path={path} key={index} 
                 element={<TodosList token={token} />} />
        )}
        <Route path="/todos/create" element={<AddTodo token={token} />} />
        <Route path="/todos/:id" element={<AddTodo token={token} />} />
        <Route path="/login" element={<Login login={login}/>}/>
        <Route path="/signup" element={<Signup signup={signup} />} />
      </Routes>
    </>
  );
}

export default App;
