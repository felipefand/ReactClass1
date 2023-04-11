import { useState } from 'react';
import Banner from './components/Banner/Banner';
import CardForm from './components/CardForm/CardForm';
import Team from "./components/Team/Team";

function App() {

  const teams = [
    {
      name: 'Programação', 
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9' 
    },
    {
      name: 'Front-End', 
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF' 
    },
    {
      name: 'Data Science', 
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2' 
    },
    {
      name: 'DevOps', 
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8' 
    },
    {
      name: 'UX e Design', 
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5' 
    },
    {
      name: 'Mobile', 
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9' 
    },
    {
      name: 'Inovação e Gestão', 
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF' 
    },
  ]

  const [members, setMembers] = useState('');

  const onNewMemberAdded = (member) => {
    setMembers([...members, member]);
  }

  return (
    <div className="App">
      <Banner/>
      <CardForm teams={teams.map(team => team.name)} onMemberRegistered={onNewMemberAdded}/>

      {teams.map(team => <Team 
      key={team.name} 
      name={team.name} 
      primaryColor={team.primaryColor} 
      secondaryColor={team.secondaryColor}
      collaborators={members? members.filter(member => member.team === team.name) : []}
      />)}
    </div>
  );
}

export default App;
