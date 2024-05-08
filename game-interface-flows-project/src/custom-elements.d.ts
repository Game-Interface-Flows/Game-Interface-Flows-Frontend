declare global {
    namespace JSX {
        interface IntrinsicElements {
            "space-space": React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement> & { spaces?: string },
                HTMLElement
            >;
        }
    }
}

export {};
