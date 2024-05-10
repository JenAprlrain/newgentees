import { Button } from "@/components/button";
export default function Login () {
  return (
    <div className="flex flex-col gap-4 text-3xl justify-center">
      <div>LOGIN</div>
      <div className="flex flex-row">
       <div>Username:</div> 
        <input type="" placeholder="[ENTER]" className="bg-black text-white" />
        </div>
        <div className="flex flex-row">
        <div>Password:</div> 
        <input type="" placeholder="[ENTER]" className="bg-black text-white" />
        </div>
      <Button className="pt-8">[LOGIN]</Button>
    </div>
  );
};
