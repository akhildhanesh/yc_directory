"use server"

import { signIn, signOut } from "@/auth";

export async function loginGithub() {
    await signIn({ redirectTo: "/" })
}

export async function logoutGithub() {
    await signOut({ redirectTo: "/" })
}