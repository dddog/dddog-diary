import { AdMobInterstitial, AdMobRewarded } from "expo-ads-admob";
import React, { useState } from "react";
import { Alert, Platform } from "react-native";
import styled from "styled-components/native";
import colors from "../colors";

const View = styled.View`
  background-color: ${colors.bgColor};
  flex: 1;
  padding: 0px 20px;
`;
const Title = styled.Text`
  color: ${colors.textColor};
  text-align: center;
  margin: 50px 0px;
  font-size: 28px;
  font-weight: ${Platform.OS === "ios" ? "500" : "bold"};
`;
const TextInput = styled.TextInput`
  background-color: white;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 18px;
  color: black;
  ${Platform.select({
    android: {
      elevation: 5,
      // height: 40,
      // color: "red",
    },
  })};
`;
const Btn = styled.TouchableOpacity`
  background-color: ${colors.btnColor};
  padding: 10px 20px;
  align-items: center;
  margin-top: 30px;
  border-radius: 20px;
  width: 100%;
`;
const BtnText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: ${Platform.OS === "ios" ? "500" : "bold"};
`;
const Emotions = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: space-between;
`;
const Emotion = styled.TouchableOpacity`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  border-color: rgba(0, 0, 0, 0.5);
  border-width: ${(props) => (props.selected ? "2px" : "0px")};
  ${Platform.select({
    android: {
      elevation: 5,
    },
  })};
`;
const EmotionText = styled.Text`
  font-size: 24px;
`;

const emotions = ["😂", "🥰", "🤮", "🥶", "🤩"];

const Write = ({ navigation: { goBack } }) => {
  const [feeling, setFeeling] = useState("");
  const [selectEmotion, setEmotion] = useState(null);
  const onChangeText = (text) => setFeeling(text);
  const onEmotionPress = (face) => setEmotion(face);
  const onSubmit = async () => {
    if (feeling === "" || selectEmotion == null) {
      return Alert.alert("Please complate form.");
    }

    await AdMobRewarded.setAdUnitID("ca-app-pub-3940256099942544/5354046379"); // Test ID, Replace with your-admob-unit-id
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();

    // goBack();
  };
  console.log(feeling, selectEmotion);
  return (
    <View>
      <Title>How do you feel today?</Title>
      <Emotions>
        {emotions.map((emotion, index) => (
          <Emotion
            selected={emotion === selectEmotion}
            key={index}
            onPress={() => onEmotionPress(emotion)}
          >
            <EmotionText>{emotion}</EmotionText>
          </Emotion>
        ))}
      </Emotions>
      <TextInput
        onSubmitEditing={onSubmit}
        returnKeyType="done"
        returnKeyLabel="done"
        onChangeText={onChangeText}
        value={feeling}
        placeholder={"Write your feelings..."}
        placeholderTextColor={"#C5C8CE"}
      />
      <Btn onPress={onSubmit}>
        <BtnText>Save</BtnText>
      </Btn>
    </View>
  );
};

export default Write;
