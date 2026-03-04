import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/database";
import { verifyToken } from "@/lib/jwtToken";

export async function GET(req: NextRequest) {
  try {
    // console.log("req to user data");
    //  Access cookies
    const cookieStore = cookies();
    const user = (await cookieStore).get("userToken")?.value;

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const uid = verifyToken(user)?.userId;

    const dbResponse = await db.query(
      `SELECT first_name,last_name, username, email FROM users WHERE id = $1`,
      [uid],
    );

    if (dbResponse.rows.length == 0) {
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 },
      );
    } else {
      // send json to frontend:
      return NextResponse.json({
        success: true,
        data: dbResponse.rows[0],
      });
    }
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
