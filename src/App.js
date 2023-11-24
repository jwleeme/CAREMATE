import { RecoilRoot } from 'recoil';
import { Footer, Header, MaxWidth } from './components';
import { QueryClient, QueryClientProvider } from 'react-query';
import './styles/index.scss';
import { Outlet } from 'react-router-dom';
import MessageButton from 'components/common/message/MessageButton.jsx';

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <div className="entireWrapper">
          <Header />
          <main>
            <MaxWidth>
              <Outlet />
            </MaxWidth>
            {/* 메시지함(채팅방) 버튼 컴포넌트 - 회원한정 모든 페이지에서 보임 */}
            <MessageButton />
          </main>
          <Footer />
        </div>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
