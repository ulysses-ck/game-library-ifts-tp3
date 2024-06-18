import { supabase } from "@/supabase";
import { notFound } from "next/navigation";
import FormEdit from "@/components/FormEdit";

export default async function EditPage({ params }) {
  const { data, error } = await supabase
    .from("games")
    .select()
    .eq("Rank", params.game);

  if (error) {
    return notFound();
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 to-blue-200 p-4">
        <FormEdit data={data} />
      
    </main>
  );
}
