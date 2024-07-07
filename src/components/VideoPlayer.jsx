/* eslint-disable react/prop-types */

const VideoPlayer = ({ src, poster }) => {
    return (
        <div className="w-full p-4 shadow rounded-t bg-white">
            <video className="w-full max-h-96 rounded-lg" controls poster={poster}>
                <source src={src} type="video/mp4" />
                Votre navigateur ne supporte pas les vidéos.
            </video>
        </div>
    );
}

export default VideoPlayer;
