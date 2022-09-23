import * as React from 'react';
import { BottomNavigation, View, Text, Card, Searchbar, Button, Platform, SafeAreaView } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';

import TelaLoad from './Telas/TelaLoad';
import TelaMapa from './Telas/TelaMapa';
import TelaVideo from './Telas/TelaVideo';
import Estilo from './Css.js';
import Rolagem from './Components/Rolagem';
// import Index from "./Components/Index";

function Icon1() {//componente de icone usado no bottom
  return (
    <View style={{ padding: 5 }}>
      <Ionicons name="menu" size={35} color="blue" />
    </View>
  );
}

const MyButton = () => (//componente usado para botões
  <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
);


/*Conteúdo da aba 1*/
const HomeRoute = () => (
       <Rolagem />
);

/*Conteúdo da aba 2*/
const LocaisRoute = () => (
  <TelaMapa />
);

/*Conteúdo da aba 3*/
const NavegarRoute = () => (
<TelaVideo/>
  );


function BarraPesquisa() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      style={Estilo.search}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
}

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'home',
      title: '',
      icon: 'home',
    },
    { key: 'localizacao', title: ' ', icon: 'map' },
    { key: 'navegar', title: ' ', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    localizacao: LocaisRoute,
    navegar: NavegarRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#183757' }}
    />
  );
};

export default MyComponent;
