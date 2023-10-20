import { QueryClient, QueryClientProvider } from "react-query";
import { RootTabLayout } from "./layouts/RootTabLayout";
import "bootstrap/dist/css/bootstrap.min.css";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootTabLayout />
    </QueryClientProvider>
  );
}
