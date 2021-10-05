import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  tileContainer: {
    backgroundColor: '#FBFBFB',
    marginTop: 14,
    marginHorizontal: 33,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 8
  },
  heading: {
    color: '#8D1519',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subHeading: {
    color: '#241A10',
    fontSize: 15,
    marginTop: 4,
    lineHeight: 16
  },
});

const searchItems = [
  { id: 0, heading: "Animal Search", subHeading: "Quick search by association, animal IDs, registrations numbers, etc." },
  { id: 1, heading: "EPD Search", subHeading: "Look up animal information using EPD criteria." },
  { id: 2, heading: "Tag Search", subHeading: "Search for animals using ASV FCCP/AA Tags." },
  { id: 3, heading: "Planned Mating", subHeading: "Calculate parental average EPDs for individual matings or a group of matings." },
  { id: 4, heading: "EPD Stats", subHeading: "EPD averages and ranges" },
];

const SearchBox = ({ heading, subHeading }) => (
  <TouchableOpacity style={styles.tileContainer}>
    <Text style={styles.heading}>{heading}</Text>
    <Text style={styles.subHeading}>{subHeading}</Text>
  </TouchableOpacity>
);

const Main = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/background-image.jpg')} resizeMode="cover" style={styles.image}>
        {searchItems.map((item, index) => (
          <SearchBox key={index} heading={item.heading} subHeading={item.subHeading} />
        ))}
      </ImageBackground>
    </View>
  );
};

export default Main;