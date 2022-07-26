import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../../constants/colors";
import { IButton } from "./types";
import {styles} from "./styles";

interface Props {
  black: string;
  white: string;
  red: string;
  green: string;
  grey: string;
}

export const Button = ({ title, bgColor }: IButton) => {
  return (
    // <TouchableOpacity
    //   style={[styles.button, { backgroundColor: colors[bgColor as keyof Props] }]}
    // >
      <TouchableOpacity style={[styles.button, {backgroundColor: colors.black}]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
