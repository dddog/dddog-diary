import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors";

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
`;
const BtnText = styled.Text`
  color: white;
`;

const Home = ({ navigation: { navigate } }) => (
  <View>
    <Title>My journal</Title>
    <Btn onPress={() => navigate("Write")}>
      <Ionicons name="add" color="white" size={40} />
    </Btn>
  </View>
);

export default Home;
