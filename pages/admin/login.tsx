import { Button } from "@/components/button";
export default function Login() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    data.append(
      "username",
      (document.getElementById("username") as HTMLInputElement).value
    );
    data.append(
      "password",
      (document.getElementById("password") as HTMLInputElement).value
    );

    const dataObj: IFormData = {
      username: data.get("username") as string,
      password: data.get("password") as string,
    };

    console.log(dataObj);
  };

  return (
    <form
      onSubmit={onSubmit}
      id="form"
      className="flex flex-col gap-4 text-3xl justify-center"
    >
      <div>LOGIN</div>
      <div className="flex flex-row">
        <div>Username:</div>
        <input
          type="text"
          id="username"
          placeholder="[ENTER]"
          className="bg-black text-white"
        />
      </div>
      <div className="flex flex-row">
        <div>Password:</div>
        <input
          type="password"
          id="password"
          placeholder="[ENTER]"
          className="bg-black text-white"
        />
      </div>
      <Button className="pt-8">[LOGIN]</Button>
    </form>
  );
}

interface IFormData {
  username: string;
  password: string;
}
