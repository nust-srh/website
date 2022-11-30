import React, { useState } from 'react'
import { Grid, TextField, Button, Typography, Box } from '@mui/material'
import { doc, setDoc } from 'firebase/firestore'

import { db } from '../../../services/firebaseConfig'

const AddRollCallYear = () => {
    const [loader, setLoader] = useState(false)
    const [year, setYear] = useState('')

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setLoader(true)

        await setDoc(doc(db, 'RollCall', year), {
            year: year,
        })
            .then(() => {
                setLoader(false)
                alert('Year Successfully Added')
            })
            .catch((error) => {
                alert(error.message)
                setLoader(false)
            })

        setYear('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid
                    container
                    spacing={1}
                    justifyContent="center"
                    sx={{ padding: '30px' }}
                >
                    <Grid xs={12} sm={6} item>
                        <Typography
                            variant="h4"
                            align="center"
                            sx={{ color: '#f36a11', fontWeight: 'bold', paddingBottom: '20px' }}
                        >
                            Add Recruitment Year
                        </Typography>
                        <TextField
                            placeholder="Enter year"
                            label="year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Box textAlign="center">
                            <Button
                                type="submit"
                                variant="contained"
                                style={{
                                    backgroundColor: loader
                                        ? '#ccc'
                                        : '#f36a11',
                                    fontSize: '14px',
                                    borderRadius: 10,
                                }}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default AddRollCallYear
