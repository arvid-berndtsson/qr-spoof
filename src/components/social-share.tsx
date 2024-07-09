import React from "react";

interface SocialShareProps {
  url: string;
  title: string;
  description: string;
}

const SocialShare: React.FC<SocialShareProps> = ({
  url,
  title,
  description,
}) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  return (
    <div className="flex space-x-4">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600"
        aria-label="Share on Facebook"
      >
        Share on Facebook
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400"
        aria-label="Share on Twitter"
      >
        Share on Twitter
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700"
        aria-label="Share on LinkedIn"
      >
        Share on LinkedIn
      </a>
    </div>
  );
};

export default SocialShare;
