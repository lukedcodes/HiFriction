import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const { username, email } = await req.json();

  if (!username || !email) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;
  if (!usernamePattern.test(username)) {
    return NextResponse.json({ error: "Invalid username" }, { status: 400 });
  }

  const { error } = await supabase
    .from("waitlist")
    .insert({ username: username.toLowerCase(), email: email.toLowerCase() });

  if (error) {
    if (error.code === "23505") {
      const isDuplicateEmail = error.message.includes("email");
      return NextResponse.json(
        {
          error: isDuplicateEmail
            ? "Looks like you're already in. Good instincts."
            : "Someone just grabbed that one. Humans are fast.",
        },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: "Something went wrong. A human is on it." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
