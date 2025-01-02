import React from 'react';
import { FaDownload } from 'react-icons/fa';

type DownloadButtonProps = {
  url: string;
  className?: string;
};


const DownloadButton = ({ url, className = '' }: DownloadButtonProps) => {
  return (
    <a
      href={url}
      download
      className={`inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full transition-colors  justify-center${className}`}
    >
      <FaDownload />
      Download CV
    </a>
  );
};

export default DownloadButton