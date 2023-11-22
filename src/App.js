import { RecoilRoot } from 'recoil';
import { Footer, Header, MaxWidth } from './components';
import { QueryClient, QueryClientProvider } from 'react-query';
import './styles/index.scss';
import { Outlet } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <div className="entireWrapper">
          <MaxWidth>
            <Header />
          </MaxWidth>
          <main>
            <MaxWidth>
              <Outlet />
            </MaxWidth>
          </main>
          <MaxWidth>
            <Footer />
          </MaxWidth>
        </div>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
