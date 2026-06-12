import connectDb from "../../lib/mongodbConnection";
import BlogModel from "../../lib/models/postmodel";
export async function GET() {
  await connectDb();
  let blogData = await BlogModel.find();
  console.log(blogData);
  return Response.json(blogData);
}
// export async function GET(){

// }

export async function POST(request: Request) {
  try {
    await connectDb();
    let fetchData = await request.json();
    let postedData = await BlogModel.create(fetchData);
    console.log(postedData);
    return Response.json(postedData);
  } catch (error) {
    console.log(error);
    return Response.json({ message: "error hai " }, { status: 500 });
  }
}
