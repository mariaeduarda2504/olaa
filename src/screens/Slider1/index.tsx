import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { IPage } from "../../../App";
import {
  ComponentButtonSlider,
  ComponentListMarker,
  ComponentTitleSlider,
} from "../../components";
import { styles } from "./styles";

export function Slider1({ setPageI }: IPage) {
  const image1 = require("../../assets/slider1.png");
  const slide1Texts = [{ id: "1", text: "Navegue pelas nossas categorias" }];

  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <ComponentTitleSlider titleI="Rações e Petiscos" />
        <FlatList
          data={slide1Texts}
          renderItem={({ item }) => (
            <ComponentListMarker key={item.id} textMarker={item.text} />
          )}
        />
      </View>
      <View style={styles.buttonSlider}>
        <ComponentButtonSlider onPressI={() => setPageI(1)} />
        <ComponentButtonSlider onPressI={() => setPageI(2)} />
        <ComponentButtonSlider onPressI={() => setPageI(3)} />
        <ComponentButtonSlider onPressI={() => setPageI(4)} />
        <ComponentButtonSlider onPressI={() => setPageI(5)} />
      </View>
    </View>
  );
}
