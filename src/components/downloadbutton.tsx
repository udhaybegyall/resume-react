import DownlaodIcon from '../assets/icons/downlaod.svg';

const DownloadButton = () => {
    return (
        <a title="Download CV" className="download-button" href="https://github.com/udhaybegyall/resume-react/tree/main/src/assets/resume.pdf" download>
            <img src={DownlaodIcon} alt="Download Resume" />
        </a>
    );
}

export default DownloadButton;