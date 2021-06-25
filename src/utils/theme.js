import { red } from "@material-ui/core/colors";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 600,
      md: 768,
      lg: 1366,
      xl : 1600,
      xxl: 1920,
    },
  },
  palette: {
    white: {
      main: "#ffffff",
      main1: "#f0f0f0",
      white1: "#fdfdfd",
      white2: "#fefefe",
    },
    black: {
      main: "#000000",
      black1: "#1d1d16",
      black2: "#333333",
    },
    gray: {
      grayDark1: "#16161d",
      grayDark2: "#354052",
      grayDark3: "#555555",
      grayDark4: "#aaaaaa",
      grayDark5: "#cccccc",
      grayDark6: "#f6f6f8",
      grayLight1: "#7f7f83",
      grayLight2: "#666666",
      grayLight3: "#6a6a6a",
      grayLight4: "#ededed",
      grayLight5: "#f9f9f9",
      grayLight6: "#888888",
      grayLight7: "#fffafa",
      grayLight8: "#eeeeee",
      grayLight9: "#d8d8d8",
      grayLight10: "#f0f7ff",
      grayLight11: "#f9f9fb",
      grayLight12: "#fef1f1",
      grayLight13: "#f7f7f7",
      grayLight14: "#fafcff",
      grayLight15: "#e1e1e1",
      grayLight16: "#f2f5f8",
      grayLight17: "#e6e6e6",
      grayLight18: "#979797",
      grayLight19: "#757575",
      grayLight20: "#2ebcf0",
    },
    red: {
      redDark1: "#d70f0f",
      redDark2: "#de0262",
      redDark3: "#e01702",
      redDark4: "#f0282b",
      redLight1: "#e13955",
      redLight2: "#bb0253",
      redLight3: "#fff0f0",
      redLight4: "#feecec",
    },
    blue: {
      blueDark1: "#542aa8",
      blueDark2: "#0f60bd",
      blueDark3: "#0070f3",
      blueDark4: "#002957",
      blueDark5: "#0090c4",
      blueLight1: "#00adef",
      blueLight2: "#0070ef",
      blueLight3: "#2e8af1",
      blueLight4: "#0066da",
      blueLight5: "#24c2ff",
      blueLight6: "#bfddfe",
      blueLight7: "#1778f2",
    },
    green: {
      greenDark1: "#4caf50",
      greenLight1: "#139029",
      greenLight2: "#18b934",
      greenLight3: "#f1fdf4",
      greenLight4: "#d4e8ff",
      greenLight5: "#d2f9d9",
    },
    yellow: {
      yellowDark1: "#c7711a",
      yellowLight1: "#e4892d",
      yellowLight2: "#fcf2e8",
    },
    primary: {
      main: "#0066da",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  zIndex: {
    // common default
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
    // page
    home: {},
    listing: {
      searchFixed: 1501,
    },
    hotelDetail: {},
  },
});
export default theme;
