import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/server";

export default async function getSession(){
    return await getServerSession(authOptions)
}