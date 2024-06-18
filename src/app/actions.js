"use server";

import { supabase } from "@/supabase";
import { revalidatePath } from "next/cache";

export async function addNewGame(formData) {
  const rawFormData = {
    Name: formData.get("Name"),
    Platform: formData.get("Platform"),
    Year: formData.get("Year"),
    Genre: formData.get("Genre"),
    Publisher: formData.get("Publisher"),
    NA_Sales: formData.get("NA_Sales"),
    EU_Sales: formData.get("EU_Sales"),
    JP_Sales: formData.get("JP_Sales"),
    Other_Sales: formData.get("Other_Sales"),
  };

  const { data, error } = await supabase
    .from("games")
    .insert(rawFormData)
    .select();

  if (error) {
    return {
      status: 500,
      body: error,
    };
  }

  revalidatePath("/", "layout");

  return {
    status: 200,
    body: data,
  };
}

export async function deleteGame(formData) {
  const { data, error } = await supabase
    .from("games")
    .delete()
    .eq("Rank", formData.get("Rank"));

  if (error) {
    return {
      status: 500,
      body: error,
    };
  }

  revalidatePath("/", "layout");
  return {
    status: 200,
    body: data,
  };
}

export async function editGame(formData) {
  const rawFormData = {
    Rank: formData.get("Rank"),
    Name: formData.get("Name"),
    Platform: formData.get("Platform"),
    Year: formData.get("Year"),
    Genre: formData.get("Genre"),
    Publisher: formData.get("Publisher"),
    NA_Sales: formData.get("NA_Sales"),
    EU_Sales: formData.get("EU_Sales"),
    JP_Sales: formData.get("JP_Sales"),
    Other_Sales: formData.get("Other_Sales"),
  };
  const { data, error } = await supabase
    .from("games")
    .update(rawFormData)
    .eq("Rank", formData.get("Rank"));

  if (error) {
    return {
      status: 500,
      body: error,
    };
  }

  revalidatePath("/", "layout");
  return {
    status: 200,
    body: data,
  };
}

export async function getGames(_, formData) {
  const rawFormData = {
    offset: formData.get("offset") || 0,
    limit: formData.get("limit") || 10,
    ascending: formData.get("ascending") || false,
  };

  const { data, error } = await supabase
    .from("games")
    .select(
      "Rank, Platform, Name, Year, Genre, Publisher, NA_Sales, EU_Sales, JP_Sales, Other_Sales"
    )
    .range(rawFormData.offset, rawFormData.offset + rawFormData.limit - 1)
    .order("Rank", { ascending: rawFormData.ascending });

  if (error) {
    return {
      status: 500,
      body: error,
    };
  }

  return {
    status: 200,
    data,
  };
}
