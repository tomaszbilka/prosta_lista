import "../i18n";
import "react-native-url-polyfill/auto";
import { useState, useEffect } from "react";
import { Redirect } from "expo-router";

import type { Session } from "@supabase/supabase-js";

import { supabase } from "api/supabase";
import Welcome from "components/Welcome";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    setIsLoading(false);
  }, []);

  if (isLoading) return <Welcome />;

  return session && session.user ? (
    <Redirect href="/home" />
  ) : (
    <Redirect href="auth/login" />
  );
};
export default Index;
