import ProfileCard from './ProfileCard';
import Alexa from './images/alexa.png';
import Cortana from './images/cortana.png';
import Siri from './images/siri.png';



function App() {



  return (
    <div>
        <div> Personal Digital Assistants</div>
      <ProfileCard title = 'Cortana' handle = '@Cortana123' image = {Alexa}/>
      <ProfileCard title = 'Alexa ' handle = '@Alexa321' image = {Cortana}/>
      <ProfileCard title = 'Siri ' handle = '@Siri42' image = {Siri}/>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;