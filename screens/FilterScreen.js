import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import DropDownPicker from 'react-native-dropdown-picker';


function FilterScreen() {
  const [radius, setRadius] = useState('20');
  const [minimumAge, setMinimumAge] = useState(0);
  const [maximumAge, setMaximumAge] = useState(100);
  const [gender, setGender] = useState('all');
  const [openGenderPicker, setOpenGenderPicker] = useState(false);
  const [activity, setActivity] = useState('all');
  const [openActivityPicker, setOpenActivityPicker] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Text>Radius: {radius} miles</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={radius}
          onValueChange={setRadius}
          step={1}
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text>Minimum Age: {minimumAge}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={minimumAge}
          onValueChange={setMinimumAge}
          step={1}
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text>Maximum Age: {maximumAge}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={maximumAge}
          onValueChange={setMaximumAge}
          step={1}
        />
      </View>

      <View style={styles.pickerContainer}>
        <Text>Gender:</Text>
        <DropDownPicker
          open={openGenderPicker}
          value={gender}
          items={[
            {label: 'All', value: 'all'},
            {label: 'Male', value: 'male'},
            {label: 'Female', value: 'female'},
            {label: 'Other', value: 'other'},
          ]}
          setOpen={setOpenGenderPicker}
          setValue={setGender}
          setItems={() => {}}
          style={styles.picker}
        />
      </View>

      <View style={styles.pickerContainer2}>
        <Text>Activity:</Text>
        <DropDownPicker
          open={openActivityPicker}
          value={activity}
          items={[
            {label: 'All', value: 'all'},
            {label: 'Mountain Biking', value: 'mountain biking'},
            {label: 'Skiing', value: 'skiing'},
            {label: 'Backpacking', value: 'backpacking'},
          ]}
          setOpen={setOpenActivityPicker}
          setValue={setActivity}
          setItems={() => {}}
          style={styles.picker}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Filter</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sliderContainer: {
    marginVertical: 20,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  buttonContainer: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pickerContainer: {
    marginVertical: 20,
    zIndex: 10,
  },
  pickerContainer2: {
    marginVertical: 20,
    zIndex: 5,
  },
  picker: {
    width: '100%',
    height: 40,
  },
});

export default FilterScreen;
