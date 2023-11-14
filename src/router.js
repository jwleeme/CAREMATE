import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import {
  AboutUs,
  AllPosts,
  EditPost,
  Home,
  Login,
  MyPage,
  MyPosts,
  MyWishList,
  NotFound,
  PostDetail,
  Register,
  Withdraw,
  WritePost,
} from './views';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '' },
      { path: '/register', element: <Register /> },
      { path: '/login', element: <Login /> },

      { path: '/about-us', element: <AboutUs /> },

      { path: '/mypage', element: <MyPage /> },
      { path: '/mypage/withdraw', element: <Withdraw /> },
      { path: '/mypage/posts', element: <MyPosts /> },
      { path: '/mypage/wishlist', element: <MyWishList /> },

      { path: '/posts', element: <AllPosts /> },
      { path: '/posts/new', element: <WritePost /> },
      { path: '/posts/:id', element: <PostDetail /> },
      { path: '/posts/:id/edit', element: <EditPost /> },
    ],
  },
]);
