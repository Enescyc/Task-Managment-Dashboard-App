import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row w-full h-full bg-[#FAFAFA]">
      <Sidebar></Sidebar>
      <div className={"flex w-full h-full"}>
        Main conent
      </div>
      <div className={"flex w-1/2 h-full"}>
        Right sidebar
      </div>
    </main>
  );
}
