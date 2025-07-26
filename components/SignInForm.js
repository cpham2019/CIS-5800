import { Box, Button, Link, TextField, Typography, Stack } from '@mui/material';

export default function SignInForm({ email, setEmail, password, setPassword, error, handleSignIn }) {
    return (
        <Box width={'100vw'} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box sx={{
                width: '30%',
                height: '60%',
                bgcolor: 'white',
                p: 4,
                mt: 8,
                borderRadius: 2,
                boxShadow: 3,
                textAlign: 'center',
            }}>
                <Typography variant="h4" marginBottom={'20px'} color={'red'}>Sign In</Typography>
                <form onSubmit={handleSignIn}>
                    <Stack spacing={3}>
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
                        >Sign In</Button>
                        <Typography>OR</Typography>
                        <Link href='/sign-up' underline="true" sx={{color: 'red', '&:hover': {color: 'darkred'}}}>Sign Up</Link>
                    </Stack>
                </form>
            </Box>
        </Box>
    );
}
