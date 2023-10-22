type GreetProps = {
    name ?: string
}

export const Greet = (props : GreetProps) => {
    return <h1>hello {props.name}! </h1> ;
}