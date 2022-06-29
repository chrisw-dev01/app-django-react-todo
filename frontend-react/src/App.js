import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

// import { Switch, Route, Link } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

import AddTodo from './components/add-todo';
import TodosList from './components/todos-list';
import Login from './components/login';
import Signup from './components/signup';

let user = "Henry";

function App() {
  return (
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
  );
}

export default App;
