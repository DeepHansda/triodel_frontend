import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  aboutTitleIntroContainer:{
    backgroundImage: "url('https://res.cloudinary.com/manjiro/image/upload/v1652153593/mywebsite/normal/annie-spratt-QckxruozjRg-unsplash_wulawa.jpg')",
    height:'200px',
    backgroundSize:'cover',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:'40px',
    "& h2":{
      fontFamily:'Poppins',
      color:'white',
      fontWeight:'bold',
      fontSize:'70px'

    }
  },
  aboutServiceList: {
    maxWidth: "850px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    margin: "0 auto",
    padding: "15px",
  },
  itemPaper: {
    width: "320px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "10px;",
    "@media screen and (min-width: 600px)": {
      width: "150px",
      height: "150px",
    },
    "@media screen and (min-width: 900px)": {
      width: "250px",
      height: "180px",
    },
  },
  aboutServiceListItem: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  aboutServiceIcon: {
    color: "#7ae582",
    fontSize: "40px",
  },
 
  aboutVisionContainer: {
    padding: "20px",
    maxWidth: "1200px",
    margin:'0 auto',
  },
  aboutValuesContainerTitle:{
      padding: "20px 0px",
      borderBottom:'2px solid #fff',
      '& h2':{
          fontWeight: 'bold',
          color:'#fff',
          textAlign:'center',
      }
  },
  aboutVisionTextContainer: {
    textAlign: "center",
   
    padding: "10px",
        '& h4': {
            fontSize: "40px",
            fontWeight: "bold" ,
          }, 
          "@media screen and (min-width: 900px)":{
            width: "100%",
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }
  },

  aboutValuesContainer: {
    backgroundImage: "url('https://res.cloudinary.com/manjiro/image/upload/v1652153593/mywebsite/normal/annie-spratt-QckxruozjRg-unsplash_wulawa.jpg')",
    width: "100vw",
    height: "100%",
    padding:'10px',
    backgroundSize:'cover'
  },
  aboutValuesItemContainer:{
      marginTop:'20px'
  },
  aboutValuesList:{
      display:'flex',
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
    //   flexWrap:'wrap',
      "@media screen and (min-width: 900px)":{
      flexDirection:'row',
      justifyContent: 'space-around',

      "& $aboutValuesItem":{
          width:'100%',
          "& h5":{
            fontSize: "20px",
            // color:'#7ae582'
        }
      }
      }
  },
  aboutValuesItem:{
      textAlign: "center",
      padding:"10px",
      width: "200px",
      backgroundColor:'#7ae582',
      "& h2":{
          fontSize: "28px",
          color:'#7ae582'
      }
  },
  aboutGoalContainer:{
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "20px",
    "@media screen and (min-width: 1280px)":{
    padding: "50px",

    }
  },
  aboutGoalContainerImg:{
    width: "100%",
    border:'10px solid #7ae582',
    "& img":{
      maxWidth: "100%",
    }
  }

});

export default useStyles