export const PhotoGallery = () => {
    return (
        <div className="gallery">
            <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" /></head>
            <header>
                <h1>Gallery</h1>
                <div className="src">
                    <input type="text" />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </header>
            <div className="main">
                <div className="sec1">
                    <img src="affectionate-birds-sitting-together-branch.jpg" alt="1" />
                    <img src="young-girl-field-raising-hand-up.jpg" alt="2" />
                    <img src="young-stylish-photographer-holds-professional-camera-taking-photos.jpg" alt="3" />
                    <img src="zebra-wild.jpg" alt="4" />
                    <img src="view-wild-elk-calf.jpg" alt="5" />
                </div>
                <div className="sec2">
                    <img src="small-boy-with-car-sitting-bed.jpg" alt="1" />
                    <img src="portrait-adorable-newborn-baby.jpg" alt="2" />
                    <img src="portrait-young-little-boy.jpg" alt="3" />
                    <img src="creative-collage-landscape.jpg" alt="4" />
                </div>
                <div className="sec3">
                    <img src="view-wild-lion-its-natural-habitat.jpg" alt="1" />
                    <img src="wild-elk-nature-with-calf.jpg" alt="2" />
                    <img src="cute-tourist-taking-photos.jpg" alt="3" />
                    <img src="nature-landscape-with-hand-holding-frame.jpg" alt="4" />
                </div>
            </div>
        </div>
    )
}
