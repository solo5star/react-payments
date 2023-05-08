import { RouterProvider } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { PaymentsProvider } from './context/PaymentsContext';
import { PaymentsFormProvider } from './context/PaymentsFormContext';
import { useMediaQuery } from './hooks/useMediaQuery';
import { router } from './router';
import { GlobalStyle } from './styles/GlobalStyle';
import { ResetStyle } from './styles/ResetStyle';
import { dark, light } from './styles/theme';

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 100px;
  height: 100vh;
`;

export const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = prefersDarkMode ? dark : light;

  return (
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <GlobalStyle />

      <PaymentsProvider>
        <PaymentsFormProvider>
          <Container>
            <RouterProvider router={router} />
          </Container>
        </PaymentsFormProvider>
      </PaymentsProvider>
    </ThemeProvider>
  );
};
