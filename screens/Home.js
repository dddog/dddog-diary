import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors";
import { AdMobBanner } from "expo-ads-admob";

const View = styled.View`
  flex: 1;
  background-color: ${colors.bgColor};
  padding: 0px 50px;
  padding-top: 60px;
`;
const Title = styled.Text`
  color: ${colors.textColor};
  font-size: 38px;
  margin-bottom: 100px;
`;
const Btn = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  right: 50px;
  background-color: ${colors.btnColor};
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  elevation: 5;
  /* box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3); */
`;
const BtnText = styled.Text`
  color: white;
`;

const Home = ({ navigation: { navigate } }) => (
  <View>
    <Title>My journal</Title>
    <AdMobBanner
      style={{ backgroundColor: "red" }}
      adUnitID="ca-app-pub-3940256099942544/6300978111"
      bannerSize="largeBanner"
    />
    <Btn onPress={() => navigate("Write")}>
      <Ionicons name="add" color="white" size={40} />
    </Btn>
  </View>
);

export default Home;
