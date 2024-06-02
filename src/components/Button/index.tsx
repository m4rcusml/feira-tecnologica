import './styles.css';

type Props = {
    title?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    onClick?(): void;
}

export function Button({ style, title, children, onClick }: Props) {
    return (
        <button type='button' className='general-button' onClick={onClick} style={style}>
            {title || children}
        </button>
    )
}