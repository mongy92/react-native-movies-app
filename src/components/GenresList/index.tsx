import React from 'react';
import { View, Text } from 'react-native';
import { Genre } from '../../utils';
import styles from './styles';

interface Props {
  genres: Genre[];
}

const GenresList: React.FC<Props> = ({ genres }) => {
  return (
    <View style={styles.container}>
      {genres.map((g) => (
        <View style={styles.genre} key={g.id}>
          <Text style={styles.genreText}>{g.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default GenresList;
