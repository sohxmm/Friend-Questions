import { Suspense } from "react";
import NameDisplay from "./components/NameDisplay";

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Friend Questions</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <NameDisplay />
      </Suspense>
    </main>
  );
}
