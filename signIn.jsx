import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { useState } from "react"

export default function SignIn(){
  const [fieldError, setFieldError] = useState(false);

  return( 
    <>
      <Box className='card'>
        <h1 className='cardTitle'>Welcome Back</h1>

        <TextField 
          sx={{ width: '80%', ml: 'auto', mr: 'auto' }} 
          error={fieldError}
          id="username" 
          label="Username" 
          variant="outlined" 
          fullWidth 
        />      

        <TextField 
          type="password"
          sx={{ mt: '30px', mb: '30px', width: '80%', ml: 'auto', mr: 'auto' }} 
          error={fieldError}
          id="password" 
          label="Password" 
          variant="outlined" 
          fullWidth
        />

        <Link 
          href="#" 
          sx={{ display: 'block', textAlign: 'center', mb: '1em', color: 'primary.main' }}
        >
          Forgot your password?
        </Link>

        <Button 
          sx={{ width: '50%', ml: 'auto', mr: 'auto', mb: '2em' }} 
          variant="contained"
          onClick={() => {
            setFieldError(true);
          }}
        >
          Log In
        </Button>
      </Box>

      <p className="signUp" style={{ textAlign: 'center' }}>
        Don't have an account? <Link href='/SignUp'>Create one</Link>
      </p>
    </>
  )
}
