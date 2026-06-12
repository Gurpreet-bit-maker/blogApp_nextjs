import connectDb from "@/app/lib/mongodbConnection";
import Blogmodel from "@/app/lib/models/postmodel";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ blogapi: string }> },
) {
  try {
    await connectDb();
    let { blogapi } = await params;
    let singleBlog = await Blogmodel.findById(blogapi);
    return Response.json(singleBlog);
  } catch (error) {
    console.log(error);
    return Response.json({ status: 500 });
  }
}
