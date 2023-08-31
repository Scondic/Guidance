import AuthBlock from "@/components/ui/auth-block/auth-block";

export default function Home() {
  return (
    <main>
      <AuthBlock isSignedIn={true} />
      <AuthBlock isSignedIn={false} />
    </main>
  );
}
