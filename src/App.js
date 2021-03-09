import MyFirstComponent from './MyFirstComponent';
import MySecondComponent from './MySecondComponent';
import MyThirdComponent from './MyThirdComponent';
import MyFourthComponent from './MyFourthComponent';
import MyFifthComponent from './MyFifthComponent';
import MySixthComponent from './MySixthComponent';
import MySeventhComponent from './MySeventhComponent';
import MyEightComponent from './MyEightComponent';
import MyNinthComponent from './MyNinthComponent';
import MyTenthComponent from './MyTenthComponent';
import MasterComponent from './MasterComponent';

function App() {
  return (
    <div>
      {/* <MyFirstComponent/>
      <MySecondComponent/>
      <MyThirdComponent/>
      <MyFourthComponent/>
      <MyFifthComponent/>
      <MySixthComponent/>
      <MySeventhComponent/>
      <MyEightComponent/>
      <MyNinthComponent/>
      <MyTenthComponent/> */}
      
      <MasterComponent name="1" height="45"/>
      <MasterComponent name="2" height="67"/>
      <MasterComponent name="3" height="34"/>
      <MasterComponent name="4" height="30"/>

      
    </div>
  );
}

export default App;
