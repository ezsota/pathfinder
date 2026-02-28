export default function LoadingPage() {
    console.log('LoadingPage.jsx loaded')

    return (
        <div className="
        d-flex 
        flex-column 
        justify-content-center 
        align-items-center 
        min-vh-100
        bg-darkblue">
            <main className="text-center">
                <h1 className="w-100 text-center text-red">LOADING</h1>
            </main>
        </div>
    );
};