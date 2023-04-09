import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '../../styles/global';
import defaultTheme from '../../styles/themes/theme';
import Header from '../Header';
import * as Styled from './styles';
import Router from '../../Routes';
import ToastContainer from '../Toast/ToastContainer';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />
        <Styled.Container>
          <Header />
          <Router />
        </Styled.Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
