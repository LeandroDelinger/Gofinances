import { Feather } from "@expo/vector-icons";
import {
  BorderlessButton,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(GestureHandlerRootView)`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  width: 100%;
  height: ${RFValue(113)}px;

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const Content = styled.ScrollView``;

export const ChartContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const MonthSelect = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

export const MonthSelectbutton = styled(BorderlessButton)``;

export const SelectIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;
`;

export const Month = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;
