import Image from "next/image";

export default function App() {
  return (
    <div className="p-10 m-10">
      <h1 className="pb-8 text-2xl flex justify-center font-bold">MARIO GONZÁLEZ VELA</h1>
      <div className="flex justify-center">
        <Image
          src="/images/webMaster.jpg"
          width={600}   
          height={500}
          alt="web"
        /> 
      </div>
    </div>
  );
}
