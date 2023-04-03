import { connectToDatabase } from "../../../lib/mongodb";
import User from "../../models/User";

export default async function handler(
  req: {
    method: string;
    body: { name: any; email: any; company: any; numberOfAffiliates: any };
  },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { message: string }): void; new (): any };
    };
  }
) {
  await connectToDatabase();
  if (req.method === "POST") {
    const { name, email, company, numberOfAffiliates } = req.body;

    const user = new User({
      name,
      email,
      company,
      numberOfAffiliates: parseInt(numberOfAffiliates, 10),
    });

    await user.save();

    res.status(200).json({ message: "User saved successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
