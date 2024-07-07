import React, { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import {CameraAlt} from '@mui/icons-material'
import { VisuallyHiddenInput } from '../components/styles/StyledComponents'

const Login = () => {
  const [isLogin, setLoginIn] = useState(true)

  const toggleLogin = () => setLoginIn(prevState => !prevState)

  return (
    <Container component={'main'} maxWidth="xs" sx={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Paper elevation={3} sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        {isLogin ? <React.Fragment>
          <Typography variant='h5'>Login</Typography>
          <form style={{
            width: "100%",
            marginTop: "1rem"
          }}>
            <TextField
              required fullWidth label="Username" margin="normal"
              variant="outlined"
            />
            <TextField
              required fullWidth label="Password" type="password" margin="normal"
              variant="outlined"
            />
            <Button fullWidth variant='contained' sx={{ marginTop: "1rem" }} color='primary'>Login</Button>
            <Typography textAlign={"center"} m={"1rem"}>Or</Typography>
            <Button onClick={toggleLogin} fullWidth variant='text'>Sign Up Instead</Button>

          </form>
        </React.Fragment> :
          <React.Fragment>
            <Typography variant='h5'>Sign Up</Typography>
            <form style={{
              width: "100%",
              marginTop: "1rem"
            }}>
              
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit:"contain"
                }}
                />
                <IconButton sx={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  color:"white",
                  bgcolor: "rgba(0,0,0,0.5)",
                  ":hover": {
                  bgcolor: "rgba(0,0,0,0.7)",
                  },
                }}
                  component="label"
                >
                  <CameraAlt />
                  <VisuallyHiddenInput type='file'/>
                </IconButton>
              </Stack>
              
            <TextField
            required fullWidth label="Name" margin="normal"
            variant="outlined"
              />
              <TextField
                required fullWidth label="Bio" margin="normal"
                variant="outlined"
              />
              <TextField
                required fullWidth label="Username" margin="normal"
                variant="outlined"
              />
              <TextField
                required fullWidth label="Password" type="password" margin="normal"
                variant="outlined"
              />
              <Button fullWidth variant='contained' sx={{ marginTop: "1rem" }} color='primary'>Sign Up</Button>
              <Typography textAlign={"center"} m={"1rem"}>Or</Typography>
              <Button onClick={toggleLogin} fullWidth variant='text'>Login Instead</Button>

            </form>
          </React.Fragment>
        }
      </Paper>
    </Container>
  )
}

export default Login
