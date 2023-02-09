import { FC } from "react";
import {Header} from "../components/Header/Header"
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import {Provider} from 'react-redux'
import store from "../store/store"
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Theme preset={presetGpnDefault}>
        <Header/>
        <Main/>
        <Footer/>
      </Theme>
    </Provider>
    
  );
};
export default App;
