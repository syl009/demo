import React from 'react';
import { View } from 'react-native';
import Header from './components/header';
import { ListItem } from 'react-native-elements';

const list = [
  {
    id: 0,
    content: 'aller voir Sylvie',
    statut: 'encours',

  },

  {
    id: 1,
    content: 'se brosser les dents',
    statut: 'encours',

  },
  {
    id: 2,
    content: 'faire du menage',
    statut: 'Terminé',

  }

];
export default class App extends React.Component {
  
  
  render() {
  return (
    <View>
      <Header content='Liste de tâches' />
      {
        
    list.map((l, i) => (
      <ListItem
        key={i}
        title={l.id}
        subtitle={l.content}
        etat={l.statut}
        badge={{ value: l.statut, 
          textStyle: { color: 'orange' }, 
          containerStyle: { marginTop: -20 } }}
      />
    ))
  }
    </View>
    
  );
}
}
