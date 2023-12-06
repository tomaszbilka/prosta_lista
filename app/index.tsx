import { Redirect } from "expo-router";

import "../i18n";

const Index = () => {
  //if token redirect to home, otherwise to login
  return <Redirect href="/home" />;
};
export default Index;
