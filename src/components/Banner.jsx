// hero banner on home page, login/logout-page, 

export default function Banner() {
    console.log('components/Banner.jsx loaded');

    return (
        <div className="bg-darkblue">
            <h1 className="p-2 py-sm-5 px-sm-2 text-red">PATHFINDER</h1>
        </div>
    );
};

/*
===============
BOOTSTRAP NOTES
===============
    ** STYLE PRECEDENCE -> classes take precedence from L to R -> "p-sm-5 p-1" will set padding to 5 
        regardless of the screen and "p-sm-1"m BS cascades L to R.
    
    ** p-sm-* -> applies padding from small breakpoint and up (not small screens only)
*/