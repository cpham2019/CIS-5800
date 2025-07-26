import { Box, Button, Link, TextField, Typography, Stack } from '@mui/material';

export default function SignUpForm({ username, setUsername, email, setEmail, password, setPassword, error, handleSignUp }) {
    return (
        <Box width={'100vw'} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box sx={{
                width: '30%',
                height: '70%',
                bgcolor: 'white',
                p: 4,
                mt: 8,
                borderRadius: 2,
                boxShadow: 3,
                textAlign: 'center',
            }}>
                <Typography variant="h4" marginBottom={'20px'} color={'red'}>Sign Up</Typography>
                <form onSubmit={handleSignUp}>
                    <Stack spacing={3}>
                        <TextField
                            label="Username"
                            variant="outlined"
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {error && <Typography color="error">{error}</Typography>}
                        <Button type="submit" variant="contained" fullWidth
                            sx={{
                                bgcolor: 'red',
                                color: 'white',
                                '&:hover': {
                                bgcolor: 'darkred',
                                },
                            }}
                        >Sign Up</Button>
                        <Typography>OR</Typography>
                        <Link href='/sign-in' underline="true" sx={{color: 'red', '&:hover': {color: 'darkred'}}}>Sign In</Link>
                    </Stack>
                </form>
            </Box>
        </Box>
    );
}
