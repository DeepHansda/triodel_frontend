import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography:{
    fontFamily: 'Poppins,sans-serif'
  },
  palette: {
    primary:{
      main: "#74db7c"
    } ,
    secondary:{
      main: "#fff"
    },
    third:{
      main: "#000"
    }
  },
})
export default theme;