import { Outlet } from "react-router-dom";

import { Container } from "@/components/Container";

export const RootLayout = () => {
  return (
    <Container className="flex flex-col">
      {/* Add header component below */}
      <main className="flex-1">
        <Outlet />
      </main>
      {/* Add footer component below */}
    </Container>
  );
};
