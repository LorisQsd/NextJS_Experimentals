"use client";

export default function NotFoundPage() {
    const handleClick = () => {
        console.log(process.env.CONTENTFUL)
    }

    return (
        <section className="flex items-center justify-center">
            <h1 className="text-center font-bold text-xl">Page introuvable...</h1>

            <div>
                <button onClick={handleClick}>click me</button>
            </div>
        </section>
    )
}