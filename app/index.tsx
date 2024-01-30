import "react-native-url-polyfill/auto";
import { Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import "../i18n";

const Index = () => (
  <SafeAreaView>
    <Redirect href="/home" />
  </SafeAreaView>
);

export default Index;
