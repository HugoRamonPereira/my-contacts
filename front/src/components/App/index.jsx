import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from '../../styles/global';
import defaultTheme from '../../styles/themes/theme';
// import ContactsList from '../ContactsList';
import Header from '../Header';
import { Container } from './styles';
import Routes from '../../Routes';

function App() {
  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
