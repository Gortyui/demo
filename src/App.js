import React, { lazy, useEffect } from 'react';
import {BrowserRouter, HashRouter, Route,Routes,} from 'react-router-dom'
import './App.css';
import store from './redux/redux-store';

import {Provider} from 'react-redux'

import Sidebar from './components/sidebar/sidebar';
import Midbar from './components/midbar/midbar';

import Footer from './components/footer/footer';
//import Massage from './components/navigation/massages/this chat/massages';



import MYprof from './components/navigation/my posts/my_profile/myprofC';
import Dialogcontainer from './components/navigation/massages/main dialogs/dialogs';


//import Usercontain from './components/navigation/users/UsersC';

import Headercontainer from './components/header/header-containerC';
import LogIn from './components/navigation/logIn/login';
import YourFace from './components/navigation/your face/yourFace';
import { connect } from 'react-redux';
import { SetInitelizedThunk } from './redux/app-reducer';

import Loader from './component k2/loader';
import withSuspense from './hoc/withSuspense';





//export default Header;store={props.store}

function App (props){ 

useEffect(()=>{props.SetInitelize();
//eslint-disable-next-line react-hooks/exhaustive-deps
},[])
   

const  Usercontain=lazy(()=>import('./components/navigation/users/UsersC'))
const News=lazy(()=>import('./components/navigation/news/news'))
const Music=lazy(()=>import('./components/navigation/music/music'))
const Settings=lazy(()=>import('./components/navigation/settings/settings'))
const AboutUs=lazy(()=>import('./components/navigation/about us/about_us'))
 const  Friendscontain=lazy(()=>import('./components/navigation/mfF/friends/friends_map'))  



    if(!props.initelized){return <Loader />}
      return(
    <div className="body">
    
    <Headercontainer/>
    <Sidebar/>
    <Midbar/>
    <Routes>
    <Route path='/' element={<MYprof  />} />
    <Route path='/massage/*' element={<Dialogcontainer  />}  />
    <Route path='/profile/:id' element={<MYprof />} />
    <Route path='/profile' element={<MYprof />} />
    <Route path='/news' element={withSuspense(News)()} />
    <Route path='/music' element={withSuspense(Music)()} />
    <Route path='/settings' element={withSuspense(Settings)()} />
    <Route path='/about_us' element={withSuspense(AboutUs)()} />
    <Route path='/users' element={withSuspense(Usercontain)()} />
    <Route path='/friends' element={withSuspense(Friendscontain)()} />
    <Route path='/login' element={<LogIn />} />
    <Route path='/yourface' element={<YourFace />} />
    </Routes>
    <Footer />
    
    </div>
    
    
    )
}



let mapStateToProps=(state)=>{
    return{
initelized:state.app.initelized
    }
}



let mapDispatchToProps={
SetInitelize:SetInitelizedThunk
}
 
       
      

let AppContainer= connect(mapStateToProps,mapDispatchToProps)(App);

const MucukApp=()=>{
return <React.StrictMode>
<HashRouter>
 <Provider store={store} > 
  <AppContainer />
  </Provider >
  </HashRouter>
    </React.StrictMode>


}

export default MucukApp
    
