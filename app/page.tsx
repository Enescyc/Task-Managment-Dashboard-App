import Sidebar from "@/components/sidebar/sidebar";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row w-full h-full bg-[#FAFAFA]">
      <Sidebar></Sidebar>
      <div className={"flex w-full"}>
        Main Content TODO
      </div>
      <div className={"flex w-1/3 h-full"}>
        Right Sidebar TODO
      </div>
    </main>
  );
}
