export type aboutProps = Array<{id: string, content: string}>;

export function About({ paragraphs }: { paragraphs: aboutProps }) {
    return (
        <section>
            {paragraphs.map((par) => (
                <p key={par.id}>{par.content}</p>
            ))}
        </section>
    );
}