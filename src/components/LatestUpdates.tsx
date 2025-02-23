import React from 'react';
import "./LatestUpdates.css"

const LatestUpdates: React.FC = () => {
  const latestUpdates = [
    {
      cover: './cover1.png',
      title: 'Solo Leveling',
      chapters: [120, 119, 118],
      link: 'https://example.com/comic1',
    },
    {
      cover: './cover2.png',
      title: 'Nano Machine',
      chapters: [85, 84, 83],
      link: 'https://example.com/comic2',
    },
    {
      cover: './cover3.png',
      title: 'Solo Max-Level Newbie',
      chapters: [95, 94, 93],
      link: 'https://example.com/comic3',
    },
    {
      cover: './cover4.png',
      title: 'Mount Hua Sect',
      chapters: [70, 69, 68],
      link: 'https://example.com/comic4',
    },
    {
      cover: './cover5.png',
      title: 'Infinite Gacha',
      chapters: [105, 104, 103],
      link: 'https://example.com/comic5',
    },
    {
      cover: './cover6.png',
      title: 'Zenith',
      chapters: [110, 109, 108],
      link: 'https://example.com/comic6',
    },
    {
      cover: './cover7.png',
      title: 'Novels Extra',
      chapters: [95, 94, 93],
      link: 'https://example.com/comic7',
    },
    {
      cover: './cover8.png',
      title: 'Logging 1000 Years',
      chapters: [80, 79, 78],
      link: 'https://example.com/comic8',
    },
    {
      cover: './cover9.png',
      title: 'Swordmaster\'s Youngest Son',
      chapters: [115, 114, 113],
      link: 'https://example.com/comic9',
    },
    {
      cover: './cover10.png',
      title: 'Wudang Warrior',
      chapters: [95, 94, 93],
      link: 'https://example.com/comic10',
    },
  ];

  return (
    <div className="latest-updates">
      <h2>Latest Updates</h2>
      <div className="updates-grid">
        {latestUpdates.map((comic, index) => (
          <div key={index} className="comic-item">
            <img className="comic-cover" src={comic.cover} alt={comic.title} />
            <div className="comic-details">
              <p className="comic-title"><a href="#">{comic.title}</a></p>
              <div className="chapters">
                {comic.chapters.map((chapter, idx) => (
                  <a key={idx} href={comic.link} className="chapter-link">
                    Chapter {chapter}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestUpdates;
