// copyright, standard footer

export default function Footer() {
    console.log('components/Footer.jsx loaded')

    return (
        <footer className="bg-darkblue text-end">
            <p className="text-purple m-0 py-2 pe-3">PATHFINDER &copy;4026</p>
        </footer>
    );
};

/*
===============
BOOTSTRAP NOTES
===============
    - py -> sets padding for top and bottom (y-axis)
    - px -> for left and right (x-axis)
    - ps -> padding start (left)
    - pe -> padding end (right)
*/