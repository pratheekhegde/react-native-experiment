import React from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import { Header, Card, Button } from 'react-native-elements';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          url: 'https://ia.media-imdb.com/images/M/MV5BMTUwMzI5ODEwNF5BMl5BanBnXkFtZTgwNjAzNjI2MDI@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg',
          movieName: 'Kong Skull Island',
          screeningOn: '12 Jan',
          type: 'English, 2D/3D',
          genre: 'Action, Drama'
        },
        {
          url: 'https://ia.media-imdb.com/images/M/MV5BMTUzODkyNDE2OV5BMl5BanBnXkFtZTcwMzEzNTIzMw@@._V1_QL50_SX1777_CR0,0,1777,999_AL_.jpg',
          movieName: 'Iron Man',
          screeningOn: '2 May',
          type: 'English, 2D/3D',
          genre: 'Action, Adventure, Sci-Fi'
        },
        {
          url: 'https://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg',
          movieName: 'The Avengers',
          screeningOn: '4 May',
          type: 'English, 2D/3D/IMAX',
          genre: 'Action, Adventure, Sci-Fi'
        },
        {
          url: 'https://ia.media-imdb.com/images/M/MV5BMTUyMDc5MDczMV5BMl5BanBnXkFtZTgwMDcyOTYzMjI@._V1_QL50_SY1000_CR0,0,1504,1000_AL_.jpg',
          movieName: 'Wonder Woman',
          screeningOn: '2 June',
          type: 'English, 2D/3D/IMAX',
          genre: 'Action, Adventure, Fantasy'
        },
        {
          url: 'https://ia.media-imdb.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg',
          movieName: 'Black Panther',
          screeningOn: '16 February',
          type: 'English, 2D/3D/IMAX',
          genre: 'Action, Adventure, Sci-Fi'
        },
        {
          url: 'https://ia.media-imdb.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL50_SY1000_CR0,0,666,1000_AL_.jpg',
          movieName: 'Dead Pool',
          screeningOn: '12 February',
          type: 'English, 2D/3D/IMAX',
          genre: 'Action, Adventure, Comedy'
        }
      ],
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          leftComponent={{ icon: 'menu', color: '#000' }}
          centerComponent={{ text: 'Movie Time', style: { color: '#000' } }}
          rightComponent={{ icon: 'filter-list', color: '#000' }}
          outerContainerStyles={{ backgroundColor: '#fff' }}
        />
        <ScrollView>
          <Text style={{ fontSize: 30, paddingLeft: '5%', paddingTop: '5%', fontWeight: '800' }}>SPECIAL SCREENING</Text>
          <Text h4 style={{ paddingLeft: '5%', color: '#BBBBBB' }}>Screening at selected venues</Text>
          {
            this.state.movies.map((m, i) => {
              return <Card key={i}
                containerStyle={{ marginLeft: '8%', borderRadius: 4, elevation: 5, shadowColor: 'rgba(0,0,0,0.1)', shadowOffset: { width: 0, height: 3 }, shadowRadius: 5, shadowOpacity: 1.0 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ width: 100, height: 150, position: 'relative', right: 30, elevation: 5, shadowColor: 'rgba(0,0,0,0.1)', shadowOffset: { width: 0, height: 3 }, shadowRadius: 5, shadowOpacity: 1.0 }}>
                    <Image source={{ uri: m.url }}
                      style={{ width: 120, height: 150, borderRadius: 4 }} />
                  </View>
                  <View style={{ flex: 1, height: 150 }}>
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontSize: 20, paddingLeft: '5%', fontWeight: '600' }}>{m.movieName}</Text>
                      <Text style={{ fontSize: 17, paddingLeft: '5%', paddingTop: '3%', color: '#BBBBBB', fontWeight: '700' }}>Screening on : {m.screeningOn}</Text>
                      <Text style={{ fontSize: 15, paddingLeft: '5%', paddingTop: '5%', color: '#BBBBBB', fontWeight: '600' }}>{m.type}</Text>
                      <Text style={{ fontSize: 15, paddingLeft: '5%', paddingTop: '1%', color: '#BBBBBB', fontWeight: '600' }}>{m.genre}</Text>
                    </View>
                    <View alignItems='flex-end'>
                      <Button
                        backgroundColor='#7A74E4'
                        textStyle={{ fontSize: 15, fontWeight: '800' }}
                        buttonStyle={{ borderRadius: 2, marginRight: '-5%', height: 40, width: 100 }}
                        title='BOOK' />
                    </View>
                  </View>
                </View>
              </Card>
            })
          }
        </ScrollView>
      </View>
    );
  }
}
