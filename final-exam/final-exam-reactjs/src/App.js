// routes
import * as React from "react";
import {useSelector} from "react-redux";
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import SnackBar from "./components/modal/alert.component";

// ----------------------------------------------------------------------

export default function App() {
    const isSnackBarOpen = useSelector(state => state.snackBar.open);
    const snackBarContents = useSelector(state => state.snackBar.contents);
  return (
      <>
          <ThemeProvider>
              <ScrollToTop />
              <BaseOptionChartStyle />
              <Router />
          </ThemeProvider>

          {isSnackBarOpen && <SnackBar contents={snackBarContents}/>}

      </>

  );
}
