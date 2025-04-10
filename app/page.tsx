"use client";

import { useSearchParams } from "next/navigation";
import QuestionFlow from "./components/QuestionFlow";

export default function Home() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "XYZ";

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white p-4">
      <QuestionFlow name={name} />
    </main>
  );
}
