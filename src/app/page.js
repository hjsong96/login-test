import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default function Page() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <Link href={"/login"}>로그인</Link>
    </div>
  );
}
