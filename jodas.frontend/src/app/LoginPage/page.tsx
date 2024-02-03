import LoginForm from "../Components/Login";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/loginBackground.jpg')] h-full">
        <LoginForm />
      </div>
    </>
  );
}