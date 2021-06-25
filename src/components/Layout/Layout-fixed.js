export default function LayoutFixed({children}) {

    return (
        <div className="fixed-height">
            <div className="container">
                {children}
            </div>
        </div>
    );
}