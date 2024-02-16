import { notFound } from "next/navigation"

export default function DynamicNotFoundCatchPage(){
    console.log("not found catcher")
    return notFound();
}