/**
 * =============================================================================
 * PRESS & EXHIBITIONS DATA
 * =============================================================================
 * 
 * Structured data for exhibitions, publications, awards, and press mentions.
 * 
 * HOW TO ADD NEW ENTRIES:
 * 1. Find the appropriate section (Exhibitions, Publications, Awards, Press)
 * 2. Add new item at the TOP of the items array (most recent first)
 * 3. Include year, text, and optionally a URL
 * 
 * URL is optional - entries without URLs render as plain text.
 * 
 * @module data/press
 */

const pressData = [
  // ---------------------------------------------------------------------------
  // EXHIBITIONS
  // Gallery shows, museum exhibitions, group shows
  // ---------------------------------------------------------------------------
  {
    title: 'Exhibitions',
    items: [
      { 
        year: '2021', 
        text: 'Life in the Pandemic, Davis Orton Gallery', 
        url: 'https://davisortongallery.com/2021-exhibitions/',
      },
      { 
        year: '2020', 
        text: 'The Performer, LoosenArt', 
        url: 'https://www.loosenart.com/blogs/magazine/the-performer',
      },
      { 
        year: '2020', 
        text: 'Shadow Proximity, The Hewitt Gallery of Art',
        // No URL - will render as plain text
      },
      { 
        year: '2019', 
        text: 'Complementary Colors, The Hewitt Gallery of Art',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // PUBLICATIONS
  // Magazine features, book inclusions, online publications
  // ---------------------------------------------------------------------------
  {
    title: 'Publications',
    items: [
      { 
        year: '2019', 
        text: 'Elegant Magazine', 
        url: 'https://www.magcloud.com/browse/issue/1660965',
      },
      { 
        year: '2019', 
        text: 'Iridescent Women',
      },
      { 
        year: '2019', 
        text: 'Masthead Magazine', 
        url: 'https://mastheadmagazine.com/thingswelove/darner-socks/',
      },
      { 
        year: '2015', 
        text: 'LADYGUNN Magazine',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // AWARDS
  // Film festivals, photography competitions, honors
  // ---------------------------------------------------------------------------
  {
    title: 'Awards',
    items: [
      { 
        year: '2022', 
        text: 'Oz Indie Film Festival, Honorable Mention',
      },
      { 
        year: '2021', 
        text: 'Berlin Indie Film Festival, Winner', 
        url: 'https://berlinindiefilmfestival.com/winners-2021/winners-2021-february/',
      },
      { 
        year: '2021', 
        text: 'Munich New Wave Short Film Festival, Winner', 
        url: 'https://www.newwavefilmfestival.com/february-winners',
      },
      { 
        year: '2021', 
        text: 'Athens International Monthly Art Film Festival',
      },
      { 
        year: '2021', 
        text: 'FROSTBITE International Indie Fest, Finalist',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // PRESS
  // News articles, interviews, features
  // ---------------------------------------------------------------------------
  {
    title: 'Press',
    items: [
      { 
        year: '2020', 
        text: 'ABC El Paso', 
        url: 'https://kvia.com/entertainment/2020/12/18/el-paso-modern-dance-company-to-stage-virtual-global-performance-online/',
      },
      { 
        year: '2020', 
        text: 'Broadway World', 
        url: 'https://www.broadwayworld.com/bwwdance/article/VIDEO-DirectorChoreographer-Lorna-Ventura-Presents-Outside-In-Quarantine-Session-Music-Video-20200609',
      },
      { 
        year: '2019', 
        text: 'The Monitor', 
        url: 'https://themonitormmc.com/1113/profiles/shaelyn-mcfadden-rose-sheridan/',
      },
      { 
        year: '2018', 
        text: 'Sonic Yoga', 
        url: 'https://sonicyoga.com/yogi-of-the-month-claire-sersun/',
      },
      { 
        year: '2015', 
        text: 'Promonews', 
        url: 'https://www.promonews.tv/videos/2015/06/29/ruby-rabbitfoot-bad-i-am-natalie-neal/35148',
      },
    ],
  },
];

export default pressData;
