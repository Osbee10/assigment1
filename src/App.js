import MyFirstComponent from './components/myfirstcomponent'
import MySecondComponent from './components/mysecondcomponent'
import MyThirdComponent from './components/mythirdcomponent'
import MyFourthComponet from './components/myfourthcomponent'
import MyFithComponent from './components/myfithcomponent'
import MySixthComponent from './components/mysixthcomponent'
import MySeventhComponent from './components/myseventhcomponent'
import MyEightComponent from './components/myeightcomponent'
import MyNinthComponent from './components/myninthcomponent'
import MyTenthComponent from './components/mytenthcomponent'
import MasterComponent from './components/MasterComponents'
import ParentComponent from './components/parentcomponent'
import ProfileComponent from './components/profilecomponent'

function App() {
  
  return (
    <div>
      {/* <MyFirstComponent />
      <MySecondComponent />
      <MyThirdComponent />
      <MyFourthComponet />
      <MyFithComponent />
      <MySixthComponent />
      <MySeventhComponent />
      <MyEightComponent />
      <MyNinthComponent />
      <MyTenthComponent /> */}
      <MasterComponent name='1' height='45' />
      <MasterComponent name='2' height='67' />
      <MasterComponent name='3' height='34' />
      <MasterComponent name='4' height='38' /> 

      <ParentComponent name="Kojo" gender="Female" age="23" email="asinsjg@gmala.com"/>
      <ProfileComponent firstname='Sammy' lastname='Osborne' email='osee10@gmail.com' dateofbirth='15/15/01' mobile='0273315746'/>
    </div>
  );
}
export default App;
