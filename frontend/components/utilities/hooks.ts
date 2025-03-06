// This file contains custom hooks that can be used in any component
// to perform common tasks like fetching data, redirecting, etc.
// The hooks are exported and can be imported in any component.

import { redirect } from "next/navigation";
import { auth } from "./auth";

export const requireAuth = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect('/login')
  }

  return session;
  
};


 

