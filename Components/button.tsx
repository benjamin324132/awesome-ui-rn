import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { scale, verticalScale } from '../Utils/scaling';
import { theme } from '../Utils/theme';

interface Props {
  text: string;
  onPress: () => void;
  backgroundColor?: string;
  textcolor?: string;
}

const FlatButton: React.FC<Props> = ({
  text,
  onPress,
  backgroundColor = theme.colors.blue,
  textcolor = theme.colors.white,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {
          backgroundColor: backgroundColor,
        },
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.title,
          {
            color: textcolor,
          },
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: scale(18),
    paddingVertical: verticalScale(8),
    borderRadius: 8,
    marginVertical: verticalScale(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FlatButton;
