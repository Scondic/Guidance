"use client";

import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const QueryProvider = (props: { children: React.ReactNode }) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
};

export default QueryProvider;
