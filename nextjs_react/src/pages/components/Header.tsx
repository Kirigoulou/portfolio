type headerProps = {
    name: string;
    title: string;
    catchphrase: string;
}

export default function Header(props: headerProps) {
    return (
        <header className="pres-header">
            <h1>{props.name}</h1>
            <h2>{props.title}</h2>
            <p className={"catchphrase"}>{props.catchphrase}</p>
        </header>
    );
}