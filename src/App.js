
import { AiFillWechat, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import copy from 'copy-to-clipboard';
import './App.css'
function App() {

  return (
    <div className="container" style={{ height: '100vh', width: '100vw' }}>

      <div className="bakcground">
        <div className="title1">Helloooo</div>
        <div className="title2">Nice to meet you</div>
      </div>

      <div style={{ margin: '5vh auto', width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <AiFillWechat style={{ fontSize: '110px', color: ' #7BB32E' }} onClick={
          () => {
            if (copy("feifeirun88")) {
              console.log("复制成功");
            } else {
              console.log("复制失败")
            }
            window.location.href = 'weixin://';
          }} />

        <AiFillLinkedin style={{ fontSize: '110px', color: '#0072B1' }} onClick={() => { window.location.href = 'https://www.linkedin.com/in/fei-xu-096b08215/'; }} />
        <AiFillGithub style={{ fontSize: '110px', color: '#171515' }} onClick={() => { window.location.href = 'https://github.com/feifeirun97'; }} />
      </div>
    </div>
  );
}

export default App;
