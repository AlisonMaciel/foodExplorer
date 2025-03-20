import {Container} from "./styles.js"

export function Input({icon: Icon, title, ...rest}) {
    return (
        <Container>

            <span>{title}</span>

            <div {...rest}>
                {Icon && <Icon size={24}/>}
                <input {...rest}/>
            </div>
            
        </Container>
    )
}