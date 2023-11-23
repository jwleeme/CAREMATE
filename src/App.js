import { RecoilRoot } from 'recoil';
import { Footer, Header, MaxWidth } from './components';
import './styles/index.scss';
import { Outlet } from 'react-router-dom';
import MessageButton from 'components/common/message/MessageButton';


function App() {
  return (
    <RecoilRoot>
      <div className="entireWrapper">
        <MaxWidth>
          <Header />
        </MaxWidth>
        <main>
          <MaxWidth >
            <Outlet />
          </MaxWidth>
          {/* 메시지함(채팅방) 버튼 컴포넌트 - 회원한정 모든 페이지에서 보임 */}
            <MessageButton/>
        </main>
        <MaxWidth>
          <Footer />
        </MaxWidth>
      </div>
    </RecoilRoot>
  );
}

export default App;
