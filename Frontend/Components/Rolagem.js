import React from 'react-native'
import { View, Text, ScrollView } from "react-native";
import { Card, Button, Searchbar } from "react-native-paper";
import Estilo from './../Css'

export default function () {
    return (
        <View>
            <ScrollView>
                <>
                    <Card style={{ padding: 10 }}>
                        <Text style={Estilo.texto}></Text>
                        <Searchbar style={{ margin: 10 }} />
                    </Card>

                    <Text style={{ padding: 25, fontSize: 20, color: '#183757', }}>
                        Passeie pelos pontos {'\n'}turísticos de Paripueira
                    </Text>


                    <Card style={Estilo.card1}>
                        <Text></Text>
                        <Card.Cover
                            style={Estilo.card}
                            source={{
                                uri: 'https://www.praiasdemaceio.com/wp-content/uploads/2017/04/Praia-de-Paripueira.jpg',
                            }}
                        />
                        <Button style={Estilo.btPraia} color="#000000" onPress={{}}>
                            Praia
                        </Button>
                    </Card>

                    <Card style={Estilo.card1}>
                        <Text></Text>
                        <Card.Cover
                            style={Estilo.card}
                            source={{
                                uri: 'https://brasilsabor.com.br/site/assets/files/1906/sl-home-mar-e-cia-restaurante-estrutura.jpg',
                            }}
                        />
                        <Button style={Estilo.btPraia} color="#000000">
                            Restaurante
                        </Button>
                    </Card>

                    <Card style={Estilo.card1}>
                        <Text></Text>
                        <Card.Cover
                            style={Estilo.card}
                            source={{
                                uri: 'https://s2.glbimg.com/VaKMuouZ0wXtq16QFvvyU4nemIw=/0x0:4752x3168/600x0/smart/filters:gifv():strip_icc()/s.glbimg.com/jo/g1/f/original/2014/10/22/museu_theo_brandao.jpg',
                            }}
                        />
                        <Button style={Estilo.btPraia} color="#000000">
                            Museu
                        </Button>
                    </Card>

                </>
            </ScrollView>
        </View>

    )
}