import Checkbox from '@mui/joy/Checkbox';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { useState } from "react";

export default function SignUp() {
  const [fieldError, setFieldError] = useState(false);

  return (
    <>
      <Box className='card'>
        <h1 className='cardTitle'>Create Account</h1>

        <TextField
          id="username"
          label="Username"
          variant="outlined"
          error={fieldError}
          fullWidth
          sx={{ width: '80%', mx: 'auto' }}
        />

        <TextField
          type="email"
          id="email"
          label="Email"
          variant="outlined"
          error={fieldError}
          fullWidth
          sx={{ width: '80%', mx: 'auto', mt: '30px' }}
        />

        <TextField
          id="phone"
          label="Phone Number"
          variant="outlined"
          error={fieldError}
          fullWidth
          sx={{ width: '80%', mx: 'auto', mt: '30px' }}
        />

        <TextField
          type="password"
          id="password"
          label="Password"
          variant="outlined"
          error={fieldError}
          fullWidth
          sx={{ width: '80%', mx: 'auto', mt: '30px' }}
        />

        <TextField
          type="password"
          id="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          error={fieldError}
          fullWidth
          sx={{ width: '80%', mx: 'auto', mt: '30px', mb: '30px' }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ width: '80%', height: '3em', fontWeight: '900', mx: 'auto' }}
          onClick={() => {
            setFieldError(true);
          }}
        >
          Sign Up
        </Button>

        <Checkbox
          label="Remember me"
          sx={{ ml: '10%', mt: '1em', mb: '2em' }}
        />
      </Box>

      <p className="signUp" style={{ textAlign: 'center' }}>
        Already have an account? <Link href="/">Sign in</Link>
      </p>
    </>
  );
}
