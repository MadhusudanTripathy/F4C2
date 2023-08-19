import React, { useEffect, useState } from 'react';
import Login from './Components/Login';
import Profile from './Components/Profile';
function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      {/* {isLogin == false ? <Login loginFn={setIsLogin} loginValue={isLogin}/> : window.location.href="Profile"} */}
      
      {isLogin?(<Profile />):(<Login loginFn={setIsLogin} loginValue={isLogin}/>)}
    </div>
  );
}

export default App;
