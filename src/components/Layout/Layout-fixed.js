export default function Layout({children}) {

    return (
        <div className="fixed-height">
            <div className="container">
                {children}
            </div>
        </div>
    );
}